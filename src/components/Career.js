import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Card } from './component';


const renderItem = (item, index) => (
    <li key={index}>
        <div className="language">
            <div>{item.name}</div> 
            <pre>{item.duration}</pre>
        </div>
        <div className="description">{item.description}</div>
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
            </Fragment>
        </Card>
    )
}

Career.propTypes = {
    careers: PropTypes.array.isRequired
}

export default Career;


