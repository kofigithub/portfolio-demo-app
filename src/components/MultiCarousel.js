import React, { Component } from "react";
//import ReactDOM from "react-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "./Header";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';


const data = [
  {
    label: "Image 1",
    alt: "image1",
    urlToImage:image1,
	siteUrl:"www.infoscanghana.com"
  },
  {
    label: "Image 2",
    alt: "image2",
    urlToImage:image2,
	siteUrl:"www.infoscanghana.com"
  },
  {
    label: "Image 3",
    alt: "image3",
    urlToImage: image3,
	siteUrl:"www.infoscanghana.com"
  },
  {
    label: "Image 4",
    alt: "image4",
    urlToImage:image4,
	siteUrl:"www.infoscanghana.com"
  },
  {
    label: "Image 5",
    alt: "image5",
    urlToImage:image5,
	siteUrl:"www.infoscanghana.com"
  }
];

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
    data: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    console.log("app mounted");
    
        this.setState({ data: data, loading: false }, () =>
          console.log(data.label)
        )
      
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
              <Carousel 
			  additionalTransfrom={0} 
			  arrows 
			  autoPlay={true}
			  autoPlaySpeed={3000}
			  centerMode={true}
			  className=""
			  containerClass="container-with-dots"
			  dotListClass=""
			  draggable
			  focusOnSelect={false}
			  infinite
			  itemClass=""
			  keyBoardControl
			  minimumTouchDrag={80}
			  renderButtonGroupOutside={false}
			  renderDotsOutside={false}
			  responsive={responsive}>
                {this.state.data.map((post, index) => {
                  return (
                    <div className="card text-left mt-5" key={index}>
                      <img
                        style={{ height: "100px" }}
                        src={post.urlToImage}
                        alt="Alt text"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{post.label}</h5>
                        <p className="card-text">{post.label}</p>
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
