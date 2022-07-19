import { createContext, useState, useEffect } from "react"
import React from 'react' 
import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext() 

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState ([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //fetch feedback
const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5001/feedback?_sort=id_order=desc")
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
}


    const deleteFeedback = (id) => {

        setFeedback(feedback.filter((item) => (
            item.id !== id
        )))
        
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    //update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? 
        { ... item, ...updItem} : item))
    }



    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }


    return <FeedbackContext.Provider 
    value ={{
        feedback,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext