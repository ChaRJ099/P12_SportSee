import React from 'react';
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
import "./home.scss";
import "../../components/NutritionCard/nutritionCard.scss";



function Home(){

    return(
        <>
            <Title />
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
                    <NutritionCard icon={IconFire} quantity={'1,930kCal'} text={'Calories'} />
                    <NutritionCard icon={IconChicken} quantity={'155g'} text={'Proteines'} />
                    <NutritionCard icon={IconApple} quantity={'290g'} text={'Glucides'} />
                    <NutritionCard icon={IconBurger} quantity={'50g'} text={'Lipides'} />
                </aside>  
            </div>                  
        </>
        

    )
}

export default Home;