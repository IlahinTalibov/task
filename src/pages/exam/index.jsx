import React from "react";
import "./style.css";
import Container from "../../components/customContainer";
import Button from "../../components/button";
import ExamIntro from "../../assets/images/exam-intro.png";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import { ReactComponent as Note } from "../../assets/icons/note.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as First } from "../../assets/icons/first.svg";
import { ReactComponent as Second } from "../../assets/icons/second.svg";
import { ReactComponent as Third } from "../../assets/icons/third.svg";
import { ReactComponent as Fourth } from "../../assets/icons/fourth.svg";
import { ReactComponent as Fifth } from "../../assets/icons/fifth.svg";
import { ReactComponent as Right } from "../../assets/icons/right.svg";
import { ReactComponent as Dot } from "../../assets/icons/dot.svg";
import { ReactComponent as Message } from "../../assets/icons/message.svg";
import Rating from "../../components/rating";
import ProgressBar from "../../components/progressBar";

const Exam = () => {
  return (
    <Container className="examination" maxWidth="1160px" margin="0 auto">
      {/* examination intro section */}
      <Container className="examination-intro">
        <div className="content">
          <h2>3-cü sinif imtahanı</h2>

          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
            </li>
          </ul>

          <Button
            variant="secondary"
            text="1 Azn-imtahanı al"
            style={{ backgroundColor: "white", color: "black" }}
          />
        </div>

        <div className="image">
          <img src={ExamIntro} alt="ExamIntro" />
        </div>
      </Container>

      {/* information section */}
      <Container className="information">
        <div className="left">
          <h3>Məlumat</h3>
          <div className="title">
            <div className="item">
              <Clock /> <span>45 dəqiqə</span>
            </div>
            <div className="item">
              <Note /> <span>20 sual</span>
            </div>
            <div className="item">
              <Calendar /> <span>22.05.2023 hazırlanıb</span>
            </div>
          </div>
          <div className="questions">
            <h3>Suallar</h3>
            <ul>
              <li className="question">
                &#x2022;{"\xa0"}
                {"\xa0"}Azərbaycan dili-10 sual
              </li>
              <li className="question">
                &#x2022;{"\xa0"}
                {"\xa0"}Rizyyaziyyat-10 sual
              </li>
            </ul>
          </div>
        </div>

        <div className="right">
          <h3>İmtahan üzrə nəticələr</h3>
          <div className="results">
            {results.map((result) => (
              <div className="result">
                {result.icon}
                <p className="person">{result.name}</p>

                <div className="direct">
                  <span>{result.price}</span> <Dot />{" "}
                  <span>{result.duration}</span>
                  <Right style={{ marginLeft: 12 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* rating section */}
      <Container className="rating">
        <h2>Rəylər</h2>
        <div className="average-rating">
          <div className="total">
            <h2>4.9</h2>
            <div className="total-comment">
              <Message /> <span>440 rəy</span>
            </div>
          </div>

          <div className="stars">
            {stars.map((star, index) => (
              <div key={index} className="degree">
                <span>
                  {star.count}
                  <Rating count={star.star} />
                </span>
                <ProgressBar progress={star.process} />
              </div>
            ))}
          </div>
        </div>

        <div className="comments">
          {Array.from({ length: 15 }, (_, index) => (
            <div key={index} className="comment">
              <p className="name">{comment.name}</p>
              <div className="title">
                <Rating count={4} />
                <span>{comment.duration}</span>
              </div>
              <p className="text">{comment.text}</p>
            </div>
          ))}
        </div>
        <Button variant="primary" text="Daha çox" margin={"60px auto 0"} />
      </Container>
    </Container>
  );
};

export default Exam;

const results = [
  {
    id: 1,
    name: "Ilahə Nəzərova",
    price: "20 bal",
    duration: "-12 dəq",
    icon: <First />,
  },
  {
    id: 2,
    name: "Ilahə Nəzərova",
    price: "20 bal",
    duration: "00 dəq",
    icon: <Second />,
  },
  {
    id: 3,
    name: "Ilahə Nəzərova",
    price: "19 bal",
    duration: "-12 dəq",
    icon: <Third />,
  },
  {
    id: 4,
    name: "Ilahə Nəzərova",
    price: "18 bal",
    duration: "-12 dəq",
    icon: <Fourth />,
  },
  {
    id: 5,
    name: "Ilahə Nəzərova",
    price: "17 bal",
    duration: "-12 dəq",
    icon: <Fifth />,
  },
];

const comment = {
  name: "Ilahə Nəzərova",
  rating: 3,
  duration: "2 gün əvvəl",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
};

const stars = [
  {
    id: 1,
    count: 378,
    star: 5,
    process: 0.7,
  },
  {
    id: 2,
    count: 24,
    star: 4,
    process: 0.13,
  },
  {
    id: 3,
    count: 21,
    star: 3,
    process: 0.1,
  },
  {
    id: 4,
    count: 15,
    star: 2,
    process: 0.05,
  },
  {
    id: 5,
    count: 2,
    star: 1,
    process: 0.02,
  },
]