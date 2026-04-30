import { useState } from "react";
import "./App.css";
import bgVideo from "./assets/12351626_3840_2160_30fps.mp4"



const spicesData = [
  {
    name: "Turmeric",
    icon: "https://i.pinimg.com/736x/3e/f1/43/3ef143c731e347f88945c0acd6a029d0.jpg",
    desc: "Rich in curcumin, turmeric is known for its vibrant color and health benefits.",
    img: [
      "https://i.pinimg.com/1200x/5b/0b/6a/5b0b6a762da3934397f824b8cd567e8d.jpg",
      "https://i.pinimg.com/736x/0e/c0/b3/0ec0b31f1531a1169bc2f3af42e0d539.jpg",
      "https://i.pinimg.com/1200x/0f/f6/99/0ff699d114715026e9b5edde0ee0ed99.jpg",
    ],
  },

  {
    name: "Red Chili",
    icon: "https://i.pinimg.com/736x/73/e9/92/73e99205045434fbcbcc052ec2b9437f.jpg",
    desc: "Adds heat and depth to dishes, made from dried red chilies.",
    img: ["https://i.pinimg.com/736x/e0/5c/3b/e05c3b4f7e3f68db6b1f26db21e6a159.jpg",
      "https://i.pinimg.com/736x/24/32/66/2432667533495c00a913dc0a676b8a49.jpg",
      "https://i.pinimg.com/736x/6e/2d/62/6e2d624c4366e20a4498a4077770b156.jpg",
    ]

  },
  {
    name: "Cumin",
    icon: "https://i.pinimg.com/1200x/88/fe/8c/88fe8cd5b9ea1e1e7f75b2205764ef71.jpg",
    desc: "Earthy and aromatic spice widely used in Indian cooking.",
    img: ["https://i.pinimg.com/1200x/20/84/a3/2084a3b2c2f46446d0440452329996f3.jpg",
      "https://i.pinimg.com/1200x/17/2f/eb/172feb01c25a42e566b82f0561e39f06.jpg",
      "https://i.pinimg.com/1200x/8d/73/b0/8d73b057211f4be30635a5e6b0b8572d.jpg",
    ]
  },
  {
    name: "Coriander",
    icon: "https://i.pinimg.com/736x/29/4a/58/294a586ed7b3a653db159faff268ab48.jpg",
    desc: "Mild citrus flavor, used in both whole and ground forms.",
    img: ["https://i.pinimg.com/736x/5f/40/41/5f40417a069e53ae0e7ee0ae8cf3cf48.jpg",
      "https://i.pinimg.com/1200x/a5/0c/5c/a50c5c75305265e8f66674b4a53fdbc2.jpg",
      "https://i.pinimg.com/736x/5c/b9/68/5cb96879aa7d28398309a14206bb8ba3.jpg",
    ]
  },
  {
    name: "Cardamom",
    icon: "https://i.pinimg.com/1200x/64/06/30/640630541e80b40d940be40b0f8ff410.jpg",
    desc: "Known as the 'Queen of Spices', cardamom has a sweet, floral aroma used in desserts, tea, and premium dishes.",
    img: ["https://i.pinimg.com/1200x/03/93/b9/0393b94827d2cb5318f7ca492bfb050c.jpg",
      "https://i.pinimg.com/1200x/1c/4f/f5/1c4ff5b655486cff1d38b89aeb2e940c.jpg",
      "https://i.pinimg.com/1200x/0b/9d/9d/0b9d9d0c6a17833926494d5a0b9ae737.jpg",
    ]
  },
  {
    name: "Black Pepper",
    desc: "Called the 'King of Spices', black pepper delivers sharp heat and is essential in global cuisines.",
    icon: "https://i.pinimg.com/1200x/24/51/7e/24517e958afd4a2c6dbfc6f9afb537f0.jpg",
    img: ["https://i.pinimg.com/1200x/0d/63/f5/0d63f55563df77cd41ff45e7bc8f673b.jpg",
      "https://i.pinimg.com/736x/30/72/cc/3072ccf2d818b5e861aeee6cab76f59f.jpg",
      "https://i.pinimg.com/1200x/1c/98/db/1c98dbb3c860456c405e4e4e351ca4a3.jpg",
    ]
  },
  {
    name: "Curry Leaves",
    desc: "Fresh and aromatic leaves widely used in South Indian cooking, known for their unique flavor and health benefits.",
    icon: "https://i.pinimg.com/1200x/70/8c/34/708c34edaf06de5c5c76f947492222cf.jpg",
    img: ["https://i.pinimg.com/1200x/b0/29/1c/b0291c388e13185ed7917040455cc159.jpg",
      "https://i.pinimg.com/1200x/e9/6e/4b/e96e4bf936db0b49330495d4a8707484.jpg",
      "https://i.pinimg.com/736x/75/22/72/752272b6026414bfce09189404ad9db1.jpg",
    ]
  },
  {
    name: "Cinnamon Stick",
    icon: "https://i.pinimg.com/736x/e4/b6/0a/e4b60aa3399a734f00ca206f17837034.jpg",
    desc: "Sweet and woody spice used in desserts, teas, and savory dishes, adding warmth and rich aroma.",
    img: ["https://i.pinimg.com/1200x/b9/c8/f7/b9c8f794f6f502003c6c12399681d05a.jpg",
      "https://i.pinimg.com/236x/04/2f/b6/042fb6a736d4ade40e9f48dc159d3dec.jpg",
      "https://i.pinimg.com/1200x/d5/a3/41/d5a3415276df6825e9d25f3f188ac105.jpg",
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
          <h3 style={{ marginBottom: "25px" }}> </h3>

          {/* GRID */}
          <div
            style={{
              maxWidth: "1600px",
              margin: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
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
        <h2 style={{ fontSize: "32px", marginBottom: "10px", color: "green" }}>

        </h2>

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
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                background: "#fff",
              }}
            >
              {/* 🎥 Video container */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 9",
                }}
              >
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
                    background: "rgba(0,0,0,0.3)",
                  }}
                />

                {/* 📝 Title on video */}
                <p
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    margin: 0,
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  {video.title}
                </p>
              </div>

              {/* 🟢 Button BELOW video */}
              <div style={{ padding: "12px", textAlign: "center" }}>
                <button
                  style={{
                    padding: "10px 18px",
                    borderRadius: "25px",
                    border: "none",
                    background: "green",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#0a7a0a";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "green";
                  }}
                >
                  Explore / About
                </button>
              </div>
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