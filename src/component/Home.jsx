import ImageUpload from './ImageUpload.jsx'
import ImagePreview from './ImagePreview.jsx'
import Loading from './Loading.jsx'
import { useState } from 'react'
import { enhancedImageAPI } from '../uitls/enhanceImageApi.js';

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setloading] = useState(false)    
    
    const uploadImageHandler= async(file)=>{
        setUploadImage(URL.createObjectURL(file))  // file ka object bana ke save karu ga  url milega image 
        setloading(true)
      
        //call API to EnhanceImage
       try {
        // code which may produce error
        const enhancedURL=await enhancedImageAPI(file);
        setEnhancedImage(enhancedURL)
        setloading(false)
       } catch (error) {
        //codel to handle the error and show the error
        console.log(error);
        alert("Error while enhancing the  image . please try agian later")
       }
        
    };
    return (
    <>
    <ImageUpload uploadImageHandler={uploadImageHandler}/>
    <ImagePreview
    uploaded={uploadImage}
     loading={loading}
     enhanced={enhancedImage}
    />
    </>
  )
}

export default Home