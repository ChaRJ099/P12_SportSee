import Yoga from '../../assets/icon-yoga.svg';
import Bike from '../../assets/icon-bike.svg';
import Fitness from '../../assets/icon-fitness.svg';
import Swim from '../../assets/icon-swim.svg';
import './sidebar.scss';


function Sidebar(){

    return(
        <div className='sidebar'>
            <div className='sidebar-icons-container' >
                <img className='icon-yoga' src={Yoga} alt="Yogi"/>
                <img className='icons-swim' src={Swim} alt="Swimmer"/>
                <img className='icon-bike' src={Bike} alt="Biker"/>
                <img className='icon-fitness' src={Fitness} alt="Dumbbel"/>
            </div>
            <div className='sidebar-copyright'>Copyright, SportSee 2020</div>
        </div>
    )
}

export default Sidebar;