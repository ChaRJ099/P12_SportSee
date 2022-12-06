import "./score-chart.scss";
import { RadialBarChart, RadialBar } from "recharts";
import PropTypes from "prop-types";
/**
 * @param  {Array} {dataScore}
 * @returns {JSX.Element} Score component
 */
function ScoreChart({ dataScore }) {
  const score = dataScore.todayScore;

  function calculatePercent() {
    return Math.round(score * 100);
  }

  const dataScorePercent = calculatePercent(dataScore);
  // Initialize startAngle of RadialBarChart
  // 90 = top of RadialBarChart
  const startAngle = 90;
  // Custom endAngle of RadialBarChart
  // Calcul score line of RadialBarChart
  const endAngle = dataScorePercent * 3.6 + startAngle;

  return (
    <div className="score-chart-container">
      <div className="score-chart-header">
        <h2 className="score-chart-title">Score</h2>
      </div>
      <div className="score-chart-content">
        <RadialBarChart
          className="score-chart"
          width={100}
          height={100}
          innerRadius={45}
          outerRadius={45}
          barSize={20}
          data={[dataScore]}
          startAngle={startAngle}
          endAngle={endAngle}
        >
          <RadialBar
            cornerRadius={25}
            barSize={10}
            minAngle={15}
            clockWise
            fill="#FF0000"
            dataKey="todayScore"
          />
        </RadialBarChart>
        <div className="score-result">
          <p className="score-percent">{[`${dataScorePercent}%`]}</p>
          <p className="score-text">
            de votre
            <br />
            objectif
          </p>
        </div>
      </div>
    </div>
  );
}

ScoreChart.propTypes = {
  dataScore: PropTypes.object,
};

export default ScoreChart;
