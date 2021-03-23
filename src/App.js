import "./styles.css";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="App">
      <Counter initialCount={10000000000000000} />
      <Counter initialCount={42} />
      <Counter initialCount={2} />
      <Counter initialCount={-10} />
    </div>
  );
}
