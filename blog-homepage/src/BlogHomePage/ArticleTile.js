import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Author from './Author'
import Article from './Article';

class ArticleTile extends Component {
    static propTypes = {
        article: PropTypes.shape({
            articleImage: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            link: PropTypes.string,
            author:PropTypes.shape({
                name: PropTypes.string,
                image: PropTypes.string,
            })

        })
      };
    render() {
        const {article} = this.props;
        return (
            <table> 
                <tbody>
                <tr>
                    <td> <Article 
                    title={article.title}
                    description={article.description}
                    articleImage={article.articleImage}
                    link={article.link}
                        /></td>
                 </tr> 
                 {/* <tr>   
                <td> <Author 
                    author={article.author}
                        />
                        </td>
                </tr> */}
                </tbody>
            </table>
                )
 
    }
}

export default ArticleTile