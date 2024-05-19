import React from "react";
import { ICardConfig } from "data/layout/ICardLayout";
import { Card, CardBody } from "@nextui-org/react";

interface OverviewMetricCardProps {
  data: Record<string, any>;
  config: ICardConfig;
}

export const OverviewMetricCard = ({
  data,
  config,
}: OverviewMetricCardProps) => {
  return (
    <Card shadow="none" className="w-full">
      <CardBody className="flex flex-row justify-around items-center">
        {config.keys.map((key: string) => {
          return (
            <div className="text-center">
              <h2>{key}</h2>
              <span className="text-2xl bold">{data[key]}</span>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};

export default OverviewMetricCard;
