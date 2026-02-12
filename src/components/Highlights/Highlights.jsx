import {
  Clock,
  Wallet,
  CreditCard,
  Users,
} from "lucide-react";

import "./Highlights.css";

function Highlights() {
  const items = [
    {
      icon: Clock,
      title: "Entry and Exit Time",
      text:
        "Identify peak hours and the exact moment each user logs in and out of the system.",
    },
    {
      icon: Wallet,
      title: "Cash Balance",
      text:
        "Access your updated balance and improve payment and top-up management.",
    },
    {
      icon: CreditCard,
      title: "Card Status",
      text:
        "Monitor the status of each card at all times: active, disabled, or expired.",
    },
    {
      icon: Users,
      title: "Passengers per Wagon",
      text:
        "Find out the number of passengers per car in real time or historically.",
    },
  ];

  return (
    <section className="highlights">
      <p className="highlights-eyebrow">Your mobility, our priority</p>

      <h2 className="highlights-title">
        Plan your trip, <span>save time</span>
      </h2>

      <div className="highlights-grid">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="highlight-item" key={index}>
              <div className="highlight-icon">
                <Icon size={32} strokeWidth={2} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Highlights;