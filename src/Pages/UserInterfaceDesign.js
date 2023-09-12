import React, { useEffect } from "react";
import ProtitypeCarousel from "../Components/PrototypeCarousel";
import PrototypeCard from "../Components/PrototypeCard";
import PrototypeCart from "../Components/PrototypeCart";
import PrototypeForm from "../Components/PrototypeForm";
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
      <PrototypeForm />
    </section>
  );
};

export default UserInterfaceDesign;
