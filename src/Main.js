import Smileys from "./emojiList_mar8cs.json";
import Smiley from "./Smiley";
import { useState } from "react";

const Main = () => {
  const [data, setData] = useState(Smileys);

  const searchEl = (e) => {
    let newData = [];
    for (let i = 0; i < Smileys.length; i++) {
      if (Smileys[i].keywords.indexOf(e.target.value.toLowerCase()) !== -1) {
        newData.push(Smileys[i]);
      }
    }
    setData(newData);
  };

  return (
    <main>
      <form>
        <input
          type="text"
          name="search"
          placeholder="What emoji are you looking for ?"
          onChange={searchEl}
        />
      </form>
      <section className="smileys">
        {data.map((emoji, i) => {
          return <Smiley key={i} {...emoji} nbFound={data.length} />;
        })}
        {data.length === 0 && (
          <div style={{ textAlign: "center", width: "100%" }}>
            No smiley found
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;
