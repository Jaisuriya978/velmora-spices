import { useState } from "react";
import "./App.css";
import bgVideo from "./assets/12351626_3840_2160_30fps.mp4"



const spicesData = [
  {
    name: "Turmeric",
    icon: "https://i.pinimg.com/736x/3e/f1/43/3ef143c731e347f88945c0acd6a029d0.jpg",
    desc: "Rich in curcumin, turmeric is known for its vibrant color and health benefits.",
    img: [
      "https://i.pinimg.com/1200x/23/e5/76/23e576b531566bfbdea8ddcaf18a252a.jpg",
      "https://i.pinimg.com/1200x/2b/c6/e0/2bc6e08cd51617bca3a7847b82b3c158.jpg",
      "https://i.pinimg.com/1200x/db/a7/41/dba7417557ffd57c74491a69b91279b8.jpg",
    ],
  },

  {
    name: "Red Chilli",
    icon: "https://i.pinimg.com/736x/d0/e4/50/d0e45009587ef52bc0fa7078d1a77eb8.jpg",
    desc: "Adds heat and depth to dishes, made from dried red chilies.",
    img: ["https://i.pinimg.com/1200x/ce/0b/37/ce0b3792a3a3ad3fc8bada62bb422264.jpg",
      "https://i.pinimg.com/736x/48/52/45/48524592bb474db27b5fab9201af4524.jpg",
      "https://i.pinimg.com/736x/ab/f4/67/abf467c19a9bfddb423f5e48563a4ce8.jpg",
    ]

  },
  {
    name: "Cumin",
    icon: "https://i.pinimg.com/736x/4d/7b/2f/4d7b2feb1ae497d0e44da623c68f2d5b.jpg",
    desc: "Earthy and aromatic spice widely used in Indian cooking.",
    img: ["https://i.pinimg.com/1200x/20/84/a3/2084a3b2c2f46446d0440452329996f3.jpg",
      "https://i.pinimg.com/1200x/5b/26/8b/5b268bc8637be33e4d3b5256de507e25.jpg",
      "https://i.pinimg.com/1200x/8d/73/b0/8d73b057211f4be30635a5e6b0b8572d.jpg",
    ]
  },
  {
    name: "Coriander",
    icon: "https://i.pinimg.com/736x/29/4a/58/294a586ed7b3a653db159faff268ab48.jpg",
    desc: "Mild citrus flavor, used in both whole and ground forms.",
    img: ["https://i.pinimg.com/736x/5f/40/41/5f40417a069e53ae0e7ee0ae8cf3cf48.jpg",
      "https://i.pinimg.com/736x/2f/5d/bb/2f5dbb7188f4448cf50fd8371bd713ce.jpg",
      "https://i.pinimg.com/736x/bb/c0/94/bbc0946dcc704aba80944820de79e49c.jpg",
    ]
  },
  {
    name: "Cardamom",
    icon: "https://i.pinimg.com/1200x/64/06/30/640630541e80b40d940be40b0f8ff410.jpg",
    desc: "Known as the 'Queen of Spices', cardamom has a sweet, floral aroma used in desserts, tea, and premium dishes.",
    img: ["https://i.pinimg.com/1200x/03/93/b9/0393b94827d2cb5318f7ca492bfb050c.jpg",
      "https://i.pinimg.com/1200x/8c/f1/ab/8cf1abd64bd70254afcf5015402edc58.jpg",
      "https://i.pinimg.com/736x/01/6d/e3/016de387bf7621bcbd5c183fe0b04164.jpg",
    ]
  },
  {
    name: "Black Pepper",
    desc: "Called the 'King of Spices', black pepper delivers sharp heat and is essential in global cuisines.",
    icon: "https://i.pinimg.com/1200x/24/51/7e/24517e958afd4a2c6dbfc6f9afb537f0.jpg",
    img: ["https://i.pinimg.com/1200x/0d/63/f5/0d63f55563df77cd41ff45e7bc8f673b.jpg",
      "https://i.pinimg.com/736x/8a/54/44/8a5444a2baaee870540fd5dbded3213e.jpg",
      "https://i.pinimg.com/1200x/64/e2/ce/64e2ce97645d0474e708976802cd577d.jpg",
    ]
  },
  {
    name: "Curry Leaves",
    desc: "Fresh and aromatic leaves widely used in South Indian cooking, known for their unique flavor and health benefits.",
    icon: "https://i.pinimg.com/1200x/70/8c/34/708c34edaf06de5c5c76f947492222cf.jpg",
    img: ["https://i.pinimg.com/1200x/b0/29/1c/b0291c388e13185ed7917040455cc159.jpg",
      "https://i.pinimg.com/736x/83/34/e4/8334e48a553c5610d41a0324e951ca74.jpg",
      "https://i.pinimg.com/1200x/c2/78/ef/c278ef8fcc42c8d6584fa841ab8eb72b.jpg",
    ]
  },
  {
    name: "Cinnamon Stick",
    icon: "https://i.pinimg.com/1200x/26/f3/8a/26f38a1a6a010688ac21a0851c441bc7.jpg",
    desc: "Sweet and woody spice used in desserts, teas, and savory dishes, adding warmth and rich aroma.",
    img: ["https://i.pinimg.com/1200x/7b/82/e0/7b82e0a26354765d05ce2d5c0a28e140.jpg",
      "https://i.pinimg.com/736x/3f/e4/7e/3fe47ef92801031a5111b250ba2814af.jpg",
      "https://i.pinimg.com/736x/63/03/21/6303218ed3654eb80949745b31cbcc3d.jpg",
    ]
  }
];



