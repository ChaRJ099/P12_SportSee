import "./perf-chart.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types";

/**
 * @param  {Array} {dataPerf}
 * @returns {JSX.Element} Performance component
 */
function PerfChart({ dataPerf }) {
  const numberToLabelPerf = (kind) => {
    switch (kind) {
      case 1:
        return "Intensité";
      case 2:
        return "Vitesse";
      case 3:
        return "Force";
      case 4:
        return "Endurance";
      case 5:
        return "Energie";
      case 6:
        return "Cardio";
      default:
        return null;
    }
  };

  return (
    <div className="perf-chart-container">
      <RadarChart outerRadius={50} width={200} height={210} data={dataPerf}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          tick={{ fontSize: 12, fontWeight: 500 }}
          stroke="#FFFFFF"
          tickFormatter={numberToLabelPerf}
        />
        <Radar dataKey="value" fill="#FF0101B2" />
      </RadarChart>
    </div>
  );
}

PerfChart.propTypes = {
  dataPerf: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.number,
      value: PropTypes.number,
    })
  ),
};

export default PerfChart;
