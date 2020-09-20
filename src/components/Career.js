import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Card } from './component';


const renderItem = (item, index) => (
    <li key={index}>
        <div className="language">
            <div>{item.name}</div> 
            <div>{item.duration}</div>
        </div>
        <pre className="description">{item.description}</pre>
        {item.images && renderImg(item.images)}
    </li>
)

const Career = ({careers = []}) => {
    return (
        <Card className="career">
            <Fragment>
                <h2>Experience</h2>
                <ul>
                    {careers.map(renderItem) }
                </ul>
                {item.images && renderImg(item.images)}
            </Fragment>
        </Card>
    )
}

const renderImg = (images) => (
    <div className="image-container">
        {images.map((item, index) => (
            <img key={index} src={item} alt="그림" />
        ))}
    </div>
)

Career.propTypes = {
    careers: PropTypes.array.isRequired
}

export default Career;


