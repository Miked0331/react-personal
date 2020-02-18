import React from 'react'
import '../Styles/App.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Avatar from '../images/myAvatar.png'

const Body = () => {
    return(
        <div className='body-container'>
            <div className='body-1'>
            
            <div className='card'>
            <Card body inverse color="success">
        <CardTitle>Designer</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
</div>
            <div className='card'>  
            <Card body inverse color="info">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      </div>

            <div className='card'>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardImg top width="100%" src={Avatar} alt="Card image cap" />
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      </div>
            </div>

            <div className='body-2' id='body-2'>

            </div>
        </div>
    )
}

export default Body