import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

class Author extends Component {
    static propTypes = {
        postedDate: PropTypes.string,
        minutesToRead: PropTypes.number,
        author: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            isMediumMember: PropTypes.bool
        })
    }

    render() {
        return (
        <div className="author">
            <div className="author">
                <div className = 'image'>
                    <img alt={this.props.author.name} src={this.props.author.image} width="40" heigh="40"></img>
                </div>
                <div className="article-summary"> 
                    <div className='article-child'>
                        <h4>{this.props.author.name}</h4>
                    </div>
                        <div className='article-child'>
                        {this.props.postedDate}
                        </div>
                        <div className='article-child'>
                        {this.props.minutesToRead} min read
                        </div>
                </div>
                <div className='article-child'>
                <FontAwesomeIcon icon={faBookmark} />
                    </div>
            </div>  
        </div>
        )
    }
}

export default Author;