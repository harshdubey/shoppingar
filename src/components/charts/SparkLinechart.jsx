import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLinechart = ({
  currentColor,
  type,
  id,
  height,
  width,
  data,
  color,
}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      dataSource={data}
      xName='x'
      yName='yval'
      valueType="Numeric"
      fill={color}
      type={type}
      markerSettings={{
        visible: ["All"],
        size: 4
      }}
      tooltipSettings={
        {
          visible: true,
          trackLineSettings:{
            visible: true
          }
        }
      }
    >
      <Inject servcies={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLinechart;
