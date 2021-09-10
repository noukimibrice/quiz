import React, { Fragment, useEffect, useState } from 'react'
import { GiTrophyCup } from 'react-icons/gi'

const QuizOver = React.forwardRef((props, ref) => {

const { levelNames, score, maxQuestion, quizLevel, percent, loadLevelQuestions } = props
    // console.log(props)
    // console.log(ref)

    const [asked, setAsked] = useState([]);
    console.log(asked)

    useEffect(() => {
        setAsked(ref.current)
    }, [ref])

    const average = (maxQuestion / 2) + 2;
    console.log(average)
    const decision = score >= average ? (
        

        <Fragment>
            <div className="stepsBtnContainer">
            {
                quizLevel < levelNames.length ? 
                (
                    <Fragment>
                            <p className="successMsg">Bravo, passez au niveau suivant !</p>
                            <button 
                                className="btnResult success"
                                onClick={() => loadLevelQuestions(quizLevel)}
                                >
                                Niveau suivant
                            </button>
                    </Fragment>

                )
                :
                (
                    <Fragment>
                            <p className="successMsg">
                               <GiTrophyCup size='45px'/> Bravo, vous êtes un expert !
                            </p>
                            <button className="btnResult gameOver"
                            onClick={() => loadLevelQuestions(0)}
                            >
                            Accueil
                            </button>
                    </Fragment>
                )
            }
            </div>
            <div className="percentage">
                <div className="progressPercent">Réussite : {percent} %</div>
                <div className="progressPercent">Note : {score}/{maxQuestion}</div>
            </div>
        </Fragment>

    ) 
    :
    (
        <Fragment>
            
            
            <div className="stepsBtnContainer">
                <p className="failureMsg">Vous avez échoué !</p>
                <button className="btnResult gameOver"
                    onClick={() => loadLevelQuestions(quizLevel)}
                >
                Reprendre le Quiz
                </button>
                
            </div>
            <div className="percentage">
                <div className="progressPercent">Réussite : {percent}%</div>
                <div className="progressPercent">Note : {score}/{maxQuestion}</div>
            </div>
                     
        </Fragment>
    )

    const questionAnswer = score >= average ?
        (
            asked.map(question => {
                    return (
                        <tr key={question.id}>
                            <td>{question.question}</td>
                            <td>{question.answer}</td>
                            <td>
                                <button className="btnInfo">Infos</button>
                            </td>
                        </tr>
                    )
                })
        )
        :
        (
            <tr>
                <td colSpan="3">
                    {/* <div className="loader"></div> */}
                    <p style={{textAlign: 'center', color: '#EBA610'}}>Pas de réponses disponibles</p>
                </td>

            </tr>
        )
     

    

    return(
        <Fragment>
            
            { decision }
            <hr />
            <p>Les réponses aux questions posées :</p>

            <div className="answerContainer">
                <table className="answers">
                    <thead>
                        <tr>
                            <th>Questions</th>
                            <th>Réponses</th>
                            <th>Infos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionAnswer}
                    </tbody>

                </table>

            </div>
        </Fragment>
    )
})
export default React.memo(QuizOver)