// rce
import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 2,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    // when we use class in js we use constructor. always use super() otherwise it will throw an error.
    super(props);
    console.log("Hello I am a constructor form news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category} - NewsMonkey`;
  }

  async componentDidMount() {
    console.log("cmd");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fe0690624a2440aaabb5238c3158ca0&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    
  }

  handleNextClick = async () => {
    console.log("Next");

    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=7fe0690624a2440aaabb5238c3158ca0&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handlePrevClick = async () => {
    console.log("Previous");
    if (this.state.page - 1 >= 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=7fe0690624a2440aaabb5238c3158ca0&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
      });
    } else {
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ marginTop: "70px" }}>
          NewsMonkey - Top {this.props.category} Headlines
        </h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3">
                <NewsItems
                  key={element.url}
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              class="btn btn-primary mx-1"
              onClick={this.handlePrevClick}
            >
              Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              class="btn btn-primary mx-1"
              onClick={this.handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

// {this.state.articels.map((element)=>{console.log(element)})}
