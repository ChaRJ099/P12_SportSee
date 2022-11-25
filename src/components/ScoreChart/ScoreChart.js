import "./score-chart.scss";
import { RadialBarChart, RadialBar } from "recharts";
import PropTypes from "prop-types";

function ScoreChart({ dataScore }) {
  const score = dataScore.todayScore;

  /**
   * Format the score in percentage
   * @param {object} data
   * @returns an integer for percentage
   */
  function calculatePercent() {
    return Math.round(score * 100);
  }
  const dataScorePercent = calculatePercent(dataScore);

  const startAngle = 90;

  const endAngle = score * 100 * 3.6 + startAngle;

  return (
    <div className="score-chart-container">
      <div className="score-chart-header">
        <h2 className="score-chart-title">Score</h2>
      </div>
      <div className="score-chart-content">
        <RadialBarChart
          className="score-chart"
          width={200}
          height={200}
          innerRadius={80}
          outerRadius={100}
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
  dataScore: PropTypes.number,
};

export default ScoreChart;
