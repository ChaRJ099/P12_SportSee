import './score-chart.scss';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';


function ScoreChart({dataScore}) {  

  function formatScore(data){
    if(data.todayScore){
        data.score = data.todayScore
        delete data.todayScore
        return data
    }
}
formatScore(dataScore);

/**
* Format the score in percentage
* @param {object} data 
* @returns an integer for percentage
*/
function calculatePercent(data){
    const score = Number(data.score)

    return Math.round(score * 100)
}
const dataScorePercent = calculatePercent(dataScore)

    return (

        <div className='score-chart-container'>
          <h2 className='score-chart-title'>Score</h2>
          <RadialBarChart cx="50%" cy="50%" width={100} height={100} innerRadius='90%' startAngle={180} endAngle={-180} data={[dataScore]} >
            <RadialBar minAngle={15} dataKey='score' fill= '#FF0000' cornerRadius={25} barSize={10} />
            <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
            <circle cx="50%" cy="50%" fill="white" r="85"></circle>
          </RadialBarChart>
          <div className="score">
                <p className="scoreResult">{[`${dataScorePercent}%`, ' de votre objectif']}</p>
                {/* <p className="scoreText"></p> */}
            </div>         
        </div>
    )
}

export default ScoreChart;