import { ArcElement, Chart, Tooltip } from "chart.js";
import { useEffect, useRef } from "react";

function CardSoldDiagram() {
  Chart.register(ArcElement, Tooltip);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) return;
    const gradientOuter = ctx.createLinearGradient(0, 0, 0, 400);
    gradientOuter.addColorStop(0, "#6A00E0");
    gradientOuter.addColorStop(1, "#9B4DFF");

    const gradientInner = ctx.createLinearGradient(0, 0, 0, 400);
    gradientInner.addColorStop(0, "#00E011");
    gradientInner.addColorStop(1, "#A1FFB1");

    const data = {
      datasets: [
        {
          // Внешнее кольцо
          data: [10000, 4000],
          backgroundColor: [gradientOuter, "rgba(230,230,230,0.4)"],
          borderWidth: 0,
          cutout: "73%", // внутренняя граница кольца
          radius: "100%", // внешний радиус
          rotation:20,
          borderRadius: 50,
        },
        {
          // Внутреннее кольцо
          data: [7000, 3000],
          backgroundColor: [gradientInner, "rgba(230,230,230,1)"],
          borderWidth: 0,
          cutout: "70%", // внутренняя граница (ближе к центру)
          radius: "90%", // внешний радиус (уменьшен на те же 15%)
          borderRadius: 50,
        },
      ],
    };
    const chart = new Chart(ctx, {
      type: "doughnut",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        rotation: 0, // старт сверху
        circumference: 360,
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
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default CardSoldDiagram;
