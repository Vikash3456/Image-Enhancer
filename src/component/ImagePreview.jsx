import Loading from './Loading.jsx'

const ImagePreview = (props) => {
    // console.log(Object)
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* orignial box */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className=" text-xl font-semibold  text-center bg-gray-800  text-white py-2">Original Image</h2>
       {props.uploaded ? <img 
        src={props.uploaded} 
        alt="" className=" w-full max-h-[50vh] object-cover"/>:
        <div className=" flex items-center justify-center h-80 bg-gray-200">
        No Image selected</div>
        }
        </div>

        {/* Enhance image  */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className=" text-xl font-semibold  text-center bg-blue-800  text-white py-2">Original Image</h2>
        
        {props.enhanced && !props.loading && (
            <img src={props.enhanced} alt="" className=" w-full h-full object-cover"/>
        )}


      {props.loading ?(
        <Loading/>
      ) :(

        <div className=" flex items-center justify-center h-80 bg-gray-200">
            No Enhance Image selected
        </div>

      )}
        </div>
    </div>
  )
}

export default ImagePreview