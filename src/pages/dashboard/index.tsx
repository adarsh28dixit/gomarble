import React, { useMemo } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import Stats from "../../components/dashboard/Stats";
import { IChartDatum, TTab } from "../../interfaces";
import Chart from '../../components/dashboard/Chart'

const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs()?.subtract(7, "days")?.startOf("day"),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().startOf("day"),
  },
];

export const Dashboard: React.FC = () => {
  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const { data: dailyOrders } = useList<IChartDatum>({
    resource: "dailyOrders",
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: "newCustomers",
    filters,
  });


  return (
    <>
      <div className="collapse collapse-arrow bg-zinc-50 border-2 rouded">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <Stats
            dailyRevenue={dailyRevenue}
            dailyOrders={dailyOrders}
            newCustomers={newCustomers}
          />
        </div>
        <div className="collapse-content">
          <Chart />
        </div>
      </div>

     
    </>
  );
};
