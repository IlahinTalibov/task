import React from "react";
import "./style.css";
import Container from "../../components/customContainer";
import Button from "../../components/button";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="home">
      {/* intro section */}
      <Container className="intro">
        <div className="content">
          <h1>İmtahanlar</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </p>
        </div>
      </Container>

      {/* category section */}
      <Container className="category-container">
        <h6>İmtahan</h6>
        <h2>Kateqoriya seç</h2>
        <div className="categories">
          {categories.map((category) => (
            <div className="category">{category}</div>
          ))}
        </div>
      </Container>

      {/* most used section */}
      <Container className="most-used-exams-container">
        <h6>Ən çox işlənənlər</h6>
        <h2>İmtahanlar</h2>
        <div className="exams-wrapper">
          {/* filter */}
          <div className="filter">
            <h3>Filter</h3>

            <div className="filter-title">Kateqoriyalar</div>
            {filter.categories.map((category, index) => (
              <Button
                key={index}
                width="100%"
                variant="filter"
                margin="12px 0 0 0"
                text={category}
              />
            ))}
            <div className="filter-title">Etiketlər</div>
            {filter.tags.map((tag, index) => (
              <Button
                key={index}
                width="100%"
                variant="filter"
                margin="0 0 12px 0"
                text={tag}
              />
            ))}
          </div>

          {/* exams */}
          <div className="most-used-exams">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="exam-card" onClick={() => {navigate("/exam")}}>
                <h3>{mostUsedExams.title}</h3>

                <div className="time-comment">
                  <span className="duration">
                    {" "}
                    <Clock /> {mostUsedExams.duration}
                  </span>
                  {/* bax */}
                  <span className="comment"> {mostUsedExams.comment} rəy</span>
                </div>

                <div className="questions">
                  <p>Suallar</p>
                  <ul>
                    {mostUsedExams.questions.map((question, index) => (
                      <li className="question">&#x2022;{"\xa0"}{"\xa0"}{question}</li>
                    ))}
                  </ul>
                </div>

                <div className="line" />

                <div className="category-buttons">
                  {mostUsedExams.categories.map((category, index) => (
                    <Button key={index} variant="category-button" text={category} />
                  ))}
                </div>

                <Button
                  variant="primary"
                  text={`${mostUsedExams.amount} - indi al`}
                  width="100%"
                />
              </div>
            ))}

            <Button variant="primary" text="Daha çox" margin={"60px auto 0"} />
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Home;
const categories = [
  "Buraxılış",
  "Blok",
  "Təkmilləşmə",
  "İbtidai sinif",
  "Liseylərə",
  "Magistratura",
  "Olimpiadalar",
  "Fənn imtahanı",
];

const filter = {
  categories: [
    "Ibtidai sinif",
    "Buraxılış",
    "Blok",
    "Təkmilləşdirmə",
    "Liseylərə",
    "Magistratura",
    "Olimpiada",
    "Fənn imtahanı",
  ],
  tags: ["2-ci sinif", "3-cü sinif", "4-cü sinif"],
};

const mostUsedExams = {
  title: "3-cü sinif imtahanı",
  duration: "45 dəqiqə",
  comment: 2,
  questions: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
  categories: ["İbtidai sinif", "3-cü sinif"],
  amount: "1 AZN",
};
