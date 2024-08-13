import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faLocationDot, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const PageIntro = () => {
    return(
        <>
            <div className='bg-[url("assets/landing_image.png")] bg-center bg-cover h-[36rem] w-screen items-center content-center'>
                <div className='bg-[#f0f0f091]'>
                    <div className='place-content-center text-center py-[10rem]'>
                        <div className='text-5xl tracking-wide text-[#3c3c3bff]'>WHERE DREAMS FIND A HOME</div>
                        <div className='text-lg font-extralight tracking-widest text-[#3c3c3bff]'>Unforgettable Stays & Complete Property Management Solutions Since 2017</div>
                        <div className="flex w-full justify-center">
                            <div className='flex bg-white justify-between py-8 my-10 w-[50rem] shadow-2xl rounded-3xl'>
                                <div className="flex self-center text-[#3c3c3b]">
                                    <div className="px-5">
                                        <FontAwesomeIcon icon={faLocationDot} className='h-6 px-3' />
                                        Location
                                    </div>
                                    <div className="px-5">
                                        <FontAwesomeIcon icon={faCalendarDays} className='h-6 px-3' />
                                        Check-in
                                    </div>
                                    <div className="px-5">
                                        <FontAwesomeIcon icon={faCalendarDays} className='h-6 px-3' />
                                        Check-out
                                    </div>
                                    <div className="px-5">
                                        <FontAwesomeIcon icon={faUserGroup} className='h-6 px-3' />
                                        Guests
                                    </div>
                                </div>
                                <div className="mx-5 px-5 py-2 rounded-full bg-[#3c3c3b] text-white font-semibold">
                                    Search
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageIntro;