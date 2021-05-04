import React, { Component } from 'react';
// import ArticleTile from './ArticleTile';
import Article from './Article';
import articlesMissed from '../data/missed-articles.json'
import yourArticles from '../data/your-articles.json'

class BlogHomePage extends Component {
    render() {
        const articlesForYou = yourArticles.map((yourArticle, idx) => {
            return (
                <div className='article-child'>
                < Article article={yourArticle} articleType={'forYou'}/>
                </div>
            )
        })
        const articleInCaseMissed = articlesMissed.map((missedArticle, idx) => {
            return (
                <div className='article-child'>
                < Article article={missedArticle} articleType={'inCaseMissed'}/>
                </div>
            )
        })
        return (
            <div>
                <h1>For you</h1>
                <div className="article-gallery">
                    {articlesForYou}
                </div>
                <h1>In case you missed it</h1>
                <div className="article-gallery">
                    {articleInCaseMissed}
                </div>
            </div>
        )
    }
}

export default BlogHomePage