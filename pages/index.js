import PropertyCard from "@/components/PropertyCard";
import styles from "@/styles/Home.module.css";

const properties = [
  {
    title: "Beautiful Family Home",
    price: "$500,000",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2500,
    description: "A beautiful family home in a great neighborhood.",
    thumbnail: "/images/property1.jpg",
    images: [
      "/images/property1.jpg",
      "/images/property2.jpg",
      "/images/property3.jpg",
    ],
  },
  // Add more properties as needed
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Real Estate Listings</h1>
      <div className={styles.propertyList}>
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
}
