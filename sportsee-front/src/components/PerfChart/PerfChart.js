import './perf-chart.scss';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

function PerfChart({dataPerf}) {

  const numberToLabelPerf = (kind) => {
        
    switch (kind){
        case 1: return 'Cardio';
        case 2: return 'Energie';
        case 3: return 'Endurance';
        case 4: return 'Force';
        case 5: return 'Vitesse';
        case 6: return 'Intensité';
        default: return null;
    }
}

    return (

        <div className='perf-chart-container'>
          <RadarChart cx="50%" cy="50%" outerRadius={85} width={258} height={258} data={dataPerf} >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey='kind' tickLine={false} tick={{ fontSize: 12, fontWeight: 500 }} stroke="#FFFFFF" tickFormatter={numberToLabelPerf} />
            <Radar dataKey='value' fill="#FF0101B2" />
          </RadarChart>
        </div>
    )
}

export default PerfChart;