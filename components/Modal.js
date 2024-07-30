import styles from "../styles/Modal.module.css";

const Modal = ({ isOpen, onClose, property }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        <h2>{property.title}</h2>
        <div className={styles.imageGallery}>
          {property.images.map((image, index) => (
            <img key={index} src={image} alt={`Property image ${index + 1}`} />
          ))}
        </div>
        <div className={styles.propertyDetails}>
          <p>{property.description}</p>
          <ul>
            <li>Price: {property.price}</li>
            <li>Bedrooms: {property.bedrooms}</li>
            <li>Bathrooms: {property.bathrooms}</li>
            <li>Square Feet: {property.squareFeet}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
