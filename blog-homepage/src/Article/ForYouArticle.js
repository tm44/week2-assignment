import React, { Component } from 'react';
import ArticleMetaData from './ArticleMetaData';
import PropTypes from 'prop-types';

class ForYouArticle extends Component {

  static propTypes = {
    hasAudioAvailable: PropTypes.bool,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    authorImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    posted: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired
  };

  showAudio(audioAvailable) {
    if (audioAvailable) {
      return <div className="articleAudio">Audio available</div>
    }
    else {
      return '';
    }
  }

  render() {
    return (
      <div className="forYouArticleContainer">
        <div className="forYouArticleBody">
          <div className="forYouArticleImage" style={{backgroundImage: 'url(' + this.props.imageUrl + ')'}}></div>

          {this.showAudio(this.props.hasAudioAvailable)}

          <strong>{this.props.title}</strong>
          <div className="articleDescription">{this.props.desc}</div>
          <ArticleMetaData authorImage={this.props.authorImage} author={this.props.author} posted={this.props.posted} minutesToRead={this.props.minutesToRead} />
        </div>
      </div>
    );
  }
}

export default ForYouArticle;
