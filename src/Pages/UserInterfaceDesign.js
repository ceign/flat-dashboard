import React, { useEffect } from "react";
import ProtitypeCarousel from "../Components/PrototypeCarousel";
import PrototypeCard from "../Components/PrototypeCard";
import PrototypeCart from "../Components/PrototypeCart";
import "../Pages/UserInterfaceDesign.css";

const UserInterfaceDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="prototypes">
      <ProtitypeCarousel />
      <PrototypeCard />
      <PrototypeCart />
    </section>
  );
};

export default UserInterfaceDesign;
