import { useState } from "react";

function App() {
  const [data, setData] = useState({
    amount: 0,
    rate: 0,
    term: 0,
  });
  function onChange(e: any) {
    setData({ ...data, [e.taget.name]: [e.taget.value] });
  }
  const calculateMortgage = (e: any) => {
    e.preventDefault();
    const i = data.rate / 100 / 12;
    const n = data.term * 12;
    const P = data.amount;

    //  let  M = (P * r) / ( 1 - 1 / Math.pow(( 1+ r),  n))
    let M = (P * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);
    setData({ ...data, mortgage: M, totalAmount: M * n, interest: M * n - P });
  };
  return (
    <main>
      <div className="flex flex-row w-full items-center justify-center">
        <form
          action=""
          className="w-full h-screen flex flex-col items-center justify-center gap-4 "
        >
          <div className="flex flex-row w-full items-center justify-center p-5 text-xl font-bold text-zinc-400">
            <h1>Mortgage Payment</h1>
          </div>
          <div className="w-full items-center justify-center flex flex-col ">
            <input
              type="text"
              name="name"
              min="0"
              placeholder="Loan-amount"
              required
              className=" w-[400px] h-[50px] pl-2 flex flex-col items-start justify-center bg-white text-black font-bold rounded-md border-2  border-zinc-300 shadow-sm "
            />
          </div>
          <div className=" ">
            <input
              type="text"
              name="name"
              min="0"
              placeholder="Loan-rate"
              required
              className=" w-[400px] h-[50px] pl-2 flex flex-col items-start justify-center bg-white text-black font-bold rounded-md border-2  border-zinc-300 shadow-sm "
            />
          </div>
          <div className=" ">
            <input
              type="text"
              name="name"
              min="0"
              placeholder="Loan-interest"
              required
              className=" w-[400px] h-[50px] pl-2 flex flex-col items-start justify-center bg-white text-black font-bold rounded-md border-2  border-zinc-300 shadow-sm "
            />
          </div>
          <div>
            <button className=" w-[200px] h-[50px] pl-2 flex flex-col items-center justify-center bg-zinc-400 text-white font-bold rounded-md border-2  border-zinc-500 shadow-sm ">
              Calculate
            </button>
          </div>
        </form>
        <div className="border-l-2 border-zinc-300 h-[400px] absolute l-[50%] ml-[-3px] p-20 items-center justify-center"></div>

        <div className="flex flex-col items-start justify-center w-full gap-4">
          <div className="flex flec-col max-w-sm p-5 w-full items-center justify-center  text-xl font-bold text-zinc-400">
            <h1>Mortgage Payment</h1>
          </div>
          <p className=" w-[400px] h-[50px] pl-2 flex flex-col items-start justify-center bg-white text-black font-bold rounded-md border-2  border-zinc-300 shadow-sm ">
            Total Amount
          </p>
          <p className=" w-[400px] h-[50px] pl-2 flex flex-col items-start justify-center bg-white text-black font-bold rounded-md border-2  border-zinc-300 shadow-sm ">
            Total Amount
          </p>
          <p className=" w-[400px] h-[50px] pl-2 flex flex-col items-start justify-center bg-white text-black font-bold rounded-md border-2  border-zinc-300 shadow-sm ">
            Total Amount
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
