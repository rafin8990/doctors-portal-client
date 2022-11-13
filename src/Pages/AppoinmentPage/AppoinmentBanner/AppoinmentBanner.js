import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppoinmentBanner = ({selectedDate, setSelectedDate}) => {
   
    
    return (
            <div className="hero ">
                <div className="hero-content lg:justify-between flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="w-2/3 lg:w-1/2 rounded-lg shadow-2xl " />
                    <div>
                        <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        /> 
                    </div>
                </div>
            </div>
    );
};

export default AppoinmentBanner;