import { createContext, useState } from "react"
import React from 'react' 
import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext() 

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState ([
        {
            id: 1,
            text: 'this is the item #1 from context',
            rating: 8
        },
        {
            id: 2,
            text: 'this is the item #2 from context',
            rating: 4
        },
        {
            id: 3,
            text: 'this is the item #3 from context',
            rating: 1
        }

    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

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