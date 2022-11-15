import './session-chart.scss';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, } from 'recharts';

function SessionChart() {    

const data = [
  {
    day: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    day: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    day: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    day: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    day: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    day: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    day: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

  
    return (
      
        <div className='session-chart-container'>
            <span>Durée moyenne des sessions</span>
            <LineChart width={300} height={100} data={data}  margin={{
                        top:80,
                        right:8,
                        left:8,
                        bottom:40
                    }}>
                      <CartesianGrid horizontal={false} vertical={false} />
                    <XAxis 
                        dataKey='day' 
                        type="category" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 12, fontWeight: 500}} 
                        stroke='rgba(255, 255, 255, 0.5)' 
                        tickMargin={40}
                    />
                    <YAxis hide='true' domain={['dataMin', 'dataMax']} />
                    {/* <Tooltip content={<CustomToolTypeSessionDuration />} cursor={false} /> */}
                <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={2} />
            </LineChart>
        </div>
        
    );
  }

export default SessionChart;