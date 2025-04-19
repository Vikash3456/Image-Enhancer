import axios from "axios";

const API_KEY=process.env.API_KEY
 const Bass_URL="https://techhk.aoscdn.com/"
export  const enhancedImageAPI= async(file)=>{
    // code to call Api and get enhanced image url 
    
    try {

        const taskId=await uploadImage(file)
        console.log("image upload sucessfully:",taskId);
        const enhancedImageData=fetchImage(taskId)
        console.log("Enhanced image data",enhancedImageData);

        console.log(enhancedImageData)

        // return enhancedImageData;
    } catch (error) {
        console.log("Error enhancing image:",error.message)
    }
};


const uploadImage =async(File)=>{
    //code to upload image third party
//"/api/tasks/visual/scale"
const formData=new formData();
formData.append("Image_file",file)

 const data=await axios.post('${Bass_URL}/api/tasks/visual/scale',formData ,{
    headers: {
        "Content-Type":"multipart/form-Data",
        "X-API-KEY": API_KEY,
      },
})
console.log(data)
// return data.taskId
}

const fetchImage=async(taskId)=>{
     //fetch or get enhanced image  form third-party
        // "/api/tasks/visual/scale/{task_id}"
}