import Smileys from "./emojiList_mar8cs.json";
import Smiley from "./Smiley";
import { useState } from "react";

const Main = () => {
  const [search, setSearch] = useState(false);
  const [countHide, setHideEl] = useState(0);

  return (
    <main>
      <form>
        <input
          type="text"
          name="search"
          placeholder="What emoji are you looking for ?"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <section className="smileys">
        {Smileys.map((emoji, i) => {
          return (
            <Smiley
              key={i}
              {...emoji}
              search={search}
              countHide={countHide}
              setHideEl={setHideEl}
              totalEl={Smileys.length}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Main;
