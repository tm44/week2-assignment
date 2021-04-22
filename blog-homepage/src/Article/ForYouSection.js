import React, { Component } from 'react';
import ForYouArticle from './ForYouArticle';
import './Article.css';

class ForYouSection extends Component {
  render() {

    const articles = this.props.items.map((item, index) => {
      return <div key={index}><ForYouArticle
        title={item.title}
        imageUrl={item.image}
        desc={item.description}
        authorImage={item.author.image}
        author={item.author.name}
        posted={item.postedDate}
        hasAudioAvailable={item.hasAudioAvailable}
        minutesToRead={item.minutesToRead} />{(index % 2 === 1 ? <div style={{clear: 'both'}}></div> : '')}</div>;
    });

    return (
      <div className="forYouArticlesContainer">
        <h3>For you</h3>
        <hr />
        {articles}
      </div>
    )
  }
}

export default ForYouSection;
