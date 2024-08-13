import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    return(
        <nav className='bg-gradient-to-r from-[#DB1955] to-[#b22841] h-24 mx-auto p-4 text-white shadow-md'>
            <div className='flex justify-between items-center h-full'>
                <div className='flex'>
                    <div className='font-semibold'>
                        <img className='px-2 h-14' src="src\assets\icon_header.png" alt="" />
                    </div>
                    <div className='px-5 self-center text-sm'>
                        Vacation Rental Management
                    </div>
                    <div className='px-5 self-center text-sm'>
                        Our Rentals
                    </div>
                    <div className='px-5 self-center text-sm'>
                        Contact Us
                    </div>
                </div>
                <div className='px-[1.10rem] py-[0.70rem] text-2xl border-2 border-solid border-white rounded-full'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
            
        </nav>
    );
};


export default Navbar;

