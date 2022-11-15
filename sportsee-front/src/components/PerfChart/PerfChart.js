import './perf-chart.scss';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

function PerfChart() {

    const data = [
        {
          subject: 'Intensité',
          A: 120,
          B: 110,
          fullMark: 150,
        },
        {
          subject: 'Vitesse',
          A: 98,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Force',
          A: 86,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Endurance',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Energie',
          A: 85,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'Cardio',
          A: 65,
          B: 85,
          fullMark: 150,
        },
      ];

    return (

        <div className='perf-chart-container'>
            <RadarChart
      cx="50%"
      cy="50%"
      outerRadius={85}
      width={258}
      height={258}
      data={data}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey='subject' 
                    tickLine={false} 
                    tick={{ fontSize: 12, fontWeight: 500 }} 
                    stroke="#FFFFFF"  />
      <Radar
        dataKey="A" fill="#FF0101B2" />
    </RadarChart>
        </div>
    )
}

export default PerfChart;