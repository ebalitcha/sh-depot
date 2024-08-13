const ImageSection = () => {
    return(
        <>
            <div className="flex w-full p-10 justify-center">
                <div className="w-2/3 flex justify-between">
                    <div>
                        <img className='px-2 h-14' src="src\assets\airbnb.png" alt="" />
                    </div>
                    <div>
                        <img className='px-2 h-14' src="src\assets\Expedia-logo.png" alt="" />
                    </div>
                    <div>
                        <img className='px-2 h-14' src="src\assets\vrbo_logo.png" alt="" />
                    </div>
                    <div>
                    <img className='px-2 h-14' src="src\assets\Hopper_logo.png" alt="" />
                    </div>
                    <div>
                        <img className='px-2 h-14' src="src\assets\google_travel_logo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex w-full p-5 text-3xl justify-center text-[#545554] font-medium">
                Helping You Unlock The Full Potential Of Each Property
            </div>
        </>
    );
}

export default ImageSection;