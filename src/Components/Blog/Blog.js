import "./Blog.css";
import blog1 from "./../../images/blog1.jpg";
import blog2 from "./../../images/blog2.jpg";
import blog3 from "./../../images/blog3.jpg";

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <h2 className="mainTitle mb15">Blog</h2>
        <div className="contentFlex">
          <div className="mainContent">
            <img className="mb16" src={blog1} alt="Blog1" width="264" height="188" />
            <h3 className="blogHeadings mb15">Businesswise</h3>
            <p className="mainTxt mb16">
              Businesswise freelance was a project where I worked as a designer. The main goal of businesswise is to gather podcasts in various categories for professional people.
            </p>
            <p className="link">
              <a href="#seeAll">See All</a>
            </p>
          </div>
          <div className="mainContent">
            <img className="mb16" src={blog2} alt="Blog2" width="264" height="188" />
            <h3 className="blogHeadings mb15">Simple Scanner</h3>
            <p className="mainTxt mb16">
              Simple Scanner is an application that we developed when I was working at Enrich mobile. With Simple scanner, you can scan your documents and convert them to PDF
            </p>
            <p className="link">
              <a className="disabled" href="#comingSoon">
                Coming Soon
              </a>
            </p>
          </div>
          <div className="mainContent">
            <img className="mb16" src={blog3} alt="Blog3" width="264" height="188" />
            <h3 className="blogHeadings mb15">Musix</h3>
            <p className="mainTxt mb16">
              Musix is a side project I prepared in my spare time. Spotify and Apple Music competitors. The biggest advantage compared to its competitors is that it provides higher sound quality.
            </p>
            <p className="link">
              <a href="#seeAll">See All</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
