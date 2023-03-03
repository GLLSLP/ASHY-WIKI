"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFieldsOnGraphQLNodeType = exports.createSchemaCustomization = void 0;
const options_1 = require("./options");
const compute_inbounds_1 = require("./compute-inbounds");
const cache_1 = require("./cache");
const util_1 = require("./util");
const createSchemaCustomization = ({ actions }, _options) => {
    const options = (0, options_1.resolveOptions)(_options);
    actions.createTypes(`
    union ReferenceTarget = ${options.types.join(' | ')}

    type NodeReference {
      target: ReferenceTarget
      refWord: String
      referrer: ReferenceTarget
      targetAnchor: String
      contextLine: String
      label: String
    }
  `);
};
exports.createSchemaCustomization = createSchemaCustomization;
const setFieldsOnGraphQLNodeType = ({ cache, type, getNode }, _options) => {
    const options = (0, options_1.resolveOptions)(_options);
    // if we shouldn't process this node, then return
    if (!options.types.includes(type.name)) {
        return {};
    }
    return {
        outboundReferences: {
            type: `[NodeReference!]!`,
            resolve: async (node) => {
                let cachedNode = await (0, cache_1.getCachedNode)(cache, node.id, getNode);
                if (!cachedNode || !cachedNode.resolvedOutboundReferences) {
                    await (0, compute_inbounds_1.generateData)(cache, getNode);
                    cachedNode = await (0, cache_1.getCachedNode)(cache, node.id, getNode);
                }
                if (cachedNode && cachedNode.resolvedOutboundReferences) {
                    return cachedNode.resolvedOutboundReferences
                        .map((refNode) => {
                        const { target } = refNode;
                        const targetNode = getNode(target.id);
                        if (!targetNode)
                            return null;
                        return Object.assign(Object.assign({}, refNode), { target: targetNode });
                    })
                        .filter(util_1.nonNullable);
                }
                return [];
            },
        },
        inboundReferences: {
            type: `[NodeReference!]!`,
            resolve: async (node) => {
                let data = await (0, cache_1.getInboundReferences)(cache);
                if (!data) {
                    await (0, compute_inbounds_1.generateData)(cache, getNode);
                    data = await (0, cache_1.getInboundReferences)(cache);
                }
                if (data) {
                    return (data[node.id] || [])
                        .map((refNode) => {
                        const { target } = refNode;
                        const targetNode = getNode(target.id);
                        if (!targetNode)
                            return null;
                        return Object.assign(Object.assign({}, refNode), { target: targetNode });
                    })
                        .filter(util_1.nonNullable);
                }
                return [];
            },
        },
    };
};
exports.setFieldsOnGraphQLNodeType = setFieldsOnGraphQLNodeType;
