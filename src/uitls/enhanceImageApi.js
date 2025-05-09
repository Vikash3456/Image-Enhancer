import axios from "axios";
 const API_KEY= import.meta.env.API_KEY
 const BASE_URL="https://techhk.aoscdn.com/"
 const MAXIMUM_RETRIES=20
export  const enhancedImageAPI= async(file)=>{
    // code to call Api and get enhanced image url 
    
    try {

        const taskId=await uploadImage(file)
        console.log("image upload sucessfully:",taskId);


        const enhancedImageData= await PollEnhancedImage(taskId) // time diya Api ko bar bar call hone ke liye 
        console.log("Enhanced image data",enhancedImageData);

        // console.log(enhancedImageData)

        return enhancedImageData;
    } catch (error) {
        console.log("Error enhancing image:",error.message)
    }
};


// const uploadImage =async(file)=>{
//     //code to upload image third party
// //"/api/tasks/visual/scale"

// const formData=new FormData();
// formData.append("Image_file",file)

//  const {data}=await axios.post(
//     // `${BASE_URL}/api/tasks/visual/scale`,
//      `${BASE_URL}/api/tasks/visual/scale`,  
//     formData ,{
//     headers: {
//         "Content-Type":"multipart/form-data",
//         "X-API-KEY": API_KEY,   
//       },
// })
// if(!data?.data?.task_id){
//     throw new error("failed to upload image !  TaskId not found. ")
// }
// console.log(data)
// return data.data.task_id
// }

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            },
        }
    );
    if (!data?.data?.task_id) {
        throw new Error("Failed to upload image! Task ID not found.");
    }
    return data.data.task_id;
};

const fetchImage=async(taskId)=>{
     //fetch or get enhanced image  form third-party
        // "/api/tasks/visual/scale/{task_id}"


        const {data}=await axios.get(
            `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
            {
            headers: {
                "X-API-KEY": API_KEY,
              },
        })   
        if(!data?.data){
            throw new error("failed to fetch image ! Image not found. ")
        }
        return data.data
}

//create another function poll to jo baar baar call jsb tak process na ho jaye

const PollEnhancedImage= async(taskId,retries=0)=>{
    const result =await fetchImage(taskId);

    if(result.state ===4){
        console.log("processing ho rahi hai (${retries}/${MAXIMUM_RETRIES}) ")
     
        if(retries>=MAXIMUM_RETRIES){
            throw new Error("max retries reached .please try later")
        }
    //wait for 2 second  before retrying 
        await new Promise((resolve)=>setTimeout(resolve,2000))
      return PollEnhancedImage(taskId,retries+1 )
    }   
    return result   
};  