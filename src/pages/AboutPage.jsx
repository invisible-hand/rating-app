import React from 'react'
import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>

    
    <div>This is an about page</div>
    <Link to="/">Go home</Link>
    </Card>
  )
}

export default AboutPage