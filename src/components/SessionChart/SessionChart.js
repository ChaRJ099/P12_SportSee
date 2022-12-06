import "./session-chart.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  Legend,
} from "recharts";
import PropTypes from "prop-types";

/**
 * The variable  returns a rectangle  with  a chosen color when active
 * @param {object} props provided  by recharts
 * @returns a  rectangle with a color
 */
const CustomCursor = (props) => {
  const { points, width, height } = props;
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      x={x}
      y={0}
      width={width}
      height={height + 100}
    />
  );
};
/**
 * @param  {Array} {dataSessions}
 * @returns {JSX.Element} Session component
 */
function SessionChart({ dataSessions }) {
  const numberToLetter = (day) => {
    switch (day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return "";
    }
  };

  /**
   * it returns  a tooltip with value and an added text "min" when active or it doesnt return anything
   * @param {boolean} active
   * @param {array} payload
   * @returns Customized Tooltip
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-time">
          <p className="label">{payload[0].value} min</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="session-chart-container">
      <h2 className="session-chart-title">Durée moyenne des sessions</h2>
      <LineChart
        width={200}
        height={100}
        data={dataSessions}
        margin={{
          top: 0,
          right: -2,
          left: -2,
          bottom: 10,
        }}
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          fillOpacity={0.5}
          style={{ transform: "scale(0.9)", transformOrigin: "bottom" }}
          tick={{ fill: "#FFFFFF", fontWeight: 500, fontSize: 12 }}
          tickMargin={8}
          margin={{
            top: 10,
          }}
          axisLine={false}
          tickFormatter={numberToLetter}
          interval="preserveStartEnd"
        />
        <YAxis hide />
        <Tooltip
          wrapperStyle={{ outline: "none" }}
          content={<CustomTooltip />}
          cursor={<CustomCursor />}
        />
        <Line
          allowDataOverflow={false}
          data
          type="natural"
          dataKey="sessionLength"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            r: 4,
            strokeWidth: 5,
            stroke: "rgba(255, 255, 255, 0.198345)",
          }}
        />
      </LineChart>
    </div>
  );
}

SessionChart.propTypes = {
  dataSessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ),
};

export default SessionChart;
