import React, { useState, useEffect } from "react";
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
import {
  getUserMainData,
  getUserActivity,
  getUserAverage,
  getUserPerformance,
} from "../../services/api-services";
import "./dashboard.scss";
import "../../components/NutritionCard/nutritionCard.scss";

function Dashboard() {
  const parentUserActivityWidth = window.innerWidth - 500;

  const { id } = useParams();

  const [userData, setUserData] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverage, setUserAverage] = useState({});
  const [userPerf, setUserPerf] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const userDataMock = Data.USER_MAIN_DATA.find(
    (data) => data.id.toString() === id
  );
  const userActivityMock = Data.USER_ACTIVITY.find(
    (data) => data.userId.toString() === id
  );
  const userAverageMock = Data.USER_AVERAGE_SESSIONS.find(
    (data) => data.userId.toString() === id
  );
  const userPerfMock = Data.USER_PERFORMANCE.find(
    (data) => data.userId.toString() === id
  );

  useEffect(() => {
    async function getData() {
      try {
        if (id === "18") {
          setUserData(await getUserMainData(id));
          setUserActivity(await getUserActivity(id));
          setUserAverage(await getUserAverage(id));
          setUserPerf(await getUserPerformance(id));
        } else {
          setUserData(userDataMock);
          setUserActivity(userActivityMock);
          setUserAverage(userAverageMock);
          setUserPerf(userPerfMock);
        }

        setIsLoading(false);
      } catch (error) {
        console.log("=====error=====", error);
      }
    }
    getData();
  }, [userDataMock, userActivityMock, userAverageMock, userPerfMock, id]);

  return (
    <>
      {isLoading ? (
        <> ...Chargement</>
      ) : (
        <>
          <Title id={userData.id} firstname={userData.userInfos.firstName} />
          <div className="section-aside-container">
            <section className="activity-container">
              <UserActivity
                dataActivity={userActivity.sessions}
                parentUserActivityWidth={parentUserActivityWidth}
              />
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
      )}
    </>
  );
}

export default Dashboard;
