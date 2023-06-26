import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import WordBubble from "./WordBubble.js";
// import LineChart from "./LineChart.js";

function Article() {
    const [article, setArticle] = useState({
        category: 0,
        content:
            '<br/><br/>[주간유통]라면값까지 간섭하는 정부가격 통제 아닌 해외 사업 지원할 때<br/><br/><br/><br/>지난 18일 한 방송에 출연한 추경호 부총리 겸 기획재정부 장관의 라면 가격 인하 발언에 대한 관심이 뜨겁습니다. 라면 제조사들은 정부 눈치를 보기 시작했고, 주식 시장에선 라면회사 주가가 급락했습니다. 정부의 무리한 시장 개입이 자본 시장에 얼마나 큰 충격을 주는지 절실히 보여주는 사례죠.이날 방송에서 사회자는 라면회사가 가격 인상 이후 이익이 많이 늘어난 것을 지적하며 "가격을 지나치게 많이 인상한 거 아니냐라는 생각을 할 수밖에 없는데 이 부분에 대해서도 정부가 들여다보고 있냐"고 물었습니다.이에 추 부총리는 "밀 가격이 올랐고 그 다음에 인건비가 많이 올랐다. 이런 이유로 작년 9~10월에 라면값을 크게 올렸는데 사실은 그때 대비, 1년 전 대비 지금 약 50% 밀 가격이 내렸고 작년 말 대비로도 약 20% 정도 내렸다. 그것을 이유로 올렸으면 제조업체에서도 밀가루 가격으로 올랐던 부분에 관해선 다시 적정하게 가격을 좀 내리든지 해서 대응을 해 줬으면 하는 바람"이라고 답했습니다. 국내 1등 라면회사인 농심의 영업이익을 얼마나 늘었을까요. 최근 5년간의 영업이익 추이를 보면 △2018년 886억원 △2019년 788억원 △2020년 1603억원 △2021년 1061억원 △2022년 1122억원 등으로 들쭉날쭉합니다. 매출대비 영업이익의 비중을 볼수 있는 영업이익률은 △2018년 4% △2019년 3.4% △2020년 6.1% △2021년 4% △2022년 3.6% 등에 머뭅니다. 물론 올해 1분기 실적은 대폭 개선됐습니다. 지난 1분기 영업이익은 638억원으로 전년동기대비 86% 증가했습니다. 이 기간 영업이익률은 7.4%를 기록했죠. 지난해 가격 인상분이 반영된 결과죠. 그렇다고 간신히 영업이익률 5%를 넘기고 있는 라면회사에 가격 인하압박을 펼칠 정도는 아닙니다. 오뚜기, 삼양라면 등 다른 회사의 처지도 비슷합니다. 한 식품업계 관계자는 "한 치킨회사의 작년 영업이익률은 28%에 이른다"며 "왜 라면을 콕 짚는지 모르겠다"라고 토로했습니다.<br/><br/><br/><br/>무엇보다 올 1분기 농심의 국내외 성적을 보면 해외의 성장이 뚜렷합니다. 지난 1분기 농심은 미국에서 180억원의 영업이익을 거뒀습니다. 작년동기대비 6배 가까이 이익이 늘어났죠. 이 기간 미국의 영업이익률은 12%가 넘습니다. 지난 1분기 해외를 제외한 한국에서 번 영업이익은 386억원 수준입니다. 전체 이익의 40%는 해외에서 벌고 있는 것이죠. 올 1분기 농심의 이익 증가 원동력은 가격 인상보다 미국 성과가 더 큰 것입니다.농심은 작년 2분기 미국에서도 평균 9% 라면가격을 인상했습니다. 추 부총리의 논리대로라면 미국에서도 가격을 내려야 할까요? 추 부총리도 정부가 시장에 개입해선 안되는 것을 잘 알고 있습니다. 이날 방송에서 그는 "라면과 같은 품목들은 사실은 시장에서 업체와 소비자 간에 결정해 나가는 가격"이라며 "정부가 하나하나 개입을 해서 원가 조사를 하고 가격을 통제하고 이러는 것은 바람직하지 않다"고 말했죠. 가장 무서운 것은 추 부총리의 발언 이후 국내 전체 식품 기업이 정부의 눈치를 보고 있다는 점입니다. 김치, 라면, 만두 등 안방 시장에 머물러 있던 국내 식품이 해외에서 성적을 낼 때 찬물을 부은 격입니다. 오히려 해외 사업에 필요한 것이 없는지 정부가 나서 살펴볼 때죠. 미국에서 라면이 국내 시장만큼 성장한다면, 규모의 경제에 따라 국내 라면 가격 걱정은 오히려 사라지게 될 것입니다.[주간유통]은 한주간 유통·식음료 업계에서 있었던 주요 이슈들을 쉽고 재미있게 정리해 드리는 콘텐츠입니다. 뉴스 뒤에 숨겨져 있는 또 다른 사건들과 미처 기사로 풀어내지 못했던 다양한 이야기들을 여러분께 들려드릴 예정입니다.<br/><br/>',
        content_html:
            '<br/><br/>[주간유통]라면값까지 간섭하는 정부가격 통제 아닌 해외 사업 지원할 때<br/><br/><br/><br/>지난 18일 한 방송에 출연한 추경호 부총리 겸 기획재정부 장관의 라면 가격 인하 발언에 대한 관심이 뜨겁습니다. 라면 제조사들은 정부 눈치를 보기 시작했고, 주식 시장에선 라면회사 주가가 급락했습니다. 정부의 무리한 시장 개입이 자본 시장에 얼마나 큰 충격을 주는지 절실히 보여주는 사례죠.이날 방송에서 사회자는 라면회사가 가격 인상 이후 이익이 많이 늘어난 것을 지적하며 "가격을 지나치게 많이 인상한 거 아니냐라는 생각을 할 수밖에 없는데 이 부분에 대해서도 정부가 들여다보고 있냐"고 물었습니다.이에 추 부총리는 "밀 가격이 올랐고 그 다음에 인건비가 많이 올랐다. 이런 이유로 작년 9~10월에 라면값을 크게 올렸는데 사실은 그때 대비, 1년 전 대비 지금 약 50% 밀 가격이 내렸고 작년 말 대비로도 약 20% 정도 내렸다. 그것을 이유로 올렸으면 제조업체에서도 밀가루 가격으로 올랐던 부분에 관해선 다시 적정하게 가격을 좀 내리든지 해서 대응을 해 줬으면 하는 바람"이라고 답했습니다. 국내 1등 라면회사인 농심의 영업이익을 얼마나 늘었을까요. 최근 5년간의 영업이익 추이를 보면 △2018년 886억원 △2019년 788억원 △2020년 1603억원 △2021년 1061억원 △2022년 1122억원 등으로 들쭉날쭉합니다. 매출대비 영업이익의 비중을 볼수 있는 영업이익률은 △2018년 4% △2019년 3.4% △2020년 6.1% △2021년 4% △2022년 3.6% 등에 머뭅니다. 물론 올해 1분기 실적은 대폭 개선됐습니다. 지난 1분기 영업이익은 638억원으로 전년동기대비 86% 증가했습니다. 이 기간 영업이익률은 7.4%를 기록했죠. 지난해 가격 인상분이 반영된 결과죠. 그렇다고 간신히 영업이익률 5%를 넘기고 있는 라면회사에 가격 인하압박을 펼칠 정도는 아닙니다. 오뚜기, 삼양라면 등 다른 회사의 처지도 비슷합니다. 한 식품업계 관계자는 "한 치킨회사의 작년 영업이익률은 28%에 이른다"며 "왜 라면을 콕 짚는지 모르겠다"라고 토로했습니다.<br/><br/><br/><br/>무엇보다 올 1분기 농심의 국내외 성적을 보면 해외의 성장이 뚜렷합니다. 지난 1분기 농심은 미국에서 180억원의 영업이익을 거뒀습니다. 작년동기대비 6배 가까이 이익이 늘어났죠. 이 기간 미국의 영업이익률은 12%가 넘습니다. 지난 1분기 해외를 제외한 한국에서 번 영업이익은 386억원 수준입니다. 전체 이익의 40%는 해외에서 벌고 있는 것이죠. 올 1분기 농심의 이익 증가 원동력은 가격 인상보다 미국 성과가 더 큰 것입니다.농심은 작년 2분기 미국에서도 평균 9% 라면가격을 인상했습니다. 추 부총리의 논리대로라면 미국에서도 가격을 내려야 할까요? 추 부총리도 정부가 시장에 개입해선 안되는 것을 잘 알고 있습니다. 이날 방송에서 그는 "라면과 같은 품목들은 사실은 시장에서 업체와 소비자 간에 결정해 나가는 가격"이라며 "정부가 하나하나 개입을 해서 원가 조사를 하고 가격을 통제하고 이러는 것은 바람직하지 않다"고 말했죠. 가장 무서운 것은 추 부총리의 발언 이후 국내 전체 식품 기업이 정부의 눈치를 보고 있다는 점입니다. 김치, 라면, 만두 등 안방 시장에 머물러 있던 국내 식품이 해외에서 성적을 낼 때 찬물을 부은 격입니다. 오히려 해외 사업에 필요한 것이 없는지 정부가 나서 살펴볼 때죠. 미국에서 라면이 국내 시장만큼 성장한다면, 규모의 경제에 따라 국내 라면 가격 걱정은 오히려 사라지게 될 것입니다.[주간유통]은 한주간 유통·식음료 업계에서 있었던 주요 이슈들을 쉽고 재미있게 정리해 드리는 콘텐츠입니다. 뉴스 뒤에 숨겨져 있는 또 다른 사건들과 미처 기사로 풀어내지 못했던 다양한 이야기들을 여러분께 들려드릴 예정입니다.<br/><br/>',
        created_at: "2023-06-24",
        created_at_article: "2023-06-24",
        gpt_content: "test",
        id: 7,
        source_url:
            "https://n.news.naver.com/article/648/0000017345?cds=news_media_pc",
        title: "부총리님, 농심 미국 라면값도 내려야 하나요?",
    });
    const article_id = useParams().id;
    const article_category = useSelector((state) => {
        return state.article_category;
    });
    const [original_article, setOriginal_article] = useState({
        ...article,
    });
    const wordData = {
        value: 0,
        children: [
            { name: "가격", value: 16 },
            { name: "라면", value: 15 },
            { name: "이익", value: 15 },
            { name: "영업", value: 11 },
            { name: "정부", value: 8 },
            { name: "시장", value: 7 },
            { name: "해외", value: 6 },
            { name: "회사", value: 6 },
            { name: "대비", value: 6 },
            { name: "미국", value: 6 },
        ],
    };

    const [keywordNews, setKeywordNews] = useState([
        {
            title: "[추억의 문방구VS무인문구점]따스한 매력이냐 골라사는 재미냐",
            originallink:
                "https://www.ksilbo.co.kr/news/articleView.html?idxno=973284",
            link: "https://www.ksilbo.co.kr/news/articleView.html?idxno=973284",
            description:
                "울산의 명물이 된 &apos;물<b>라면</b>&apos;과 &apos;연필심 쫀드기&apos;도 저렴하게 팔고 있다. 홍씨는 &quot;학생 수가 적어지고, 준비물도... 문구뿐만 아니라 <b>라면</b> 등 식품도 있어 복잡해 보이지만, 온라인 쇼핑과 키오스크에 완벽히 적응한 세대답게... ",
            pubDate: "Mon, 26 Jun 2023 00:12:00 +0900",
        },
        {
            title: "<b>라면</b>값 잡는다고 물가 잡힐까[오늘과 내일/김유영]",
            originallink:
                "https://www.donga.com/news/Opinion/article/all/20230625/119933742/1",
            link: "https://n.news.naver.com/mnews/article/020/0003505577?sid=110",
            description:
                "<b>라면</b>값이 요새 화두다. 최근 정부가 <b>라면</b> 가격 인하를 압박하면서부터다. 경제부총리는 “(국제) 밀 가격이 1년 새 약 50% 내렸다. 제조업체도 가격을 좀 내리든지 했으면 하는 바람”이라고 했다. 여기에 국무총리까지... ",
            pubDate: "Sun, 25 Jun 2023 23:58:00 +0900",
        },
        {
            title: "오빠네 옛날떡볶이, 나눔으로 지역과 함께 합니다",
            originallink:
                "http://www.mygoyang.com/news/articleView.html?idxno=73837",
            link: "http://www.mygoyang.com/news/articleView.html?idxno=73837",
            description:
                "덕양구 화정동에 소재한 &apos;오빠네 옛날 떡볶이&apos;가 지난 6월 22일 드림스타트 아동을 위한 <b>라면</b> 100박스를 고양시에 후원했다. 이날 후원된 <b>라면</b>은 드림스타트 아동 가정에 전달될 예정이다. 화정동에 소재한 &apos;오빠네 옛날... ",
            pubDate: "Sun, 25 Jun 2023 23:46:00 +0900",
        },
        {
            title: "&apos;웃는사장&apos; 첫방, 진격의 강율·위기의 박나래 [종합]",
            originallink:
                "http://www.tvdaily.co.kr/read.php3?aid=16876921051677873019",
            link: "http://www.tvdaily.co.kr/read.php3?aid=16876921051677873019",
            description:
                "닭 <b>라면</b> 시판 상품을 출시해 1억개 판매고를 올린 경험이 있는 이경규, 여러 방송을 통해 홈파티와 요리 솜씨로 정평이 난 박나래, 14살부터 요리를 시작해 정통 코스를 밟아온 배우 강율은 정식 장사를 앞두고 요식업... ",
            pubDate: "Sun, 25 Jun 2023 23:40:00 +0900",
        },
        {
            title: "‘웃는 사장’ 박나래, 나래바 경력에도…“토할 것 같아”",
            originallink: "http://www.sportsworldi.com/newsView/20230625517163",
            link: "https://n.news.naver.com/mnews/article/396/0000648034?sid=106",
            description:
                "이경규 또한 “난 <b>라면</b> 1억 개 넘게 팔았다”며 자신감을 드러냈다. 이후 등장한 강율 또한 조리과학고등학교를 졸업했다고 밝히며 “전 맛내는 방법은 확실히 알고 있다”고 자신했다. 이경규는 앞에서는 모두에게 강한... ",
            pubDate: "Sun, 25 Jun 2023 23:17:00 +0900",
        },
        {
            title: "&apos;이생잘&apos; 안보현 &quot;왜 자꾸 누나가 생각나지&quot; 신혜선에 흔들려 [종합]",
            originallink:
                "http://www.topstarnews.net/news/articleView.html?idxno=15357898",
            link: "http://www.topstarnews.net/news/articleView.html?idxno=15357898",
            description:
                "반지음은 문서하에게 2차를 가자고 한 뒤 두 사람은 함께 <b>라면</b>을 먹는다. 반지음은 문서하가 웃는 것을 보며 &quot;요즘 저 보며 자주 웃는 거 아시죠&quot;라고 묻고 문서하는 자신이 웃는 것을 왜 신경 쓰냐 의아해한다. 반지음은... ",
            pubDate: "Sun, 25 Jun 2023 22:58:00 +0900",
        },
        {
            title: "울산 남구 새마을단체, 고래축제 먹거리장터 수익 나눔",
            originallink:
                "http://www.ujeil.com/news/articleView.html?idxno=329261",
            link: "http://www.ujeil.com/news/articleView.html?idxno=329261",
            description:
                "지난 23일 울산남구 새마을부녀회, 새마을문고 울산남구지부가 남구청 광장에서 2023년 울산고래축제 먹거리장터 운영 수익금으로 마련한 <b>라면</b> 140박스(220만원 상당)를 지역 취약계층을 위해 서동욱 남구청장에게... ",
            pubDate: "Sun, 25 Jun 2023 22:52:00 +0900",
        },
        {
            title: "&apos;마이리틀히어로-마지막회&apos; 임영웅, 65년형 페라리 타고 해안가 드라이브-경비...",
            originallink:
                "http://www.topstarnews.net/news/articleView.html?idxno=15357895",
            link: "http://www.topstarnews.net/news/articleView.html?idxno=15357895",
            description:
                "임영웅은 &quot;마쉬멜로우를 구워 먹으며 이렇게 되는구나 처음 먹어본다&quot;라고 했고 궤도에게 마쉬멜로우에 켑사이신 헬소스를 발라줬고 토마토 해장<b>라면</b>을 끓여 먹었고 궤도는 임영웅에게 별을 볼 수 있는 쌍안경을... ",
            pubDate: "Sun, 25 Jun 2023 22:52:00 +0900",
        },
        {
            title: "마스크·성금 물밀듯… 극한 재난상황 속?빛난 공동체 의식",
            originallink:
                "http://www.ujeil.com/news/articleView.html?idxno=329321",
            link: "http://www.ujeil.com/news/articleView.html?idxno=329321",
            description:
                "특별성금은 직접적인 현금 모금액과 마스크·생필품(쌀, <b>라면</b>, 식료품, 고기, 레토르식품)·소독약·방호복 등 의료지원품 등의 현물이다. 특별성금 모금을 담당한 울산사회복지공동모금회 김진한 과장은 &quot;나보다 더... ",
            pubDate: "Sun, 25 Jun 2023 22:52:00 +0900",
        },
        {
            title: "&apos;마이리틀히어로-마지막회&apos; 임영웅, 궤도와 사막에서 바비큐-마쉬멜로우 구이...",
            originallink:
                "http://www.topstarnews.net/news/articleView.html?idxno=15357890",
            link: "http://www.topstarnews.net/news/articleView.html?idxno=15357890",
            description:
                "또 임영웅은 &quot;마쉬멜로우를 구워 먹으며 이렇게 되는구나 처음 먹어본다&quot;라고 했고 궤도에게 마쉬멜로우에 켑사이신 헬소스를 발라줬고 토마토 해장<b>라면</b>을 끓여 먹었다. 궤도는 임영웅에게 별을 볼 수 있는... ",
            pubDate: "Sun, 25 Jun 2023 22:34:00 +0900",
        },
    ]);

    // useEffect(() => {
    //     axios
    //         .get(
    //             `${process.env.REACT_APP_BOARD_API_URL}/articles/${article_id}`
    //         )
    //         .then((response) => {
    //             setArticle(JSON.parse(response.data.body));
    //         })
    //         .catch((error) => {});
    // }, []);

    return (
        <>
            <section className="single-post-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 post-content">
                            {/* <!-- ======= Single Post Content ======= --> */}
                            <div className="single-post">
                                <div className="post-meta">
                                    <span className="date">
                                        {article_category[article.category]}
                                    </span>
                                    <span className="mx-1">•</span>
                                    <span>
                                        {article.created_at_article}
                                    </span>{" "}
                                    {article.request_id ? (
                                        <span className="badge text-bg-warning">
                                            User
                                        </span>
                                    ) : (
                                        <span className="badge text-bg-primary">
                                            InsightPress
                                        </span>
                                    )}
                                </div>
                                <h1 className="">{article.title}</h1>
                                <div
                                    className="alert alert-primary"
                                    role="alert"
                                >
                                    {article.gpt_content}
                                </div>
                                {/* Start news content*/}
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: article.content_html,
                                    }}
                                ></div>
                                {/* {article.content} */}
                                {/* End news content*/}
                            </div>
                            {/* <!-- End Single Post Content --> */}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <WordBubble
                            wordData={wordData}
                            setArticle={setArticle}
                            article={article}
                            original_article={original_article}
                            keywordNews={keywordNews}
                            setKeywordNews={setKeywordNews}
                        ></WordBubble>
                        {/* <LineChart></LineChart> */}
                    </div>
                    <div className="col-lg-6">
                        <h3 className="footer-heading">Recent Posts</h3>

                        <ul className="footer-links footer-blog-entry list-unstyled">
                            {keywordNews.map((keyNews, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            href={keyNews.link}
                                            className="d-flex align-items-center"
                                        >
                                            <div>
                                                <div className="post-meta d-block">
                                                    <span className="date">
                                                        Culture
                                                    </span>{" "}
                                                    <span className="mx-1">
                                                        •
                                                    </span>{" "}
                                                    <span>
                                                        {keyNews.pubDate}
                                                    </span>
                                                </div>
                                                <span>{keyNews.title}</span>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;
