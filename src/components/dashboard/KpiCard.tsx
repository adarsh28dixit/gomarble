import React from "react";

type TKpiCardProps = {
  title: string;
  data: any;
  icon?: JSX.Element;
  colors: {
    stroke: string;
    fill: string;
  };
  formatTotal?: (value: number | string) => typeof value;
};

export const KpiCard = ({
  title,
  data,
  icon,
  colors,
  formatTotal = (value) => value,
}: TKpiCardProps) => {
  const total = data?.data?.total;
  const trend = data?.data?.trend;
  const calc = Math.round((trend / total) * 100);
  const percent = total > trend ? ` ${calc}%` : `- ${calc}%`;
  const textColor = total > trend ? "seagreen" : "crimson";

  return (
    <div className="stat my-2 py-4 flex-1 rounded-2xl">
      <div className="flex justify-between">
      <div className="text-sm w-fit border-b border-dashed">{title}</div>
      {icon}
      </div>
      
      <div className="pt-2 text">
        {formatTotal(total ?? "...")}{" "}
        <span className="mx-1 text-xs">{percent}</span>
      </div>
    </div>
  );
};
