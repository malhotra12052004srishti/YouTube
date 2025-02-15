import { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  /** not like => ref = 0
   * ref = { current: 0 }
   *
   *
   * */

  console.log("Rendering....");

  const i = useRef(null);
  // let i = {
  //   current: null,
  // };
  useEffect(() => {
    if (i.current) return;
    i.current = setInterval(() => {
      //console.log("Namaste React", Math.random());
    }, 1000);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button
        className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg cursor-pointer"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Printing
      </button>
    </div>
  );
};
export default Demo2;

/**
 *
 * When we are using "let" variable at that time it is increasing the value in the console but it is not rendering the page as there is no way to update the UX.
 *
 * When we are using "const" variable then it is showing the error that you are using the const variable.
 * const x=10;
 *
 * Now if we want to update the UX along with the console you can use useState hook.
 *
 * x is getting updated behind the scenes but not getting rendered and y is being updated as well as rendered on the screen.
 * Whenever the component re-renders it refreshes my let variable and it comes back to the same state itself.
 * After every re-render the value x comes back to the original 0.
 * 
 * Now for the ref we will understand that when we are updating the value of the ref it will not update the value in the UX but behind the scenes it is updating the console and it is storing the value of the variable in the console itself and after that when we updating the state and re-rendering the component the value of the ref gets updated in the UX also.
 * 
 */
