import React from 'react';
import EachAnswer from './EachAnswer'
export default function QuestionAnswerBundle(props) {
  return (
    <div>
      <h2>{props.question.title}</h2>
      <div>
        {props.answers.map(answer => {
          return <EachAnswer key={answer.id}
                             id={answer.id}
                             questionid={props.questionid}
                             answer={answer.answer}
                             handleDelete={props.handleDelete}
                             handleAnswerCreate={props.handleAnswerCreate}
                             handleAnswerSubmit={props.handleAnswerSubmit}
                             answerCreate={props.answerCreate}
                             toCloseAnswer={props.toCloseAnswer}
                             fetchAll={props.fetchAll}
                             />
        })}
      </div>
    </div>
  )
}
