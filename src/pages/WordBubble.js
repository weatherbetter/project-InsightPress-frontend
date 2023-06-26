import { useEffect} from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import axios from "axios";

function WordBubble(props) {

    useEffect(() => {
        let wordBubbleRoot = am5.Root.new("chartdiv");

        wordBubbleRoot.setThemes([am5themes_Animated.new(wordBubbleRoot)]);

        let data = props.wordData;

        // Create wrapper container
        let container = wordBubbleRoot.container.children.push(
            am5.Container.new(wordBubbleRoot, {
                width: am5.percent(100),
                height: am5.percent(100),
                layout: wordBubbleRoot.verticalLayout,
            })
        );

        // Create series
        // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
        let series = container.children.push(
            am5hierarchy.ForceDirected.new(wordBubbleRoot, {
                singleBranchOnly: false,
                downDepth: 2,
                topDepth: 1,
                initialDepth: 1,
                maxRadius: 60,
                minRadius: 20,
                valueField: "value",
                categoryField: "name",
                childDataField: "children",
                manyBodyStrength: -13,
                centerStrength: 0.8,
            })
        );

        series.get("colors").setAll({
            step: 1,
        });

        series.links.template.setAll({
            strokeWidth: 2,
        });

        series.nodes.template.setAll({
            tooltipText: null,
            cursorOverStyle: "pointer",
        });

        // handle clicking on nodes and link/unlink them
        series.nodes.template.events.on("click", function (e) {
            props.article.content_html = props.original_article.content_html;
            const pattern = new RegExp(e.target.dataItem.dataContext.name, "g");
            props.article.content_html = props.article.content_html.replace(
                pattern,
                `<span style=" background: linear-gradient(to top, #FFE400 50%, transparent 50%)">${e.target.dataItem.dataContext.name}</span>`
            );
            props.setArticle({ ...props.article });
            console.log(e.target.dataItem.dataContext.name);

            // console.log(
            //     `https://openapi.naver.com/v1/search/news.json?query=`
            // );
            // axios
            //     .get("/v1/search/news.json", {
            //         params: {
            //             query: `${e.target.dataItem.dataContext.name}`,
            //         },
            //         headers: {
            //             "X-Naver-Client-Id": "h4fmO6pmaYv_CYUs7H9f",
            //             "X-Naver-Client-Secret": "ctO_ocNN9Z",
            //         },
            //     })
            //     .then((response) => {
            //         console.log(response);
            //         console.log(JSON.parse(response.data));
            //         props.setKeywordNews(JSON.parse(response.data));
            //     })
            //     .catch((error) => {});
        });

        series.data.setAll([data]);
        series.set("selectedDataItem", series.dataItems[0]);

        // Make stuff animate on load
        series.appear(1000, 100);
        return () => wordBubbleRoot.dispose();
    }, [props]);

    return (
        <>
            <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>
        </>
    );
}

export default WordBubble;
