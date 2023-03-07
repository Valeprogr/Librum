
const LocationPage = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="md:max-w-[700px] lg:max-w-[1300px] flex flex-col justify-start items-center md:px-20 pt-6 ">
    <h2 className="text-center md:text-left w-full text-2xl md:text-3xl font-bold pb-4">Location</h2>
    <div className="flex flex-col justify-start items-center  ">
    <iframe className="w-screen h-[250px] md:w-[700px] md:h-[350px]" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4994.6683281738115!2d6.7623686860849395!3d51.249756430924165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1678209094598!5m2!1sen!2sde"  ></iframe>
    <div className="flex flex-col items-center justify-start w-[80%] pt-5  ">
    <p className="text-dark/80 text-lg p-1"><span className="font-[500]">Address:</span>Uerdinger Str. 53</p>
    <p className="text-dark/80 text-lg p-1"><span className="font-[500]">Zip:</span>40474</p>
    <p className="text-dark/80 text-lg p-1"><span className="font-[500]">City:</span>Düsseldorf</p>
    <p className="text-dark/80 text-lg p-1"><span className="font-[500]">Country:</span> Germany</p>
    <p className="text-dark/80 text-lg p-1"><span className="font-[500]">Tel:</span> 01526204583</p>
    <p className="text-dark/80 text-lg p-1"><span className="font-[500]">Working Time:</span> 08:00-18:00</p>
    </div>
    </div>
    </div>
    </div>

  )
}

export default LocationPage