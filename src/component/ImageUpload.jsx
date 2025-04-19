

const ImageUpload = (props) => {
    const ShowImageHnadler=(e)=>{
        const file= e.target.files[0]
      if(file){
        props.uploadImageHandler(file)
        // parent/home ko file bej rahe hai uske function me 
      }
    }
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        <label htmlFor="fileInput" 
        className="block w-full  text-center cursor-pointer border-3 border-dashed border-blue-500 rounded-lg p-6 hover:border blue-500 transition-all">
            <input type="file" id="fileInput" className="hidden" onChange={ShowImageHnadler} />
            <span className="text-lg font-medium text-gray-600">Click and Drag to upload your Image</span>
        </label>

        </div>
  )
}

export default ImageUpload