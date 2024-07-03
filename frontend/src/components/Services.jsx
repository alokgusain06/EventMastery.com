import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/Diwali.jpg",
      title: "Diwali Planning",
    },
    {
      id: 4,
      url: "/christmas.jpg",
      title: "Christmas Planning",
    },
    {
      id: 5,
      url: "/halloween.jpg",
      title: "Halloween Party Planning",
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Wedding Planning",
    },
    {
      id: 7,
      url: "/dahihandi.jpg",
      title: "dahihandi celebration",
    },
    {
      id: 8,
      url: "/Dussehra.jpg",
      title: "Dussehra Planning",
    },
    {
      id: 9,
      url: "/Holi.jpg",
      title: "Holi Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;