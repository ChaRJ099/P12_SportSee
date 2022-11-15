import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title/Title';
import UserActivity from '../../components/UserActivity/UserActivity';
import NutritionCard from '../../components/NutritionCard/NutritionCard';
import SessionChart from '../../components/SessionChart/SessionChart';
import PerfChart from '../../components/PerfChart/PerfChart';
import ScoreChart from '../../components/ScoreChart/ScoreChart';
import IconFire from '../../assets/icon-fire.png';
import IconChicken from '../../assets/icon-chicken.png';
import IconBurger from '../../assets/icon-burger.png';
import IconApple from '../../assets/icon-apple.png';
import Data from '../../Datas/datasMocked';
import "./dashboard.scss";
import "../../components/NutritionCard/nutritionCard.scss";



function Dashboard(){
    const userDataMock = Data.USER_MAIN_DATA;
    const userActivityMock = Data.USER_ACTIVITY;
    const userAverageMock = Data.USER_AVERAGE_SESSIONS;
    const userPerfMock = Data.USER_PERFORMANCE;
    const { id } = useParams();
    const user = userDataMock.find((user) => user.id.toString() === id );

    return(
        <>
            <Title id={user.id} firstname={user.userInfos.firstName}/>
            <div className='section-aside-container'>
                <section className='activity-container'>                
                    <UserActivity />
                    <div className='charts-container'>
                        <SessionChart />
                        <PerfChart />
                        <ScoreChart />
                    </div>                    
                </section>
                <aside className='nutri-cards-container'>
                    <NutritionCard icon={IconFire} quantity={[`${user.keyData.calorieCount}`, 'kCal']} text={'calories'} />
                    <NutritionCard icon={IconChicken} quantity={[`${user.keyData.proteinCount}`, 'g']} text={'proteines'} />
                    <NutritionCard icon={IconApple} quantity={[`${user.keyData.carbohydrateCount}`, 'g']} text={'glucides'} />
                    <NutritionCard icon={IconBurger} quantity={[`${user.keyData.lipidCount}`, 'g']} text={'lipides'} />
                </aside>  
            </div>                  
        </>
        

    )
}

export default Dashboard;