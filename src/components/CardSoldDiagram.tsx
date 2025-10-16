import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function CardSoldDiagram() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) return;
    const gradientEarned = ctx.createLinearGradient(0, 0, 0, 400);
    gradientEarned.addColorStop(0, "#6A00E0");
    gradientEarned.addColorStop(1, "#9B4DFF");

    const gradientForecasted = ctx.createLinearGradient(0, 0, 0, 400);
    gradientForecasted.addColorStop(0, "#00E011");
    gradientForecasted.addColorStop(1, "#8DFF8A");
    const grey = "rgba(158,158,158,0.54)";

    const data = {
      datasets: [
        {
          data: [-10000, 6220],
          backgroundColor: [gradientEarned, grey],
          borderColor: [gradientEarned, grey],
          borderRadius: [50, 0],
          Highlight: 2,
          borderWidth: 1,
          spacing: 1,
        },
        {
          data: [7000, -6000],
          backgroundColor: [gradientForecasted, grey],
          borderColor: [gradientForecasted, grey],
          borderRadius: [50, 0],
          Highlight: 2,
          borderWidth: 1,
          spacing: 1,
        },
      ],
    };
    const chart = new Chart(ctx, {
      type: "doughnut",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    return () => chart.destroy();
  }, []);
  return (
    <div className="w-4/6 h-full">
      <canvas ref={chartRef}></canvas>;
    </div>
  );
}

export default CardSoldDiagram;
