import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { QuizMarvel } from '../quizMarvel'
import QuizOver from '../QuizOver'
import Level from '../Level'
import ProgressBar from '../ProgressBar'
import { FaChevronRight } from 'react-icons/fa';

toast.configure();

class Quiz extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
                levelNames:["debutant", "confirme", "expert"],
                quizLevel: 0,
                maxQuestions: 10,
                sotredQuestions: [],
                question: null,
                options: [],
                idQuestion: 0,
                btnSubmit: true,
                userAnswer: null,
                score: 0,
                showWelcomeMsg: false,
                quizEnd: false,
                percent: 0,
               
            }

        this.state = this.initialState;
        this.storedDataRef = React.createRef();

        
    }


    loadQuestions = quizz => {
       
        const fetchedArrayQuiz = QuizMarvel[0].quizz[quizz];

        if (fetchedArrayQuiz.length >= this.state.maxQuestions) {

            this.storedDataRef.current = fetchedArrayQuiz;

            const newArray = fetchedArrayQuiz.map( ({ answer, ...keepRest}) => keepRest);

            this.setState ({
                sotredQuestions: newArray
            })

        } else {
            console.log("Pas assez de questions !!!");

        }
    }

        showWelcomeMsg = pseudo => {

            if (!this.state.showWelcomeMsg) {

                this.setState({
                    showWelcomeMsg: true
                })

                toast.dark(`Bienvenue ${pseudo} et Bonne chance`, {
                    position: "top-right",
                    autoClose: 4500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    bodyClassName:"toastify-color-welcome",
                    });
            }
            
        }

        componentDidMount = () => {
            this.loadQuestions(this.state.levelNames[this.state.quizLevel])
            
        }

        nextQuestion = () => {
            if (this.state.idQuestion === this.state.maxQuestions - 1) {

                this.setState({
                    quizEnd: true
                })
                
            } else {
                this.setState(prevState => ({
                    idQuestion: prevState.idQuestion + 1
                }))
            }

            // +1 dans le score
            const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer;
            if (this.state.userAnswer === goodAnswer) {
                this.setState(prevState => ({
                    score: prevState.score + 1
                }))
                  
                toast.success('Bravo : +1', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    bodyClassName:"toastify-color",
                    });
                } else {
                    toast.error('Raté : 0', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        bodyClassName:"toastify-color"
                        });
                }
            }
   
        componentDidUpdate = (prevProps, prevState) => {
            if ((this.state.sotredQuestions !== prevState.sotredQuestions) && this.state.sotredQuestions.length) {
                this.setState ({
                    question: this.state.sotredQuestions[this.state.idQuestion].question,
                    options: this.state.sotredQuestions[this.state.idQuestion].options
                    
                })

            }
            
            if ((this.state.idQuestion !== prevState.idQuestion) && this.state.sotredQuestions) {

                this.setState ({
                    question: this.state.sotredQuestions[this.state.idQuestion].question,
                    options: this.state.sotredQuestions[this.state.idQuestion].options,
                    userAnswer: null,
                    btnSubmit: true
                    
                })
            }

            if (this.state.quizEnd !== prevState.quizEnd) {
                const gradepercent = this.getpercentage(this.state.maxQuestions, this.state.score);
                this.gameOver(gradepercent)
            }
            if (this.props.userData.pseudo) {
                this.showWelcomeMsg(this.props.userData.pseudo)
                console.log(`Bienvenue ${this.props.userData.pseudo}`)
            }

        }
        
        
        getpercentage = (maxQuestion, ourScore) => (ourScore / maxQuestion) * 100;

        gameOver = percent => {

            const gradepercent = this.getpercentage(this.state.maxQuestions, this.state.score);

            if (percent >= 70) {

            this.setState({
                quizLevel: this.state.quizLevel + 1,
                percent
            
            })

            } else {
            this.setState({
                percent
                
            })

            }

        }

        loadLevelQuestions = param => {
            this.setState({...this.initialState, quizLevel: param});

            this.loadQuestions(this.state.levelNames[param])
        }

        
        render() {                        

            const submitAnswer = selectAnswer => {
                this.setState({
                    userAnswer: selectAnswer,
                    btnSubmit: false
                })
                console.log(selectAnswer)
            }
            
            
           const displayOption = this.state.options.map( (option, index) => {
             
            return(
                <p key={index} 
                onClick={() => submitAnswer(option)} 
                className={`answerOptions ${this.state.userAnswer === option ? "selected" : null}`}
                >   
                <FaChevronRight />  {option}  
                </p>
              )  
            })

           const btnSuivant =  this.state.idQuestion < this.state.maxQuestions - 1 ? "Suivant" : "Terminer"  

        return this.state.quizEnd ? 
        (
            <QuizOver 
            ref={this.storedDataRef}
            levelNames={this.state.levelNames}
            score={this.state.score}
            maxQuestion={this.state.maxQuestions}
            quizLevel={this.state.quizLevel}
            percent={this.state.percent}
            loadLevelQuestions={this.loadLevelQuestions}
            showWelcomeMsg={this.state.showWelcomeMsg}

            />
        ) 
        : 
        (
            <Fragment>

                <Level 
                levelNames={this.state.levelNames} 
                quizLevel={this.state.quizLevel}
                />
                <ProgressBar idQuestion={this.state.idQuestion} maxQuestions={this.state.maxQuestions} />

                <h2>{this.state.question}</h2>

                { displayOption }

                <button 
                disabled={this.state.btnSubmit} 
                className="btnSubmit"
                onClick={this.nextQuestion}
                >
                {btnSuivant}
                </button>
                
            </Fragment>
            
        )
    
        
    } 
    
}
export default Quiz