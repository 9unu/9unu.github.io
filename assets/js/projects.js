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
            title: '[Data Science Competition] Traffic congestion classification',
            // demo: false,
            technologies: ['Python'],
            description: "경기도 자율주행센터 데이터 활용 경진대회 - 도로별 교통 혼잡도 분류 [금상]",
            categories: ['featured','native'],
            pdf: 'assets/images/last_report.pdf' // Add the PDF link here
        },
        {
            image: 'assets/images/한국정보과학회.png',
            link: 'https://github.com/9unu/Short_form_video_watching_pattern_and_a_predictive_model',
            title: '[KSC] A Study of Short-Form Video Watching Patterns and a Predictive Model',
            // demo: false,
            technologies: ['Python'],
            description: "[한국정보과학회] Short-From 영상 시청 패턴 분석 및 영상 시청 여부 예측 연구 [장려상]",
            categories: ['featured','webdev'],
            pdf: 'assets/images/Short-Form 논문1.pdf' // Add the PDF link here
        },
        {
            image: 'assets/images/fat.png',
            link: 'https://github.com/9unu/3-1-project_Remaster',
            title: 'Fat Prediction Model (Normal, Overweight, Obesity)',
            // demo: false,
            technologies: ['Python'],
            description: "국민건강영양조사 데이터 기반 비만도 분류 머신러닝 모델 개발",
            categories: ['featured','security'],
        },        
        {
            image: 'assets/images/파이썬으로 시작하는 캐글.png',
            link: 'https://github.com/9unu/Kaggle_titanic',
            title: '[Kaggle] Titanic',
            // demo:  false,
            technologies: ['Python'],
            description: "\"파이썬으로 시작하는 캐글\" 필사 (Titanic 문제 풀이)",
            categories: ['diy']
        },
        {
            image: 'assets/images/housing-costs-story.png',
            link: 'https://github.com/9unu/Kaggle_BostonHousePrices',
            title: '[Kaggle] Boston House Price',
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
            description: "쿠팡의 닭가슴살 제품 가격과 관련된 여러 가지 가설 검정",
            categories: ['security']
        },
        {
            image: 'assets/images/html+css+javascript.png',
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
        
                        <p class="paragraph-text-normal">${project.description}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.pdf ? `<button class="pdf-button" onclick="window.open('${project.pdf}', '_blank')">PDF</button>` : ''}
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
