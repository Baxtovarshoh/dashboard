import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function RevenueChart() {
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

    const labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"];

    const data = {
      labels,
      datasets: [
        {
          data: [20, 60, 40, 90, 50, 85, 40],
          borderColor: gradientEarned,
          borderWidth: 3,
          tension: 0.5,
          pointRadius: 0,
        },
        {
          data: [70, 40, 80, 30, 90, 40, 80],
          borderColor: gradientForecasted,
          borderWidth: 3,
          tension: 0.5,
          pointRadius: 0,
        },
      ],
    };

    const chart = new Chart(ctx, {
      type: "line",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "white",
            titleColor: "#444",
            bodyColor: "#6A00E0",
            borderColor: "#E0E0E0",
            borderWidth: 1,
            titleFont: { size: 10, weight: 600 },
            bodyFont: { size: 10, weight: "bold" },
            padding: 13,
            displayColors: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#A0A0A0",
              font: { size: 12 },
            },
          },
          y: {
            grid: { color: "#F0F0F0" },
            ticks: {
              color: "#A0A0A0",
              font: { size: 12 },
              callback: (value) => `${value}M`,
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={chartRef} className="w-full h-full" />;
}
