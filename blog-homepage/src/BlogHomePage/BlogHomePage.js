import React, { Component } from 'react';
// import ArticleTile from './ArticleTile';
import Article from './Article';
import articlesMissed from '../data/missed-articles.json'
import yourArticles from '../data/your-articles.json'

class BlogHomePage extends Component {
    render() {
        const articlesForYou = yourArticles.map((yourArticle, idx) => {
            return (
                < Article article={yourArticle} articleType={'forYou'}/>
            )
        })
        const articleInCaseMissed = articlesMissed.map((missedArticle, idx) => {
            return (
                < Article article={missedArticle} articleType={'inCaseMissed'}/>
            )
        })
        return (
            <div className="BlogHomepage">
                <h1>For you</h1>
                <table> 
                <tr>
                <td className="column">
                <div>{articlesForYou[0]}</div>
                <div>{articlesForYou[2]}</div>
                </td>
                <td className="column">
                <div>{articlesForYou[1]}</div>
                <div>{articlesForYou[3]}</div>
                </td>
                </tr>
                </table>
                <h2>In case you missed it</h2>
                <table>
                    <tr>
                    <td className="column"> 
                    <div>{articleInCaseMissed[0]}</div>
                    </td>
                    <td className="column"> 
                    <div>{articleInCaseMissed[1]}</div>
                    </td>
                    <td className="column"> 
                    <div>{articleInCaseMissed[2]}</div>
                    </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default BlogHomePage