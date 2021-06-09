import React, { Component } from 'react';

import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';

import './App.css';

class App extends Component {
  state = {
    showBlogs: true,
    blogArray: [
      {
        id: 1,
        title: 'Blog1',
        text: 'coding',
        likeCount: 0
      },
      {
        id: 2,
        title: 'Blog2',
        text: 'running',
        likeCount: 0
      },
      {
        id: 3,
        title: 'Blog3',
        text: 'writing',
        likeCount: 0
      }
    ]
  }

  onLike = (pos) => {
    const updatedBlogList = this.state.blogArray;
    const updatedBlogObject = updatedBlogList[pos];

    updatedBlogObject.likeCount ++;
    updatedBlogList[pos] = updatedBlogObject;

    this.setState({ blogArray: updatedBlogList });
  }

  hideList = () => {
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs };
    })

    console.log(this.state.showBlogs);
  };

  render() {
    console.log('rendering');
    console.log(this.state);

    const blogCards = isArrayEmpty(this.state.blogArray)
      ? []
      : this.state.blogArray.map((item, pos) => {
        return (
          <BlogCard
            className={'BlogCard'}
            key={item.id}
            title={item.title}
            text={item.text}
            likeCount={item.likeCount}
            onLike={() => this.onLike(pos)}
          />
        )
      });

    return (
      <div className="App">
        <button onClick={this.hideList}>
          {this.state.showBlogs
            ? "hide list"
            : "show list"
          }
        </button>
        <br></br>
        {this.state.showBlogs
          ? blogCards
          : null}
      </div>
    )
  }

};

export default App;
