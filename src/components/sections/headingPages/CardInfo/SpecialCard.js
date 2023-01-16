import { Link } from "react-router-dom";
export default function SpecialCard(props) {
  return (
    <article className="menu-card">
      <img
        src={props.image}
        style={{ borderRadius: "10px 10px 0 0" }}
        alt="Special Menu"
      ></img>
      <section className="menu-card-content">
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <p style={{ margin: "15px 0 38px 0" }}>{props.description}</p>
        <Link className="special-button" to="/order">
          Add to cart
        </Link>
      </section>
    </article>
  );
}
