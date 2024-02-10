import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "../App.css";

const Layout = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Report",
    onAfterPrint: () => alert("Print Success"),
  });

  return (
    <div
      className="border-2 border-black min-h-screen w-full"
      ref={componentRef}
    >
      <div className="row1 flex h-28 ">
        <div className="w-[40%]  border border-slate-400 flex flex-col justify-center items-center font-semibold  ">
          {" "}
          <h1>GR NUMBER</h1>
          <h1 className="mt-4">80023</h1>
        </div>
        <div className="w-[10%] border border-slate-400"></div>
        <div className="w-[10%] border border-slate-400"></div>
        <div className="w-[40%] border border-slate-400  flex flex-col justify-end items-end p-4">
          <h1>
            <span className="font-bold">Web:</span>www.avtc.in
          </h1>
          <h1>
            <span className="font-bold">Email:</span>info@avtc.in
          </h1>
        </div>
      </div>
      <div className="row2 flex h-12">
        <div className="w-[60%] border border-slate-400 flex flex-col items-center justify-center font-semibold">
          <h1>DATE</h1>
          <h1>8/2/2024</h1>
        </div>
        <div className="w-[40%] border border-slate-400 flex justify-start items-center bg-blue-200  ">
          <h1 className="  font-semibold ml-1">
            ISO 9001 2015 CERTIFIED COMPANY
          </h1>
        </div>
      </div>
      <div className="row3 flex h-12">
        <div className="w-[20%] border border-slate-400 flex  items-center justify-start font-semibold">
          <h1 className="ml-1">Name</h1>
        </div>
        <div className="w-[30%] border border-slate-400 flex flex-col justify-center items-center  ">
          <h1>Consignor</h1>
          <h1 className="font-semibold">AKKI RANJAN</h1>
        </div>
        <div className="w-[40%] border border-slate-400 flex items-center justify-start font-semibold bg-blue-200">
          <h1 className="ml-1">Consignor's Accnt Number</h1>
        </div>
        <div className="w-[10%] border border-slate-400 flex justify-center items-center ">
          <h1 className="">- -</h1>
        </div>
      </div>

      <div className="row4 flex h-12">
        <div className="w-[20%] border border-slate-400 flex  items-center justify-start font-semibold">
          <h1 className="ml-1">Address</h1>
        </div>
        <div className="w-[30%] border border-slate-400 flex justify-center items-center  ">
          <h1>Near Hdfc Bank,bellathur Road,Jamshedpur</h1>
        </div>
        <div className="w-[50%] ">
          <div className="flex h-[50%] ">
            <div className=" border border-slate-400 flex flex-col items-center justify-start font-semibold bg-blue-200 w-[90%]">
              <h1>Consignor's Ref/Protocol No.</h1>
            </div>
            <div className=" border border-slate-400 flex justify-center items-center w-[10%]">
              <h1 className="">- -</h1>
            </div>
          </div>

          <div className="flex border border-slate-400 h-[50%] ">
            <div className=" flex flex-col items-center justify-center font-semibold bg-blue-200 w-[90%]">
              <h1>Origin</h1>
            </div>
            <div className=" justify-center items-center w-[10%] flex border border-slate-400 "></div>
          </div>
        </div>
      </div>

      <div className="row5 flex h-12">
        <div className="w-[20%] border border-slate-400 flex  items-center justify-start font-semibold">
          <h1 className="ml-1">Contact No.</h1>
        </div>
        <div className="w-[30%] border border-slate-400 flex flex-col justify-center items-center  ">
          <h1>65776769</h1>
        </div>
        <div className="w-[40%] border border-slate-400 flex items-center justify-start font-semibold bg-blue-200">
          <h1 className="ml-1">Destination</h1>
        </div>
        <div className="w-[10%] border border-slate-400 flex justify-center items-center ">
          <h1 className="">Pune</h1>
        </div>
      </div>
      <div className="row6 flex h-12">
        <div className="w-[20%] border border-slate-400 flex  items-center justify-start font-semibold">
          <h1 className="ml-1">Name</h1>
        </div>
        <div className="w-[30%] border border-slate-400 flex flex-col justify-center items-center  ">
          <h1>Consigee</h1>
          <h1 className="font-semibold">MALA DEVI</h1>
        </div>
        <div className="w-[40%] border border-slate-400 flex items-center justify-start font-semibold bg-blue-200">
          <h1 className="ml-1">Number of Pcs</h1>
        </div>
        <div className="w-[10%] border border-slate-400 flex justify-center items-center "></div>
      </div>

      {/* four  */}
      <div className="row7 flex h-28">
        <div className="w-[20%] border border-slate-400 flex  items-center justify-start font-semibold">
          <h1 className="ml-1">Address</h1>
        </div>
        <div className="w-[30%] border border-slate-400 flex justify-center items-center  ">
          <h1>Near Hdfc Bank,bellathur Road,Jamshedpur</h1>
        </div>

        <div className="w-[50%] ">
          <div className="flex h-[20%] ">
            <div className=" border border-slate-400 flex flex-col items-center justify-start font-semibold bg-blue-200 w-[90%]">
              <h1>Consignor's Ref/Protocol No.</h1>
            </div>
            <div className=" border border-slate-400 flex justify-center items-center w-[10%]">
              <h1 className="">- -</h1>
            </div>
          </div>

          <div className="flex h-[20%] ">
            <div className=" border border-slate-400 flex flex-col items-center justify-start font-semibold bg-blue-200 w-[90%]">
              <h1>Consignor's Ref/Protocol No.</h1>
            </div>
            <div className=" border border-slate-400 flex justify-center items-center w-[10%]">
              <h1 className="">- -</h1>
            </div>
          </div>

          <div className="flex h-[20%] ">
            <div className=" border border-slate-400 flex flex-col items-center justify-start font-semibold bg-blue-200 w-[90%]">
              <h1>Consignor's Ref/Protocol No.</h1>
            </div>
            <div className=" border border-slate-400 flex justify-center items-center w-[10%]">
              <h1 className="">- -</h1>
            </div>
          </div>

          <div className="flex h-[20%] ">
            <div className=" border border-slate-400 flex flex-col items-center justify-start font-semibold bg-blue-200 w-[90%]">
              <h1>Consignor's Ref/Protocol No.</h1>
            </div>
            <div className=" border border-slate-400 flex justify-center items-center w-[10%]">
              <h1 className="">--</h1>
            </div>
          </div>

          <div className="flex border border-slate-400 h-[20%] ">
            <div className=" flex flex-col items-center justify-center font-semibold bg-blue-200 w-[90%]">
              <h1>Origin</h1>
            </div>
            <div className=" justify-center items-center w-[10%] flex border border-slate-400 "></div>
          </div>
        </div>
      </div>

      {/* end here */}

      <div className="row8 flex h-12">
        <div className="w-[20%] border border-slate-400 flex  items-center justify-start font-semibold">
          <h1 className="ml-1">Contact No.</h1>
        </div>
        <div className="w-[30%] border border-slate-400 flex flex-col justify-center items-center  ">
          <h1>Consigee</h1>
          <h1 className="font-semibold">MALA DEVI</h1>
        </div>
        <div className="w-[40%] border border-slate-400 flex items-center justify-start font-semibold bg-blue-200">
          <h1 className="ml-1">Number of Pcs</h1>
        </div>
        <div className="w-[10%] border border-slate-400 flex justify-center items-center "></div>
      </div>

      {/* --------------- */}
      <div className="row9 flex h-20">
        <div className="w-[50%] border border-slate-400 flex  items-center justify-start  font-semibold">
          <h1 className="ml-1">Content::</h1>
        </div>
        <div className="w-[50%] border border-slate-400 flex justify-start items-center bg-blue-200  ">
          <h1 className="  font-semibold ml-1">
            ISO 9001 2015 CERTIFIED COMPANY
          </h1>
        </div>
      </div>
      {/* ------------ */}
      <div className="row10 flex h-12">
        <div className="w-[20%] border border-slate-400 flex  items-center justify-start font-semibold">
          <h1 className="ml-1">Consignor's Signature.</h1>
        </div>
        <div className="w-[30%] border border-slate-400 flex flex-col justify-center items-center  ">
          <h1>65776769</h1>
        </div>
        <div className="w-[40%] border border-slate-400 flex items-center justify-start font-semibold bg-blue-200">
          <h1 className="ml-1">Destination</h1>
        </div>
        <div className="w-[10%] border border-slate-400 flex justify-center items-center ">
          <h1 className="">Pune</h1>
        </div>
      </div>

      {/* --------------- */}

      <div className="row11 flex h-12">
        <div className="w-[20%] border border-slate-400 flex  items-center justify-start font-semibold">
          <h1 className="ml-1">Pick up by</h1>
        </div>
        <div className="w-[30%] border border-slate-400 flex flex-col justify-center items-center  ">
          <h1>65776769</h1>
        </div>
        <div className="w-[40%] border border-slate-400 flex items-center justify-start font-semibold bg-blue-200">
          <h1 className="ml-1">Destination</h1>
        </div>
        <div className="w-[10%] border border-slate-400 flex justify-center items-center ">
          <h1 className="">Pune</h1>
        </div>
      </div>

      {/* -------------- */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button className="button-52" variant="success" onClick={handlePrint}>
          Print
        </button>
      </div>
    </div>
  );
};

export default Layout;
