import React, { Component } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "./Header";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class MultiCarousel extends Component {
  state = {
    loading: false,
    data: [],
    headline: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    console.log("app mounted");
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5"
    )
      .then(data => data.json())
      .then(data =>
        this.setState({ data: data.articles, loading: false }, () =>
          console.log(data.articles)
        )
      );
  }

  render() {
    return (
	<div>
	  <Header/><br clear="all" />
      <div className="about container">
        <div className="about container">
          
          {this.state.loading ? (
            "loading..."
          ) : (
            <div>
              <Carousel responsive={responsive}>
                {this.state.data.map((post, indx) => {
                  return (
                    <div className="card text-left mt-5" key={indx}>
                      <img
                        style={{ height: "100px" }}
                        src={post.urlToImage}
                        alt="Alt text"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          )}
        </div>
      </div>
	  </div>
    );
  }
}

export default MultiCarousel;
