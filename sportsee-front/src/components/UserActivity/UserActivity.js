import "./useractivity.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function UserActivity({dataActivity}) {    

    return (
        <div className='user-activity-container'>
          <h2 className='activityChartTitle'>Activité quotidienne</h2>
          <BarChart width={800} height={300} data={dataActivity} margin={{top:10, right:5, left:5, bottom:10,}}>
            <CartesianGrid vertical='false' strokeDasharray='3' height={1} horizontalPoints={[90, 185]} />
            <XAxis dataKey="day" interval='preserveStartEnd' tickSize='0' tickMargin='25' stroke='#9B9EAC' />
            <YAxis dataKey="calories" orientation="right" tickCount='3' tickSize='0' axisLine={false} tickMargin='30' width={80} stroke='#9B9EAC' />
            <Tooltip />
            <Legend verticalAlign='top' align='right' height={80} iconType='circle' iconSize={8} formatter={(value, entry, index) => (
                            <span className='activityLegendColor'>{value}</span>)}/>
            <Bar dataKey="calories" name="Calories brûlées (kCal)" fill='#E60000' radius={[25, 25, 0, 0]} barSize={7} />
            <Bar dataKey="kilogram" name="Poids (kg)" fill='#282D30' radius={[25, 25, 0, 0]} barSize={7} />
          </BarChart>
        </div>
    );
  }

export default UserActivity;