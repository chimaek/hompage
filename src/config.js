const config = {
    profile: {
        githubAccountId: "chimaek",
        profileImg: "images/pro2.jpg",
        email: "pipiru100@gmail.com",
        description: `Computer Vision 및 Android 분야에 관심있는 개발자 입니다. 주로 JAVA와 Python을 다루고 있습니다. 
                현재는 Computer Vision, 머신러닝에 관련된 기술을 공부하고 있습니다.`,
        github: "https://github.com/chimaek"
    },
    skills: [
        "Python",
        "Git",
        "Google Firebase",
        "OpenCV",
        "JAVA",
        "Android Studio",
        "Google Cloud Flatform",
        "Object Detection(Tensorflow)"
    ],
    careers: [{
        name: "Korea’s science and technology industry. Research Data Sharing Center",
        duration: "2019.06 ~ 2019.08",
        description: `한국과학기술정보연구원 연구데이터공유부서에서 인턴으로 IoT와 관련된 SW개발 업무를 맡았습니다.
                        
            1. Raspberry Pi에서 Deep Learning Module를 사용하여 차량 인식률 개선을 위한 인식 모델 테스트 및 MQTT를 활용하여 인식된 Data 전송
            2. Raspberry Pi에서 외부카메라, 기울기 센서, 삼각함수를 활용한 임의의 물체와의 거리 측정`
    }],
    presentations: [{
        name: "데이터 사이언스 캐글 밋업",
        duration: "2019.01 ~ 2019.03",
        description: `캐글 플랫폼의 데이터를 기반으로 머신러닝을 활용하여 예측하는 데이터 사이언스와 이를 데이터 사이언스에 관심있는 도민들에게 발표하는 자리를 가졌습니다.`,
        contribution: "캐글 데이터셋인 “House Sales in King Country”를 기반으로 Seaborn, Pandas를 통한 데이터 분석 및 전 처리단계를 거쳐 Scikit-learn의 SVM, Decision Tree, Linear Regression등 예측 기법을 통해 집 값 예측을 진행하였습니다.",
        skills: [
            "Python",
            "Seaborn",
            "Pandas",
            "Scikit-learn",
            "Google Colab"
        ],
        images: [
            "images/meetup/colab.jpg"
        ],
        etc: [
            "https://drive.google.com/file/d/1kCQSKjs6Koim6Y15HQoiNP06_ssg3iMz/view?usp=sharing",
            "https://drive.google.com/file/d/17TAwUogOu6wiZ6A_00rZrR60QEqS1haW/view?usp=sharing",
            "https://colab.research.google.com/drive/17wW74JJmCTAW1m-9BceiBpJeM5bNrt3n?usp=sharing"
        ]
    }],
    projects: [{
            name: "혼자완",
            duration: "2019.05. ~ 2019.12",
            description: `혼자 여행하는 이른바 "혼행족"을 위해 위급시 SOS알림, 근처 병원위치 정보를 제공하는 모바일 애플리케이션을 개발하였습니다. 
            
            교내 공학교육혁신센터의 "ICT기반 스마트관광 프로젝트"에서 프로젝트를 시작했습니다.
            
            2019 공학페스티벌 창업 아이디어 공모전 부문 우수상 수상
            교내 공학교육혁신센터 주관 2019 TBM 창업 캠프 장려상 수상
            공학교육혁신센터 주관 2019 창의융합 공학페스티벌 최우수상 수상
            제 34회 교내 컴퓨터공학과 전시회 기업체(Kakao)상 수상
            특허 상표 출원(4020190186548)-2019.12.02`,
            contribution: "개발팀장을 맡아 기획팀이 잠재적 서비스 대상자들에게 수집한 요구사항을 토대로 UI를 설계 구현하고 Google Map API를 사용하여 사용자 근처 병원위치 정보를 알려주는 기능을 Git Flow를 활용한 협업을 통해 개발했습니다.",
            skills: [
                "JAVA",
                "Google Map API",
                "Android",
                "Git Flow"
            ],
            images: [
                "images/honjawan/hon2.jpg",
                "images/honjawan/label.png"
            ],
            etc: []
        },
        {
            name: "Beerism",
            duration: "2019.04 ~ 2019.11",
            description: `모바일 카메라를 활용하여 실시간으로 맥주 인식과 알고리즘을 통해 추천 기능을 포함한 App입니다. 
            
            Google Cloud Platform의 AutoML을 활용해 맥주 인식 모델을 학습시켜 사용자가 실시간으로 모바일 카메라로 맥주를 찍어 Google Firebase DB에 존재하는 맥주와 일치하는 정보를 찾아 알려주는 기능과 사용자의 맥주 선호도를 수집하여 피어슨 상관계수를 활용해 맥주를 추천해 주는 기능을 탑재하고 있습니다.
            
            2019 2학기 전공동아리 결과발표회 장려상 수상작품입니다.`,
            contribution: "팀장을 맡아 팀원들에게 프로젝트의 전반적인 프로세스들을 알려주고, GCP AutoML을 이용한 인식 모델 제작 및 테스트하여 Android에 Embedding하는 과정을 진행하였습니다.",
            skills: [
                "Android(Java)",
                "Google Firebase(DB)",
                "Google Cloud Platform(AutoML)",
                "Git Flow"
            ],
            images: [
                "images/beerism/beer1.jpg",
                "images/beerism/beer2.jpg"
            ],
            etc: [
                "https://github.com/running-machine/beerism"
            ]
        },
        {
            name: "제비게이션",
            duration: "2019.03 ~ 2019.06",
            description: `교내 각 건물의 정보를 휴대폰 카메라를 통해 알 수 있는 실시간 건물 인식 애플리케이션을 만들어 사용자가 Computer Vision 기술을 경험해볼 수 있도록 하였습니다. 
            
            2019 1학기 교내 캡스톤디자인 결과발표회 대상 수상 작품입니다.`,
            contribution: "팀장을 맡아 인식모델을 제작하는 프로세스를 팀원에게 알려주었으며, 라벨링된 건물 이미지를 Tensorflow로 만들어진 여러 인식 모델을 기반으로 학습하고 비교하면서 Android에 Embedding하는 업무를 수행했습니다.",
            skills: [
                "Tensorflow",
                "Android",
                "Python",
                "Google Colab"
            ],
            images: [
                "images/Jevigation/jevi1.jpg",
                "images/Jevigation/jevi2.jpg"
            ],
            etc: [
                "https://play.google.com/store/apps/details?id=org.tensorflow.jevigation",
                "https://github.com/chimaek/Jevigation"
            ]
        },
        {
            name: "예제로 살펴보는 PyQt Tutorial",
            duration: "2019.07 ~ 현재",
            description: "인프런(https://www.inflearn.com/) 사이트에서 PyQt5 라이브러리를 통한 강의 제작을 하고 있습니다.",
            contribution: "소스 코드 작성 및 동영상 강의를 바울랩(http://www.paullab.co.kr/)과 공동으로 제작하고 있습니다.",
            skills: ["Python", "PyQt5", "Notion"],
            images: ["images/pyqt5/main.png"]
        }, {
            name: "떴다 떴다 비행기",
            duration: "2018.09 ~ 2018.12",
            description: "오픈소스 개발 방법론 수업에서 비행기 게임인 스트라이크1945를 모티브로 하여 pyGame라이브러리를 활용해 만든 게임입니다.",
            contribution: "Python 문법과 pyGame라이브러리의 활용법을 팀원들과 함께 배우며 팀장으로서 게임의 개발 프로세스를 단계적으로 만들어 팀원들에게 분배하여 개발을 진행했습니다.",
            skills: ["Python", "pyGame", "git"],
            images: ["images/opensource/ok2.jpg"],
            etc: ["https://github.com/chimaek/game_python"]
        }
    ]
}