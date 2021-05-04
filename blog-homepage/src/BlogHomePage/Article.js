import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Author from './Author'
import './BlogHomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            link: PropTypes.string,
            postedDate: PropTypes.string,
            minutesToRead: PropTypes.number,
            hasAudioAvailable: PropTypes.bool,
            memberPreview:PropTypes.bool,
            author:PropTypes.shape({
                name: PropTypes.string,
                image: PropTypes.string,
            })

        }),
        articleType: PropTypes.string
      };

    render() {
        if (this.props.articleType === 'forYou') {
            return (
                <div className="article-tile-for-you">
                    <div className = 'image' >
                        <img alt={this.props.article.title} src={this.props.article.image} width="400" heigh="100"></img>
                    </div>
                    <div >
                        {this._renderIfAudioAvailable()}
                        <h1>{this.props.article.title}</h1>
                        <body>{this.props.article.description}</body>
                        <Author author={this.props.article.author} postedDate={this.props.article.postedDate} minutesToRead={this.props.article.minutesToRead}> </Author>
                    </div>
                </div>
                )
        }
        if (this.props.articleType === 'inCaseMissed') {
            return (
            <div className="article-tile-missed">
                <div className = 'image'>
                    <img alt={this.props.article.title} src={this.props.article.image} width="400" heigh="100"></img>
                </div>
                <div className='article-child'>
                {this._renderIfMemberPreview()}
                <h1>{this.props.article.title}</h1>
                <body>{this.props.article.description}</body>
                <Author author={this.props.article.author} postedDate={this.props.article.postedDate} minutesToRead={this.props.article.minutesToRead}> </Author>
                </div>
            </div>
                )
        }

    }
    _renderIfAudioAvailable = () => {
        if (this.props.article.hasAudioAvailable) {
            return (
                <div className="star">
                    <div className="article-child">
                    <body>
                    audio available
                    </body>
                    </div>
                    <div className="article-child">
                <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
            )
        }
    }
    _renderIfMemberPreview = () => {
        if (this.props.article.memberPreview) {
            return (
                <div className="star">
                    <div className="article-child">
                <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="article-child">
                    <body>
                    Member preview
                    </body>
                    </div>
                </div>
            )
        }
    }
}

export default Article;