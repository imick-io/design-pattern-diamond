import "./App.css";
// import { cn } from "./utils";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div
        style={{
          "--sqrt": "1.41421356237",
          "--hypotenuse": "96px",
          "--leg": "calc(var(--hypotenuse) / var(--sqrt))",
        }}
      >
        <section>
          <h2>Basic diamond pattern</h2>

          {[...Array(10)].map((_, idx) => (
            <div key={`layout-${idx}`} className="relative h-[var(--leg)]">
              {[...Array(10)].map((_, itemIdx) => (
                <div
                  key={`item-${itemIdx}`}
                  className="pointer-events-auto absolute top-0 z-10 aspect-square h-[calc(var(--hypotenuse))] origin-top-left rotate-45 transform-gpu overflow-hidden border border-neutral-500 bg-red-500"
                  style={{
                    left: `calc(var(--leg)*${
                      itemIdx * 2 + (idx % 2 === 0 ? 1 : 2)
                    })`,
                  }}
                />
              ))}
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
