import ash from "@/assets/Ash wood.jpeg";
import oak from "@/assets/Red Oak wood.jpeg";
import mahogany from "@/assets/Mohagany.jpeg";
import maple from "@/assets/Green maple.jpeg";
import beech from "@/assets/Beech wood.jpeg";
import pine from "@/assets/Yellow pine.jpeg";
import germanPine from "@/assets/German pine(kail).jpeg";
import sapelle from "@/assets/Sapelle wood.jpeg";
import deodar from "@/assets/Diyar (Deodar cedar).jpeg";
import pakistaniKail from "@/assets/Pakistani kail.jpeg";
import pakistaniPartal from "@/assets/Pakistani Partal.jpeg";

export type Product = {
  name: string;
  urdu: string;
  category: "imported" | "local";
  desc: string;
  uses: string[];
  image: string;
};

export const products: Product[] = [
  // Imported Woods
  { 
    name: "Ash Wood", 
    urdu: "ایش ووڈ", 
    category: "imported", 
    image: ash,
    desc: "Excellent shock resistance, straight grain, clean aesthetics.", 
    uses: ["Furniture", "Sports Equipment", "Tool Handles"] 
  },
  { 
    name: "Red Oak Wood", 
    urdu: "ریڈ اوک ووڈ", 
    category: "imported", 
    image: oak,
    desc: "Highly durable with prominent grain. Perfect for premium cabinetry.", 
    uses: ["Cabinetry", "Flooring", "Doors"] 
  },
  { 
    name: "Mahogany", 
    urdu: "مہاگنی", 
    category: "imported", 
    image: mahogany,
    desc: "Luxurious dark reddish-brown wood. Valued for stability and elegance.", 
    uses: ["Luxury Furniture", "Boats", "Musical Instruments"] 
  },
  { 
    name: "Green Maple", 
    urdu: "گرین میپل", 
    category: "imported", 
    image: maple,
    desc: "Sleek, modern look for high-end interior applications and custom woodwork.", 
    uses: ["Interior Trim", "Custom Cabinetry", "Flooring"] 
  },
  { 
    name: "Beech Wood", 
    urdu: "بیچ ووڈ", 
    category: "imported", 
    image: beech,
    desc: "Dense, hard, closely-grained wood with incredible mechanical strength.", 
    uses: ["Furniture Frames", "Plywood", "Workbenches"] 
  },
  { 
    name: "Yellow Pine", 
    urdu: "ییلو پائن", 
    category: "imported", 
    image: pine,
    desc: "Remarkable load-bearing capacity with deep grain texture.", 
    uses: ["Structural Beams", "Decking", "Heavy Construction"] 
  },
  { 
    name: "German Pine (Kail)", 
    urdu: "جرمن پائن (کائل)", 
    category: "imported", 
    image: germanPine,
    desc: "Premium German pine with excellent structural integrity and finish.", 
    uses: ["Construction", "Furniture", "Joinery"] 
  },
  { 
    name: "Sapelle Wood", 
    urdu: "سیپلی ووڈ", 
    category: "imported", 
    image: sapelle,
    desc: "Robust African hardwood with distinctive ribbon-like grain. Premium mahogany alternative.", 
    uses: ["High-end Joinery", "Veneers", "Doors"] 
  },
  
  // Local Woods
  { 
    name: "Deodar Cedar (Diyar)", 
    urdu: "دیودار (دیار)", 
    category: "local", 
    image: deodar,
    desc: "Fragrant, durable cedar wood native to Pakistan. Naturally resistant to decay.", 
    uses: ["Furniture", "Construction", "Mosques/Temples"] 
  },
  { 
    name: "Pakistani Kail", 
    urdu: "پاکستانی کائل", 
    category: "local", 
    image: pakistaniKail,
    desc: "Locally sourced Kail wood perfect for construction and carpentry.", 
    uses: ["Roof Trusses", "Construction", "Carpentry"] 
  },
  { 
    name: "Pakistani Partal", 
    urdu: "پاکستانی پرتال", 
    category: "local", 
    image: pakistaniPartal,
    desc: "Traditional Pakistani hardwood known for durability and rich texture.", 
    uses: ["Doors", "Window Frames", "Furniture"] 
  },
];