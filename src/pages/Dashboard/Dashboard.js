import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import UserActivity from "../../components/UserActivity/UserActivity";
import NutritionCard from "../../components/NutritionCard/NutritionCard";
import SessionChart from "../../components/SessionChart/SessionChart";
import PerfChart from "../../components/PerfChart/PerfChart";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import IconFire from "../../assets/icon-fire.png";
import IconChicken from "../../assets/icon-chicken.png";
import IconBurger from "../../assets/icon-burger.png";
import IconApple from "../../assets/icon-apple.png";
import Data from "../../Datas/datasMocked";
import "./dashboard.scss";
import "../../components/NutritionCard/nutritionCard.scss";

function Dashboard() {
  const { id } = useParams();

  const userDataMock = Data.USER_MAIN_DATA;
  const userActivityMock = Data.USER_ACTIVITY;
  const userAverageMock = Data.USER_AVERAGE_SESSIONS;
  const userPerfMock = Data.USER_PERFORMANCE;

  const userData = userDataMock.find(
    (userData) => userData.id.toString() === id
  );
  const userActivity = userActivityMock.find(
    (userActivity) => userActivity.userId.toString() === id
  );
  const userAverage = userAverageMock.find(
    (userAverage) => userAverage.userId.toString() === id
  );
  const userPerf = userPerfMock.find(
    (userPerf) => userPerf.userId.toString() === id
  );

  console.log(id);

  return (
    <>
      <Title id={userData.id} firstname={userData.userInfos.firstName} />
      <div className="section-aside-container">
        <section className="activity-container">
          <UserActivity dataActivity={userActivity.sessions} />
          <div className="charts-container">
            <SessionChart dataSessions={userAverage.sessions} />
            <PerfChart dataPerf={userPerf.data} />
            <ScoreChart dataScore={userData} />
          </div>
        </section>
        <aside className="nutri-cards-container">
          <NutritionCard
            icon={IconFire}
            quantity={[`${userData.keyData.calorieCount}`, "kCal"]}
            text={"calories"}
          />
          <NutritionCard
            icon={IconChicken}
            quantity={[`${userData.keyData.proteinCount}`, "g"]}
            text={"proteines"}
          />
          <NutritionCard
            icon={IconApple}
            quantity={[`${userData.keyData.carbohydrateCount}`, "g"]}
            text={"glucides"}
          />
          <NutritionCard
            icon={IconBurger}
            quantity={[`${userData.keyData.lipidCount}`, "g"]}
            text={"lipides"}
          />
        </aside>
      </div>
    </>
  );
}

export default Dashboard;
