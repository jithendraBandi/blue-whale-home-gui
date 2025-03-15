import Categories from "./Categories/Categories";
import "./styles.css";

const Home = () => {
  return (
    <section>
      <article className="flex-row-wrap">
        <Categories />
      </article>
    </section>
  );
};

export default Home;
