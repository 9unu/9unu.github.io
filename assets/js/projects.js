$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/경기도.png',
            link: 'https://github.com/9unu/Gyeonggi-do-Self-Driving-Center-Data-Utilization-Competition',
            title: '[Data Utilization Competition] Traffic congestion classification by road',
            // demo: false,
            technologies: ['Python'],
            description: "경기도 자율주행센터 데이터 활용 경진대회 [금상] - 도로별 교통 혼잡도 분류",
            categories: ['featured','native'],
            pdf: 'assets/images/최종보고서.pdf' // Add the PDF link here

        },
        {
            image: 'assets/images/한국정보과학회.png',
            link: 'https://github.com/9unu/Short_form_video_watching_pattern_and_a_predictive_model',
            title: '[KSC] A study of Short-Form Video Watching Patterns and a Predictive Model',
            // demo: false,
            technologies: ['Python'],
            description: "[한국정보과학회] Short-From 영상 시청 패턴 분석 및 영상 시청 여부 예측 연구",
            categories: ['featured','webdev']
        },
        {
            image: 'assets/images/fat.jpg',
            link: 'https://github.com/9unu/3-1-project_Remaster',
            title: 'fat prediction model (Normal, Overweight, Obesity)',
            // demo: false,
            technologies: ['Python'],
            description: "국민건강영양조사 원시자료를 분석해 비만을 예측하는 머신러닝 모델 설계",
            categories: ['featured','security']
        },        
        {
            image: 'assets/images/파이썬으로 시작하는 캐글.jpg',
            link: 'https://github.com/9unu/Kaggle_titanic',
            title: '[kaggle] Titanic',
            // demo:  false,
            technologies: ['Python'],
            description: "\"파이썬으로 시작하는 캐글\" 필사 (Titanic 문제 풀이)",
            categories: ['diy']
        },
        {
            image: 'assets/images/housing-costs-story.jpg',
            link: 'https://github.com/9unu/Kaggle_BostonHousePrices',
            title: '[kaggle] Boston House Price',
            // demo: false,
            technologies: ['Python'],
            description: "캐글의 boston house price 예측 문제 풀이_XGBoost",
            categories: ['diy']
        },
        {
            image: 'assets/images/coupang.png',
            link: 'https://github.com/9unu/2-2-school-project',
            title: '[coupang] Hypothesis Testing of Chicken Breast Price',
            // demo: false,
            technologies: ['Python'],
            description: "쿠팡의 닭가슴살 제품 데이터를 수집해 가격과 관련된 여러 가지가설 검정",
            categories: ['security']
        },
        {
            image: 'assets/images/html+css+javascript.jpg',
            link: 'https://github.com/9unu/html-css-JavaScript',
            title: 'html+css+javascript study',
            // demo:  false,
            technologies: ['HTML', 'CSS', 'Jacascript'],
            description: "\"생활코딩! HTML+CSS+자바스크립트\" 필사 + 자체 시작페이지 제작",
            categories: ['diy']
        }
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ?
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`
                :''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''} ${project.pdf ? `<a href="${project.pdf}" target="_blank">PDF</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `;
}

let selected = (slug) => {
    render_projects(slug);
}