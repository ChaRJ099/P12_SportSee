import './session-chart.scss';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, } from 'recharts';

function SessionChart({dataSessions}) {

  const numberToLetter = (day) => {
    switch(day){
        case 1: return 'L';
        case 2: return 'M';
        case 3: return 'M';
        case 4: return 'J';
        case 5: return 'V';
        case 6: return 'S';
        case 7: return 'D';
        default: return '';
    }
}
  
    return (
      
        <div className='session-chart-container'>
            <span>Durée moyenne des sessions</span>
            <LineChart width={300} height={100} data={dataSessions}  margin={{
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
                        tickFormatter={numberToLetter} 
                    />
                    <YAxis hide='true' domain={['dataMin', 'dataMax']} />
                    {/* <Tooltip content={<CustomToolTypeSessionDuration />} cursor={false} /> */}
                <Line type="natural" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} />
            </LineChart>
        </div>
        
    );
  }

export default SessionChart;