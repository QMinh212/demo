import React from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText} from 'reactstrap';
import { COMMENTS } from '../shared/comments';


function RenderDish({dish}) {
    if(dish == null){
        return(<div></div>);
    }
    return(
        <div className='col-12 col-md-5 m-1'>
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />                    
                <CardBody>
                    <CardTitle>{dish.id}</CardTitle>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function RenderComments({dish}) {
    if(dish == null){
        return(<div></div>);
    }
    console.log('id =' + dish.id);
    const filteredComments = COMMENTS.filter(cmnt => cmnt.dishId === dish.id);
    console.log('comment' + filteredComments)
    
    const showcmnts = filteredComments.map(cmnt =>  {
        return(
            <li key={cmnt.id}>
                <p>{cmnt.comment}</p>
                <p>--{cmnt.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(cmnt.date))}
                </p>
            </li>
        );
    });
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {showcmnts}
            </ul>
        </div>
    );   }
const DishDetail =(props) => {
    if(props == null){
        return(<div></div>);
    }
    const dishItem = RenderDish(props);
   
    const dishComments = RenderComments(props);
    return(
        <div className='container'>
            <div className='row'>
             {dishItem}
             {dishComments}
             
            </div>
        </div>
    );
}

export default DishDetail;