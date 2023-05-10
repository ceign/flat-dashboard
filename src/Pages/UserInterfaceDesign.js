import React, { useEffect } from "react";
import ProtitypeCarousel from "../Components/PrototypeCarousel";
import PrototypeCard from "../Components/PrototypeCard";
import "../Pages/UserInterfaceDesign.css";

const UserInterfaceDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="prototypes">
      <ProtitypeCarousel />
      <PrototypeCard />
    </section>
  );
};

export default UserInterfaceDesign;
