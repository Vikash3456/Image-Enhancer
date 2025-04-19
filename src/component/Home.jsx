import ImageUpload from './ImageUpload.jsx'
import ImagePreview from './ImagePreview.jsx'
import { useState } from 'react'

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setloading] = useState(false)    
    
    const uploadImageHandler=(file)=>{
        console.log(file)
    };
    return (
    <>
    <ImageUpload uploadImageHandler={uploadImageHandler}/>
    <ImagePreview
    uploaded={uploadImage}
     loaded={loading}
     enhanced={enhancedImage}
    />
    </>
  )
}

export default Home