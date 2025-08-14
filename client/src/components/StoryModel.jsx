import React from 'react'
import { useState } from 'react'

const StoryModel = () => {

    const bgColors = ["#4f46e5", "#7c3aed", "#db2777", "#e11d48", "#cs8a04", "#0d9488"]

    const [mode, setMode] = useState("text")
    const [background, setBackground] = useState(bgColors[0])
    const [text, setText] = useState("")
    const [media, setMedia] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleMediaUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setMedia(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    const handleCreateStory = async () => {
        
    }

  return (
    <div className='fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur 
    text-white flex items-center justify-center p-4'>
        <div className='w-full max-w-md'>
            
        </div>
    </div>
  )
}

export default StoryModel