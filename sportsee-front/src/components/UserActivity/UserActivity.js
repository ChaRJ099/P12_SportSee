import "./useractivity.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function UserActivity() {    

const data = [
  {
    name: '1',
    poids: 4000,
    calories: 2400,
    amt: 2400,
  },
  {
    name: '2',
    poids: 3000,
    calories: 1398,
    amt: 2210,
  },
  {
    name: '3',
    poids: 2000,
    calories: 9800,
    amt: 2290,
  },
  {
    name: '4',
    poids: 2780,
    calories: 3908,
    amt: 2000,
  },
  {
    name: '5',
    poids: 1890,
    calories: 4800,
    amt: 2181,
  },
  {
    name: '6',
    poids: 2390,
    calories: 3800,
    amt: 2500,
  },
  {
    name: '7',
    poids: 3490,
    calories: 4300,
    amt: 2100,
  },
  {
    name: '8',
    poids: 3490,
    calories: 4300,
    amt: 2100,
  },
  {
    name: '9',
    poids: 3490,
    calories: 4300,
    amt: 2100,
  },
  {
    name: '10',
    poids: 3490,
    calories: 4300,
    amt: 2100,
  },
];
    return (
        <div className='user-activity-container'>
          <h2 className='activityChartTitle'>Activité quotidienne</h2>
          <BarChart width={740} height={300} data={data} margin={{top:10, right:5, left:5, bottom:10,}}>
            <CartesianGrid vertical='false' strokeDasharray='3' height={1} horizontalPoints={[90, 185]} />
            <XAxis dataKey="name" interval='preserveStartEnd' tickSize='0' tickMargin='25' stroke='#9B9EAC' />
            <YAxis orientation="right" tickCount='3' tickSize='0' axisLine={false} tickMargin='30' width={45} stroke='#9B9EAC' />
            <Tooltip />
            <Legend verticalAlign='top' align='right' height={80} iconType='circle' iconSize={8} formatter={(value, entry, index) => (
                            <span className='activityLegendColor'>{value}</span>)}/>
            <Bar dataKey="calories" fill='#E60000' radius={[25, 25, 0, 0]} barSize={7} />
            <Bar dataKey="poids" fill='#282D30' radius={[25, 25, 0, 0]} barSize={7} />
          </BarChart>
        </div>
    );
  }

export default UserActivity;