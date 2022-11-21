import "./perf-chart.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

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
      <RadarChart outerRadius={85} width={250} height={250} data={dataPerf}>
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

export default PerfChart;
