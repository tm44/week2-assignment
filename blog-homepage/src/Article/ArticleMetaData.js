import React, { Component } from 'react';
import {ReactComponent as Bookmark} from '../bookmark.svg';
import PropTypes from 'prop-types';

class ArticleMetaData extends Component {
  static propTypes = {
    authorImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    posted: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired
  }

  render() {

    const options = {
      month:"short",
      day:"numeric"
    };

    return (
        <div className="an br ay">
          <img src={this.props.authorImage} className="articleAuthor" alt="Auther image" />
          <div className="articleAndAuthorData">
            {this.props.author}<br />
            <div className="articleAndAuthorSubData">{new Date(this.props.posted).toLocaleDateString('en-US', options)} &middot; {this.props.minutesToRead} min read<Bookmark /></div>
          </div>
        </div>
    );
  }
}

export default ArticleMetaData;
