import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Author from './Author'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            link: PropTypes.string,
            postedDate: PropTypes.string,
            minutesToRead: PropTypes.number,
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
                <table> 
                    <tbody>
                        <tr>
                            <td>
                                <a href={this.props.article.link}><img alt={this.props.article.title} src={this.props.article.image}></img></a>
                            </td>
                            <td>
                                <h1>{this.props.article.title}</h1>
                                {this.props.article.description}
                                <Author author={this.props.article.author}> </Author>
                            </td>
                        </tr>
                    </tbody>
                </table>
                )
        }
        if (this.props.articleType === 'inCaseMissed') {
            return (
                <> 
                <a href={this.props.article.link}><img alt={this.props.article.title} src={this.props.article.image}></img></a>
                <div>
                <h1>{this.props.article.title}</h1>
                {this.props.article.description}
                <Author author={this.props.article.author}> </Author>
                </div>
                </>
                )
        }

    }
}

export default Article;