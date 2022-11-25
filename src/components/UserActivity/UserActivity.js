import "./useractivity.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import PropTypes from "prop-types";

function UserActivity({ dataActivity }) {
  const dayFormat = (value) => {
    const valueDay = value.split("-");

    return Number(valueDay[2]);
  };

  function CustomTooltipActivity({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-data">{`${payload[0].value}`}kg</p>
          <p className="tooltip-data">{`${payload[1].value}`}Kcal</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="user-activity-container">
      <h2 className="activityChartTitle">Activité quotidienne</h2>
      <BarChart
        width={835}
        height={320}
        data={dataActivity}
        barSize={7}
        barGap={8}
        margin={{ top: 80, right: 50, left: 45, bottom: 20 }}
      >
        <CartesianGrid
          vertical="false"
          strokeDasharray="3 3"
          height={1}
          horizontalPoints={[90, 185]}
        />
        <XAxis
          dataKey="day"
          tickFormatter={dayFormat}
          interval="preserveStartEnd"
          tickSize="0"
          tickMargin="25"
          stroke="#9B9EAC"
        />
        <YAxis
          dataKey="calories"
          tickLine={false}
          orientation="right"
          tickCount="3"
          tickSize="0"
          axisLine={false}
          tickMargin="30"
          width={80}
          stroke="#9B9EAC"
        />
        <Tooltip content={<CustomTooltipActivity />} />
        <Legend
          verticalAlign="top"
          align="right"
          // width={277}
          // height={25}
          iconType={"circle"}
          iconSize={8}
          wrapperStyle={{ top: 35, right: 20 }}
          formatter={(value) => (
            <span className="activityLegendColor">{value}</span>
          )}
        />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          radius={[25, 25, 0, 0]}
          barSize={7}
        />
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          radius={[25, 25, 0, 0]}
          barSize={7}
        />
      </BarChart>
    </div>
  );
}

UserActivity.propTypes = {
  dataActivity: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      day: PropTypes.string,
      kilogram: PropTypes.number,
    })
  ),
};

export default UserActivity;
