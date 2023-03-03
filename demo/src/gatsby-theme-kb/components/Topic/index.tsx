import React from 'react'
import ThemeTopic, {
  Props as ThemeTopicProps,
} from 'gatsby-theme-kb/src/components/Topic'
import Comment from './Comment'

interface TopicProps extends ThemeTopicProps {}

const Topic = (props: TopicProps) => {
  return (
    <>
      <ThemeTopic {...props}></ThemeTopic>
      {/* 댓글창 생기기/없애기*/}
      {/* <div className="comment-wrapper">
        <Comment issueTerm={props.file.fields.slug} />
      </div> */}
    </>
  )
}

export default Topic
