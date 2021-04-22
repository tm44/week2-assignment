import React, { Component } from 'react';
import ArticleMetaData from './ArticleMetaData';
import PropTypes from 'prop-types';

class MissedArticle extends Component {

  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    memberPreview: PropTypes.bool,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    authorImage: PropTypes.string.isRequired
  };

  showMemberPreview(memberPreview) {
    if (memberPreview) {
      return <div className="memberPreview">&#9733; Member preview</div>
    }
    else {
      return '';
    }
  }

  render() {

    return (
      <div className="missedArticleContainer">
        <div className="missedArticleImage" style={{backgroundImage: 'url(' + this.props.imageUrl + ')'}}></div>
        <div className="articleBody">
          {this.showMemberPreview(this.props.memberPreview)}
          <div className="articleTitle">{this.props.title}</div>
          <div className="articleDescription">{this.props.desc}</div>
          <ArticleMetaData authorImage={this.props.authorImage} author={this.props.author} posted={this.props.posted} minutesToRead={this.props.minutesToRead} />
        </div>
      </div>

    );
  }
}

export default MissedArticle;
