import React, { Fragment } from 'react'

const ProgressBar = ({idQuestion, maxQuestions}) => {

    const actualQuestion = idQuestion + 1;

    const getWidth = (totalQuestions, questionId) => {
        return(100/totalQuestions) * questionId;
   
    }
    const ProgressPercent = getWidth(maxQuestions, actualQuestion)
    console.log(ProgressPercent)
    return(
        <Fragment>
            <div className="percentage">
                <div className="progressPercent">{`Question : ${actualQuestion}/${maxQuestions}`}</div>
                <div className="progressPercent">{`Progression ${ProgressPercent}%`}</div>     
            </div>
            <div className="progressBar">
                <div className="progressBarChange" style={{width: `${ProgressPercent}%`}}></div>
            </div>       
        </Fragment>
    )
}
export default React.memo(ProgressBar)