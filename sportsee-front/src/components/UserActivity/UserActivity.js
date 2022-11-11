import "./useractivity.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function UserActivity() {    

const data = [
  {
    name: 'Page A',
    poids: 4000,
    calories: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    poids: 3000,
    calories: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    poids: 2000,
    calories: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    poids: 2780,
    calories: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    poids: 1890,
    calories: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    poids: 2390,
    calories: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    poids: 3490,
    calories: 4300,
    amt: 2100,
  },
];
    return (
        <div className='user-activity-container'>
            <BarChart width={740} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis orientation="right" />
                <Tooltip />
                <Legend />
                <Bar dataKey="calories" fill="#8884d8" />
                <Bar dataKey="poids" fill="#82ca9d" />
            </BarChart>
        </div>
    );
  }

export default UserActivity;