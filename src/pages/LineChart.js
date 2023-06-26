import { useEffect} from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import axios from "axios";
import * as am5xy from "@amcharts/amcharts5/xy";

function LineChart(props) {

    useEffect(() => {
        let root = am5.Root.new("line-chart");
root.setThemes([am5themes_Animated.new(root)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
let chart = root.container.children.push(
    am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
    })
);

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
let cursor = chart.set(
    "cursor",
    am5xy.XYCursor.new(root, {
        behavior: "none",
    })
);
cursor.lineY.set("visible", false);

// Generate random data
let date = new Date();
date.setHours(0, 0, 0, 0);
let value = 100;
let previousValue = value;
let downColor = root.interfaceColors.get("negative");
let upColor = root.interfaceColors.get("positive");
let color;
let previousColor;
let previousDataObj;

function generateData() {
    value = Math.round(Math.random() * 10 - 5 + value);
    am5.time.add(date, "day", 1);

    if (value >= previousValue) {
        color = upColor;
    } else {
        color = downColor;
    }
    previousValue = value;

    let dataObj = { date: date.getTime(), value: value, color: color }; // color will be used for tooltip background

    // only if changed
    if (color != previousColor) {
        if (!previousDataObj) {
            previousDataObj = dataObj;
        }
        previousDataObj.strokeSettings = { stroke: color };
    }

    previousDataObj = dataObj;
    previousColor = color;

    return dataObj;
}

function generateDatas(count) {
    let data = [];
    for (var i = 0; i < count; ++i) {
        data.push(generateData());
    }
    return data;
}

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
let xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
    })
);

let yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
    })
);

// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
let series = chart.series.push(
    am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
    })
);

series.strokes.template.set("templateField", "strokeSettings");

let tooltip = series.set(
    "tooltip",
    am5.Tooltip.new(root, {
        labelText: "{valueY}",
    })
);

// this is added in ored adapter to be triggered each time position changes
tooltip.on("pointTo", function () {
    let background = tooltip.get("background");
    background.set("fill", background.get("fill"));
});

// tooltip bacground takes color from data item
tooltip.get("background").adapters.add("fill", function (fill) {
    if (tooltip.dataItem) {
        return tooltip.dataItem.dataContext.color;
    }
    return fill;
});

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
let scrollbar = chart.set(
    "scrollbarX",
    am5xy.XYChartScrollbar.new(root, {
        orientation: "horizontal",
        height: 60,
    })
);

let sbDateAxis = scrollbar.chart.xAxes.push(
    am5xy.DateAxis.new(root, {
        baseInterval: {
            timeUnit: "day",
            count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
    })
);

let sbValueAxis = scrollbar.chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
    })
);

let sbSeries = scrollbar.chart.series.push(
    am5xy.LineSeries.new(root, {
        valueYField: "value",
        valueXField: "date",
        xAxis: sbDateAxis,
        yAxis: sbValueAxis,
    })
);

// Generate and set data
// let data = generateDatas(4);
let data = [
    {
        date: "20220101",
        value: 95,
        color: root.interfaceColors.get("negative"),
    },
    {
        date: "20220302",
        value: 93,
        color: root.interfaceColors.get("positive"),
    },
    {
        date: "20220603",
        value: 88,
        color: root.interfaceColors.get("negative"),
    },
];
series.data.setAll(data);
sbSeries.data.setAll(data);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
chart.appear(1000, 100);
   
        return () => root.dispose();
    }, []);

    return (
        <>
            <div id="line-chart" style={{ width: "100%", height: "300px" }}></div>
        </>
    );
}

export default LineChart;