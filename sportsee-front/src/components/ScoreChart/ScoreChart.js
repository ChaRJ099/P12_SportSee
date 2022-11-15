import './score-chart.scss';
import { RadialBarChart, RadialBar } from 'recharts';


function ScoreChart() {   
    
    const data = [
        {
          name: '18-24',
          uv: 31.47,
          pv: 2400,
          fill: '#8884d8',
        }
      ];

    return (

        <div className='score-chart-container'>
          <h2 className='score-chart-title'>Score</h2>
          <RadialBarChart cx={500} cy={500} width={200} height={200} innerRadius='90%' startAngle={180} endAngle={-180} data={data} >
            <RadialBar minAngle={15} dataKey="uv" fill= '#FF0000' cornerRadius={25} barSize={10} />
            {/* <PolarAngleAxis type="number" domain={[0, 1]} tick={false} /> */}
            {/* <circle cx="50%" cy="50%" fill="white" r="85"></circle> */}
          </RadialBarChart>
          <div className="score">
            <p className="scoreResult">12%</p>
            <p className="scoreText">de votre<br/>objectif</p>
          </div>          
        </div>
    )
}

export default ScoreChart;