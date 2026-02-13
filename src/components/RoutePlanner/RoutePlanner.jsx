// import { useState } from "react";
// import "./RoutePlanner.css";

// function RoutePlanner() {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [activeTab, setActiveTab] = useState("directions");

//   const handleSwap = () => {
//     setFrom(to);
//     setTo(from);
//   };

//   return (
//     <section className="planner-section">
//       <div className="planner-wrapper">

//         {/* Tabs */}
//         <div className="planner-tabs">
//           <button
//             className={activeTab === "directions" ? "active" : ""}
//             onClick={() => setActiveTab("directions")}
//           >
//             Direcciones
//           </button>

//           <button
//             className={activeTab === "lines" ? "active" : ""}
//             onClick={() => setActiveTab("lines")}
//           >
//             Líneas
//           </button>
//         </div>

//         {/* Card */}
//         <div className="planner-card">

//           <div className="planner-field">
//             <span className="label">Comenzar</span>
//             <input
//               type="text"
//               placeholder="Selecciona un punto de partida"
//               value={from}
//               onChange={(e) => setFrom(e.target.value)}
//             />
//           </div>

//           <button className="swap-btn" onClick={handleSwap}>
//             ⇄
//           </button>

//           <div className="planner-field">
//             <span className="label">Finalizar</span>
//             <input
//               type="text"
//               placeholder="Selecciona un destino"
//               value={to}
//               onChange={(e) => setTo(e.target.value)}
//             />
//           </div>

//           <button className="search-btn">
//             🔍
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default RoutePlanner;
