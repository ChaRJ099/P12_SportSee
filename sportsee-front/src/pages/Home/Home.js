import React from 'react';
import Title from '../../components/Title/Title';
import UserActivity from '../../components/UserActivity/UserActivity';
import NutritionCard from '../../components/NutritionCard/NutritionCard';
import SessionChart from '../../components/SessionChart/SessionChart';
import PerfChart from '../../components/PerfChart/PerfChart';
import ScoreChart from '../../components/ScoreChart/ScoreChart';
import "./home.scss";



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
                    <NutritionCard />
                    <NutritionCard />
                    <NutritionCard />
                    <NutritionCard />
                </aside>  
            </div>                  
        </>
        

    )
}

export default Home;