const videos = [
  {
    id: 2,
    src: "https://www.pexels.com/download/video/8296067/",
    thumb: "/video-thumb.jpg",

  },
  {
    id: 3,
    src: "https://www.pexels.com/download/video/32736578/",
    thumb: "/video-thumb.jpg",

  }
];



const styles = {
  title: {
    fontSize: "45px",
    marginBottom: "20px",
    animation: "fadeUp 1s ease-out",
  },

  text: {
    fontSize: "18px",
    maxWidth: "900px",
    margin: "auto",
    lineHeight: "1.7",
    opacity: 0,
    animation: "fadeUp 1.5s ease-out forwards",
  },
};

function App() {
  const [playVideo, setPlayVideo] = useState(false);
  const [selectedSpice, setSelectedSpice] = useState(spicesData[0]);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div style={{ fontFamily: "Arial" }}>
      {/* NAVBAR */}
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          background: "#E9E6ED",
          color: "black",
        }}
      >
        {/* LEFT: LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="image.png"
            alt="logo"
            width={55}
            style={{ borderRadius: "50%" }}
          />
          <div style={{ textAlign: "center", lineHeight: "1.1" }}>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
              VELMORA
            </div>

            <div style={{ fontWeight: "500", fontSize: "18px", color: "#555" }}>
              Spices
            </div>
          </div>
        </div>

        {/* RIGHT: MENU */}
        <div style={{ display: "flex", gap: "70px" }}>
          <a href="#home" style={{ color: "black", textDecoration: "none" }}>
            Home
          </a>
          <a href="#about" style={{ color: "black", textDecoration: "none" }}>
            About
          </a>
          <a href="#spices" style={{ color: "black", textDecoration: "none" }}>
            Spices
          </a>
          <a href="#video" style={{ color: "black", textDecoration: "none" }}>
            Video
          </a>
        </div>
      </nav>


      {/* HOME */}
      <section
        style={{
          position: "relative",
          height: "200px",
          overflow: "hidden",
          padding: "250px 20px",
          marginTop: "2px",
          textAlign: "justify",
          color: "white",
        }}
      >
        {/* 🎥 BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 2, // 👈 keep lowest
          }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* 🌑 DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        />

        {/* ✅ CONTENT (LEFT + RIGHT LAYOUT) */}
        <div
          style={{
            position: "relative",
            zIndex: 2, // 👈 always above video
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            padding: "0 60px",
            color: "white",
          }}
        >
          {/* LEFT TEXT */}
          <div style={{ maxWidth: "800px" }}>
            <h1 style={{ fontSize: "68px", color: "white" }}>Velmora Spices</h1>
            <p style={{ lineHeight: "1.7" }}>
              Velmora is India’s premier spices manufacturer and supplier, specializing in premium, farm-sourced spices for authentic flavor, natural nutrition, and traditional cooking. Our pure spices are carefully harvested and processed from the finest organic farms, ensuring rich aroma, vibrant color, and maximum freshness. From turmeric for its health benefits to red chilli for bold flavor, we provide natural ingredients that bring true taste and quality to modern kitchens.
            </p>
            <button
              onClick={() => {
                document.getElementById("spices").scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "12px 25px",
                background: "#2d5a27",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px"
              }}
            >
              Explore Spices
            </button>
            <button
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "12px 28px",
                background: "transparent",
                color: "#ffffff",
                border: "2px solid #ffffff",
                borderRadius: "30px",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                marginTop: "15px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#2d5a27";
                e.target.style.border = "2px solid #2d5a27";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.border = "2px solid #ffffff";
              }}
            >
              Learn More
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

          </div>
        </div>
      </section>





      <section
        id="about"
        style={{
          padding: "100px 20px",
          background: "linear-gradient(135deg, #f7f5f0, #ffffff)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >

          {/* LEFT SIDE - IMAGE */}
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
              alt="Spices"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
              }}
            />

            {/* FLOATING CARD */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                background: "none",
                padding: "15px 20px",
                borderRadius: "15px",
                maxWidth: "220px",
                animation: "fadeUp 1s ease",
              }}
            >
              <h4 style={{ margin: 0, color: "white" }}>Pure Spices</h4>
              <p style={{ margin: "5px 0 0", fontSize: "14px", color: "white" }}>
                Fresh, natural and handpicked ingredients for better taste.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div>
            <h2
              style={{
                fontSize: "40px",
                marginBottom: "15px",
                color: "#2d5a27",
              }}
            >
              About Velmora
            </h2>

            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
              Velmora Spices delivers natural and pure spices sourced directly from
              trusted farms across India. We are committed to bringing authentic
              flavors, rich aroma, and unmatched quality to every kitchen.
            </p>

            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
              Our spices are carefully handpicked, hygienically processed, and packed
              to preserve freshness and nutritional value from farm to table.
            </p>

            {/* FEATURES GRID */}
            <div
              style={{
                marginTop: "25px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
              }}
            >
              {[
                "100% Natural & Chemical-Free",
                "Sourced from Trusted Farmers",
                "Hygienically Packed",
                "Rich Aroma & Taste",
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: "12px 15px",
                    borderRadius: "10px",
                    background: "#ffffff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    borderLeft: "4px solid #2d5a27",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>


      <section
        id="spices"
        style={{
          position: "relative",
          padding: "100px 20px",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
        }}
      >


        {/* CONTENT */}
        <h2 style={{ fontSize: "36px", marginBottom: "10px", color: "green" }}>
          Our Spices
        </h2>

        <p style={{ marginBottom: "50px", color: "#ddd" }}>

        </p>



        {/* SPICES */}
        <div style={{ marginBottom: "70px" }}>
          <h3 style={{ marginBottom: "45px" }}> </h3>

          {/* GRID */}
          <div
            style={{
              maxWidth: "1600px",
              margin: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "20px",
            }}
          >
            {spicesData.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedSpice(item)}
                style={{
                  padding: "18px",
                  borderRadius: "12px",
                  background:
                    selectedSpice.name === item.name
                      ? "#2d5a27"
                      : "rgba(236, 241, 244, 0.9)",
                  color:
                    selectedSpice.name === item.name ? "#fff" : "#2d5a27",
                  fontWeight: "500",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                {/* ICON */}
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "50px",
                    marginBottom: "10px",
                    transition: "0.3s",
                    filter:
                      selectedSpice.name === item.name
                        ? "brightness(1) invert(0)"
                        : "none",
                  }}
                />
                {item.name}
              </div>
            ))}
          </div>

          {/* DETAILS PANEL */}
          <div
            style={{
              marginTop: "40px",
              maxWidth: "1000px",
              marginInline: "auto",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              padding: "55px",
              borderRadius: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >

            {selectedSpice.img.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={selectedSpice.name}
                style={{
                  width: "300px",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            ))}
          </div>




        </div>
      </section>



      {/* VIDEO */}
      <section
        id="video"
        style={{
          padding: "20px 10px",
          textAlign: "center",
          background: "white",
          color: "white",
        }}
      >


        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                aspectRatio: "16 / 9",
              }}
            >
              {/* 🎥 Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source src={video.src} type="video/mp4" />
              </video>

              {/* 🌑 Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.4)",
                }}
              />

              {/* 📝 Title + Centered Description */}
              <div
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: "0",
                  right: "0",
                  textAlign: "center", // ✅ center align
                  zIndex: 2,
                  padding: "0 10px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  {video.title}
                </p>

                {/* ✅ Two-line description */}
                <p
                  style={{
                    margin: "5px 0 0",
                    fontSize: "33px",
                    color: "#e0e0e0",
                    lineHeight: "1.4",
                  }}
                >
                  Pure and authentic spices <br />
                  crafted for rich aroma and taste
                </p>
              </div>

              {/* 🟢 Button (bottom-left stays same) */}
              <button
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "15px",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "none",
                  background: "green",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  zIndex: 2,
                }}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>



      {/* FOOTER */}
      <footer style={{ textAlign: "left", padding: "30px", background: "#E9E6ED", color: "black" }}>
        © 2026 Velmora Spices. All Rights Reserved.
      </footer>
    </div >
  );
}

export default App;