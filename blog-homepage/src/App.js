import React, {Component } from 'react';
import './App.css';
import ForYouSection from './Article/ForYouSection'
import * as ForYouArticles from './Article/your-articles.json';
import MissedArticleSection from './Article/MissedArticleSection';
import * as MissedArticles from './Article/missed-articles.json';

class App extends Component {
  state = {
    forYouItems: ForYouArticles.default,
    missedArticles: MissedArticles.default
  };

  render() {
    return (
      <div className="App">
        <ForYouSection items={this.state.forYouItems} />
        <MissedArticleSection items={this.state.missedArticles} />
      </div>
    );
  }
}

export default App;
