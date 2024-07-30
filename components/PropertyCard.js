"use client";
import { useState } from "react";
import styles from "../styles/PropertyCard.module.css";
import Modal from "./Modal";

const PropertyCard = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.propertyCard}>
      <img src={property.thumbnail} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.price}</p>
      <button onClick={openModal}>View Details</button>

      <Modal isOpen={isModalOpen} onClose={closeModal} property={property} />
    </div>
  );
};

export default PropertyCard;
