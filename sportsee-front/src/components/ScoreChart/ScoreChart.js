import "./score-chart.scss";
import { RadialBarChart, RadialBar, Legend } from "recharts";

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

  const dataChart = [
    {
      name: "score",
      uv: 5,
      pv: 0,
      fill: "#ffc658",
    },
  ];

  const styleChart = {
    top: 0,
    left: 350,
    lineHeight: "24px",
  };

  const startAngle = 90;

  const endAngle = score * 100 * 3.6 + startAngle;

  return (
    <div className="score-chart-container">
      <h2 className="score-chart-title">Score</h2>
      <RadialBarChart
        width={250}
        height={250}
        cx={150}
        cy={150}
        innerRadius={80}
        outerRadius={100}
        barSize={20}
        data={dataChart}
        startAngle={startAngle}
        endAngle={endAngle}
      >
        <RadialBar
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={styleChart}
        />
      </RadialBarChart>
      <div className="score">
        <p className="scoreResult">
          {[`${dataScorePercent}%`, " de votre objectif"]}
        </p>
        {/* <p className="scoreText"></p> */}
      </div>
    </div>
  );
}

export default ScoreChart;
