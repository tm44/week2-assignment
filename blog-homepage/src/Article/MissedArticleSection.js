import React, { Component } from 'react';
import MissedArticle from './MissedArticle';
import './Article.css';

class MissedArticleSection extends Component {
  render() {

    const articles = this.props.items.map((item, index) => {
      return <MissedArticle
        key={index}
        title={item.title}
        imageUrl={item.image}
        desc={item.description}
        authorImage={item.author.image}
        author={item.author.name}
        posted={item.postedDate}
        memberPreview={item.memberPreview}
        minutesToRead={item.minutesToRead} />;
    });

    return (
      <div className="missedArticlesContainer">
        <h3>In case you missed it</h3>
        <hr></hr>
        {articles}
        <div style={{clear: 'both'}}></div>
      </div>
    )
  }
}

export default MissedArticleSection;
