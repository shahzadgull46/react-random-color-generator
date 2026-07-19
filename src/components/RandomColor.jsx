import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [copied, setCopied] = useState(false);
const [textColor, setTextColor] = useState("white");
  const handleHexColor = () => {
    setTypeOfColor("hex");
  };
  const handleRgbColor = () => {
    setTypeOfColor("rgb");
  };
  const handleGenerateColor = () => {
    if (typeOfColor === "hex") {
      generateHexColor();
    } else {
      generateRgbColor();
    }
  };
  const handleCopyColor = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const generateHexColor = () => {
    let hexColor = "#";
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * 16);
      hexColor += hex[randomIndex];
    }
    setColor(hexColor);
  };
  const generateRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
    const brightness = (r + g +b )/3
    if (brightness > 128) {
        setTextColor("black")
    }
    else{
        setTextColor("white")
    }
  };
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center gap-6 text-white "
      style={{ backgroundColor: color }}
    >
      <h1 className="text-5xl font-bold drop-shadow-lg" style={{color: textColor}}>
        Random Color Generator
      </h1>
      <p className="font-bold text-white text-xl">
        Current Mode: {typeOfColor.toUpperCase()}
      </p>
      <h2 className="text-4xl font-bold " style={{color: textColor}}>{color} </h2>
      <div className="flex gap-4">
        <button
          onClick={handleHexColor}
          className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold shadow-lg hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Generate HEX Color
        </button>
        <button
          onClick={handleRgbColor}
          className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold shadow-lg hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Generate RGB Color
        </button>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleGenerateColor}
          className="px-8 py-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/40 text-white font-bold text-lg shadow-xl hover:bg-black/50 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Generate Random Color
        </button>
        <button
          onClick={handleCopyColor}
          className="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold shadow-lg hover:bg-sky-600 hover:scale-105 active:scale-95 transition-all duration-300"
        >
         {copied ? "✅ Copied!" : "📋 Copy Color"}
        </button>
      </div>
    </div>
  );
};
export default RandomColor;
