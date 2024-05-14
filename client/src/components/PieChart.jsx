import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const PieChart = ({ data, options, width, height, style }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data,
      options,
    });

    // Cleanup function to destroy the chart when the component unmounts or data changes
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, options]);

  return (
    <canvas
      ref={chartRef}
      width={width}
      height={height}
      style={{ maxWidth: "100%", maxHeight: "100%" }}
      class="pt-10 w-10 h-19"
    ></canvas>
  );
};

export default PieChart;
