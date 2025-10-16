import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function CardBar() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) return;

    const gradientEarned = ctx.createLinearGradient(0, 0, 0, 400);
    gradientEarned.addColorStop(0, "#6A00E2");
    gradientEarned.addColorStop(1, "#9B4DFF");

    const labels = ["M", "T", "W", "Th", "F", "S"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Vendor",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: gradientEarned,
          borderRadius:50,
          barPercentage: 0.6,  
          borderWidth: 1,
        },
      ],
    };
    const chart = new Chart(ctx, {
      type: "bar",
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
    <div className="w-full h-full flex">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default CardBar;
