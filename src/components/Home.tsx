import React from "react";
import "../css/Home.css";
import Banner from "../components/Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__seaction">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="온라인체험"
          description="세계 각지의 호스트가 진행하고 모두 함께 즐기는 독특한 액티비티"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="독특한 공간"
          description="단순한 숙소 이상의 특별함이 담긴 공간"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="집 전체"
          description="일행만을 위한 장소"
        />
      </div>
      <div className="home__seaction">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
