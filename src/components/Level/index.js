import React, { useEffect, useState } from 'react'
import Stepper from 'react-stepper-horizontal'

const Level = ({levelNames, quizLevel}) => {

    const [levels, setLevels] = useState([]);

    useEffect(() => {

        const quizSteps = levelNames.map(level => ({title: level.toUpperCase()}));
        setLevels(quizSteps)
        
    }, [levelNames]);
   
    return(
        <div className="levelsContainer" style={{background: 'transparent', }}>
                <Stepper 
                    steps={ levels } 
                    activeStep={ quizLevel }
                    circleTop={0}
                    activeTitleColor={'black'}
                    activeColor={'black'}
                    completeTitleColor={'#e0e0e0'}
                    defaultTitleColor={'#e0e0e0'}
                    completeColor={'#e0e0e0'}
                    completeBarColor={'#e0e0e0'}
                    size={40}
                    circleFontSize={20}
                /> 
            
        </div>
    )
}
export default React.memo(Level)