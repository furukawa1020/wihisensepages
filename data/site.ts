export type Locale = "ja" | "en";

export const SITE_URL =
  (
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    process.env.DEPLOY_PRIME_URL ??
    "http://localhost:3000"
  ).replace(/\/$/, "");

export const externalLinks = {
  instagram:
    "https://www.instagram.com/ku_withsense?igsh=MWFyb2gwcTRrYm5jZg==",
  announcementGroup:
    "https://line.me/ti/g2/3MX_EJ1OpOtFxeUEQe_uLj8X70_6tluQdsUYWA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
  applicationForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSetYAaiVa0imZCpyzDW37vX7-LdXRK-XuDbbLshLxjMtidi8Q/viewform",
  sensoryRoom: "https://library.kanazawa-u.ac.jp/?p=48414",
  graduationCeremony: "https://www.kanazawa-u.ac.jp/event/174670/",
  entranceCeremony: "https://www.kanazawa-u.ac.jp/event/177631/",
  kanazawaChallenge:
    "https://www4.city.kanazawa.lg.jp/soshikikarasagasu/shiminkyodosuishinka/gyomuannai/3/3/2/28714.html",
  email: "mailto:ku.withsense@gmail.com",
} as const;

export const siteContent = {
  ja: {
    skip: "本文へ移動",
    navLabel: "サイト内ナビゲーション",
    menuOpen: "メニューを開く",
    menuClose: "メニューを閉じる",
    nav: [
      ["私たちについて", "#about"],
      ["3つの活動", "#activities"],
      ["プロジェクト", "#projects"],
      ["活動実績", "#reports"],
      ["参加する", "#join"],
      ["お問い合わせ", "#contact"],
    ],
    language: {
      label: "言語を選ぶ",
      current: "日本語",
      other: "English",
      otherHref: "/en",
    },
    hero: {
      lead: "「感覚の多様性」をキーワードに、感覚にやさしい大学・社会をつくる。",
      body: "金沢大学の学生を中心に、多様な感覚特性が尊重され、誰もが安心して過ごせる環境とつながりを育てています。",
      primary: "3つの活動を見る",
      secondary: "参加・連携について",
      logoAlt: "With Senseのロゴ",
      metricsLabel: "With Senseの団体概要",
      metrics: [
        ["2024年7月", "設立"],
        ["5人", "コアメンバー（2026年8月時点）"],
        ["3つ", "活動の柱"],
        ["4回", "Sensory Book Lounge開催"],
      ],
    },
    about: {
      title: "私たちについて",
      visionLabel: "活動ビジョン・パーパス",
      vision:
        "全ての人の感覚が尊重され、どんな感覚特性を持っていても安心して過ごせる大学・社会をつくる",
      paragraphs: [
        "With Senseは2024年7月に設立しました。現在は金沢大学の学生5人をコアメンバーとして活動しています。",
        "「感覚の多様性」をキーワードに、啓発・発信、感覚にやさしい空間・式典づくり、感覚にやさしいコミュニティづくりの3つを軸に取り組んでいます。",
      ],
    },
    diversity: {
      title: "感覚の多様性とは？",
      lead:
        "同じ音や匂いでも、心地良く感じる人、強すぎてつらく感じる人、弱すぎて分かりにくい人がいます。",
      paragraphs: [
        "私たちの世界は、脳・神経の複雑な働きや、五感をはじめとする様々な感覚の組み合わせによって形づくられています。外部からの刺激をどう受け取り、脳・神経・感覚器がどう処理するかには個人差があります。",
        "一人の中でも、痛みには敏感でも匂いには鈍感というように、感覚ごとに感じ方は異なります。体調、年齢、環境、状況によっても感じ方は揺らぎます。刺激がつらいことも、刺激を感じにくく周囲とのずれを覚えることも、誰にでも起こり得ます。",
        "全ての感覚はオリジナルで、個人差と揺らぎがあります。With Senseはその違いをグラデーションとして捉え、多様な感覚特性が尊重される社会を目指しています。",
      ],
      examplesLabel: "感覚の違いが現れる例",
      examples: [
        "照明がまぶしすぎる",
        "大きな音や人の多い場所で緊張する",
        "香水や食べ物の匂いで気分が悪くなる",
        "服のタグや素材がチクチクする",
      ],
      figures: [
        [
          "/assets/ppt/sense-diversity.png",
          "特殊感覚、体性感覚、内臓感覚など、私たちが持つ感覚の種類を示した図",
          "私たちの中にある、いろいろな感覚",
        ],
        [
          "/assets/ppt/sensory-traits.png",
          "感覚過敏と感覚鈍麻を含む、多様な感覚特性の例を示した図",
          "感じ方には個人差と揺らぎがあります",
        ],
      ],
    },
    activities: {
      title: "With Senseの3つの活動",
      lead: "知ること。安心できる環境をつくること。つながれる場を育てること。",
      items: [
        [
          "01",
          "感覚の多様性に関する啓発・発信",
          "感覚にやさしい社会の第一歩は、感覚の多様性への認知と理解を広げることだと考えています。楽しく学び、考えられるイベントやSNSでの発信を定期的に行っています。",
        ],
        [
          "02",
          "感覚にやさしい空間・式典づくり",
          "感覚刺激による疲れやストレスを感じやすい人が安心して過ごせる場所や時間を、金沢大学の教職員や、まちなかの施設・店舗と協働してつくっています。",
        ],
        [
          "03",
          "感覚にやさしいコミュニティづくり",
          "多様な感覚特性を持つ人の孤独感・孤立感を軽減するため、安心して話し、困りごとや工夫を共有できる心理的な居場所をつくっています。",
        ],
      ],
      note:
        "多様な感覚特性を持つ人が、常に困っているわけではありません。自分に合った工夫や安心できる環境があれば、支障なく過ごせることも多くあります。",
    },
    projects: {
      title: "感覚にやさしい空間・式典づくり",
      lead:
        "一人の声を起点に、学生、教職員、学内組織、地域の施設や店舗と協働し、実際の環境を変えています。",
      room: {
        date: "2025年1月",
        title: "金大センサリープロジェクト",
        label:
          "金沢大学内にセンサリールーム（感覚刺激を抑えた空間）をつくる学生・教職員協働プロジェクト",
        paragraphs: [
          "教室の照明やスクリーンの強い光、食堂の匂い、人の多さや距離の近さなど、大学生活には避けにくい刺激があります。感覚刺激によるストレスを感じやすい人にとって、安心して休める場所が少ないことは、学修や人間関係にも影響します。",
          "「安心して休んだり自習したりできる居場所がほしい」という一人の学生の声から活動が始まり、学内組織との連携やニーズ調査を経て、自然科学系図書館 研究個室1のセンサリールーム対応が実現しました。遮光カーテン、カーペットの床、色と明るさを調整できるライトを備えています。",
        ],
        link: "自然科学系図書館のお知らせを見る",
        imageAlt: "自然科学系図書館のセンサリールーム対応個室",
      },
      ceremony: {
        date: "2026年",
        title: "式典センサリープロジェクト",
        label:
          "金沢大学の式典に感覚にやさしい工夫を取り入れる学生・職員協働プロジェクト",
        paragraphs: [
          "入学式や卒業式など刺激の多い場でも、疲れやストレス、不安を感じやすい人が安心して参加できる空間と、多様な学生の参加機会を保障する式典設計に取り組んでいます。",
          "当事者へのヒアリングをもとに、令和7年度学位記・修了証書授与式と令和8年度入学宣誓式で、インクルーシブ席（優先席）とカームダウンスペースを大学と協働して設置しました。",
          "「参加したい」と思う人が、体調に配慮しながらより安心して参加できる式典を、社会のスタンダードにすることを目指しています。",
        ],
        cases: [
          [
            "01",
            "インクルーシブ席（優先席）",
            "座席の間隔を広く取り、会場外へ移動しやすく、人目も気になりにくい場所に設けました。",
          ],
          [
            "02",
            "カームダウンスペース",
            "刺激から離れて気持ちや体調を落ち着かせられる部屋を整備し、イヤーマフやセンサリートイも貸し出しました。",
          ],
        ],
        linksLabel: "金沢大学の公式案内",
        graduationLink: "令和7年度 学位記・修了証書授与式",
        entranceLink: "令和8年度 入学宣誓式",
        priorityAlt: "式典会場に設置したインクルーシブ席",
        hallAlt: "インクルーシブ席がある式典会場",
        signAlt: "インクルーシブ席の案内表示",
        calmAlt: "式典会場に設けたカームダウンスペースの様子と配置",
      },
    },
    lounge: {
      title: "Sensory Book Lounge",
      lead:
        "感覚にやさしい空間・時間と、感覚の多様性に関する書籍を組み合わせた、まちなかの居場所づくりです。",
      paragraphs: [
        "感覚特性にとらわれず、誰もが安心して滞在・交流できる「居場所の選択肢」を増やすプロジェクトです。2025年6月、金沢市の令和7年度協働のまちづくりチャレンジ事業に採択されました。",
        "2025年8月から12月に、金沢市や市内施設・店舗との協働で4回開催しました。現在も、取り組みに共感し、一緒に実施してくださる施設や店舗を募集しています。",
      ],
      cityLink: "金沢市の採択事業ページを見る",
      activities: [
        [
          "01",
          "感覚にやさしい空間・時間",
          "照明、音、人との距離などに配慮し、読書、作業、休憩、カームダウン、交流から自分に合う過ごし方を選べます。",
        ],
        [
          "02",
          "感覚の多様性を学べる書籍・企画",
          "関連書籍に加え、ミニ講座、センサリーアイテムの展示、センサリートイ制作など、知るきっかけを用意します。",
        ],
      ],
      reportsLabel: "Sensory Book Loungeの開催実績",
      reports: [
        [
          "2025.08.19",
          "Community & Library コトノハ",
          "金沢市石引",
          "/assets/ppt/lounge-kotonoha.png",
        ],
        [
          "2025.09.20",
          "金沢学生のまち市民交流館",
          "金沢市片町",
          "/assets/ppt/lounge-machinaka.png",
        ],
        [
          "2025.11.01-02",
          "金大祭2025",
          "金沢大学角間キャンパス",
          "/assets/ppt/lounge-kinda-festival.jpg",
        ],
        [
          "2025.12.21",
          "石川県立図書館",
          "石川県金沢市",
          "/assets/ppt/lounge-library.png",
        ],
      ],
      galleryAlts: [
        "Community & Library コトノハで開催したSensory Book Lounge",
        "刺激を抑えた静かな読書スペース",
        "照明を落としたセンサリースペース",
      ],
      guide: {
        title: "Sensory Book Lounge ガイドライン",
        status: "電子版を公開しています",
        body: "感覚の多様性の概要と、特別な設備や専門知識がなくても始められる空間づくりを、全28ページにまとめています。",
        contact: "施設・店舗での実施について相談する",
      },
    },
    reports: {
      title: "活動実績",
      lead:
        "感覚の多様性を知り、体験し、安心して言葉を交わせる機会を、大学とまちなかでつくってきました。",
      awarenessTitle: "啓発・発信イベント",
      communityTitle: "交流イベント",
      awareness: [
        ["2024.10.17", "感覚の多様性を知る会", "金沢大学・地域創造カフェイベント"],
        ["2024.11.02-03", "お疲れのあなたへ ～感覚にやさしいリフレッシュ～", "金大祭2024"],
        ["2025.01.24", "あなたと私の感覚の世界", "金沢大学・バリアフリーワークショップ協力"],
        ["2025.04.25", "五感でリフレッシュ！センサリートイdeゆるっと交流会", "金沢大学"],
        ["2025.07.02・04", "静かふぇ", "金沢大学・e-swapコラボイベント"],
        ["2025.10.05", "KANAZAWA PRIDE PARADE 2025", "展示ブース出展"],
      ],
      community: [
        ["2025.03.25", "先輩当事者に聞いてみよう！触覚過敏や発達特性による困りごと", "オンライン・fukufuku312コラボイベント"],
        ["2025.04.25", "五感でリフレッシュ！センサリートイdeゆるっと交流会", "金沢大学"],
        ["2025.07.02・04", "服と感覚のトークルーム", "静かふぇ内企画・e-swapコラボイベント"],
      ],
      photoAlts: [
        "With Senseのイベント会場に描かれた黒板",
        "イベントで使用したセンサリートイ",
        "感覚の多様性に関する展示",
      ],
    },
    join: {
      title: "新メンバー・ボランティア募集中",
      lead: "理念に共感し、一緒に団体や活動をつくっていける方を募集しています。",
      paragraphs: [
        "在籍しているからといって、全ての活動に参加する必要はありません。体調や状況に合わせ、プロジェクト、イベント、タスク単位で柔軟に関われます。オンラインでの参加も可能です。",
        "まずはお知らせグループへの参加だけでも大丈夫です。活動を知ってから、自分に合う関わり方を選べます。",
      ],
      optionsTitle: "関わり方の例",
      options: [
        ["コアメンバー", "企画や運営の中心として関わる"],
        ["サポートメンバー", "得意を活かして部分的に参加する"],
        ["スポット参加", "イベントやプロジェクト単位で参加する"],
        ["お知らせグループ", "まずは情報を受け取る"],
      ],
      flowTitle: "参加までの基本的な流れ",
      steps: [
        ["01", "お知らせグループに参加", "イベントや活動参加の情報を受け取ります。"],
        ["02", "応募フォームを送信", "興味や希望する関わり方を入力します。"],
        ["03", "カジュアル面談", "対面またはオンラインで30分ほどお話しします。"],
      ],
      groupLink: "お知らせグループに参加する",
      formLink: "新メンバー応募フォームへ",
    },
    contact: {
      title: "お問い合わせ",
      lead:
        "イベント参加、取材、施設・店舗でのSensory Book Lounge、授業や団体との協働について、お気軽にご連絡ください。",
      instagram: ["Instagram", "最新情報・イベント案内"],
      email: ["メール", "ku.withsense@gmail.com"],
      collaboration: ["連携・協働の相談", "施設・店舗・授業・団体の方へ"],
    },
    footer: "感覚が尊重され、安心して過ごせる大学・社会を目指して。",
  },
  en: {
    skip: "Skip to main content",
    navLabel: "Site navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    nav: [
      ["About", "#about"],
      ["What we do", "#activities"],
      ["Projects", "#projects"],
      ["Track record", "#reports"],
      ["Get involved", "#join"],
      ["Contact", "#contact"],
    ],
    language: {
      label: "Choose language",
      current: "English",
      other: "日本語",
      otherHref: "/",
    },
    hero: {
      lead: "Building a university and society that are kinder to diverse sensory experiences.",
      body: "Led by students at Kanazawa University, we foster environments and relationships where diverse sensory traits are respected and everyone can feel at ease.",
      primary: "Explore our work",
      secondary: "Get involved",
      logoAlt: "With Sense logo",
      metricsLabel: "With Sense at a glance",
      metrics: [
        ["July 2024", "Founded"],
        ["5", "Core members as of August 2026"],
        ["3", "Areas of activity"],
        ["4", "Sensory Book Lounges held"],
      ],
    },
    about: {
      title: "About With Sense",
      visionLabel: "Our vision and purpose",
      vision:
        "A university and society where every person's sensory experience is respected and people can feel safe, whatever their sensory traits.",
      paragraphs: [
        "With Sense was founded in July 2024. As of August 2026, our core team consists of five Kanazawa University students.",
        "We work around three themes: awareness and communication about sensory diversity, sensory-friendly spaces and ceremonies, and sensory-friendly communities.",
      ],
    },
    diversity: {
      title: "What is sensory diversity?",
      lead:
        "The same sound or smell can feel pleasant to one person, overwhelming to another, and too faint for someone else to notice.",
      paragraphs: [
        "Our experience of the world is shaped by complex processes in the brain and nervous system and by combinations of many senses, including the five commonly known senses. People differ in how they receive external stimuli and how the brain, nerves, and sensory organs process that information.",
        "Sensitivity also varies from one sense to another within the same person. Someone may be sensitive to pain but less responsive to smell. Health, age, environment, and circumstances can change how stimulation feels, so sensory mismatch can happen to anyone.",
        "Every sensory experience is individual and can fluctuate. With Sense sees these differences as a spectrum and works toward a society that respects diverse sensory traits.",
      ],
      examplesLabel: "Examples of sensory differences",
      examples: [
        "Lighting feels painfully bright",
        "Loud or crowded places cause tension",
        "Perfume or food smells cause nausea",
        "Clothing tags or materials feel irritating",
      ],
      figures: [
        [
          "/assets/ppt/sense-diversity.png",
          "Japanese diagram showing several kinds of sensation, including special, somatic, and visceral senses",
          "The many senses within us (diagram in Japanese)",
        ],
        [
          "/assets/ppt/sensory-traits.png",
          "Japanese diagram showing examples of sensory hypersensitivity and hyposensitivity",
          "Sensory experience differs and fluctuates (diagram in Japanese)",
        ],
      ],
    },
    activities: {
      title: "Our three areas of activity",
      lead: "Growing awareness, creating supportive settings, and nurturing places to connect.",
      items: [
        [
          "01",
          "Awareness and communication",
          "We see public recognition and understanding of sensory diversity as the first step toward a more sensory-friendly society. We run events and share information on social media so people can learn and reflect in approachable ways.",
        ],
        [
          "02",
          "Sensory-friendly spaces and ceremonies",
          "Together with Kanazawa University staff and local venues, we create places and times where people who tire easily from sensory stimulation can feel more at ease.",
        ],
        [
          "03",
          "Sensory-friendly communities",
          "We create social and emotional spaces where people with diverse sensory traits can talk safely and share challenges and practical strategies, helping reduce isolation and loneliness.",
        ],
      ],
      note:
        "People with diverse sensory traits are not always in difficulty. In a suitable environment, or with strategies that work for them, many people can take part without significant barriers.",
    },
    projects: {
      title: "Sensory-friendly spaces and ceremonies",
      lead:
        "Starting from individual voices, students, staff, university units, and local venues work together to change real environments.",
      room: {
        date: "January 2025",
        title: "Kanazawa University Sensory Project",
        label:
          "A student-staff project to establish sensory rooms with reduced stimulation on campus",
        paragraphs: [
          "Strong classroom lights and screens, mixed smells in dining halls, crowds, and close interpersonal distance can be difficult to avoid at university. When there are few places to rest, sensory stress can affect study and social participation.",
          "The project began with one student's request for somewhere to rest or study safely. Following collaboration and a campus needs survey, Research Room 1 in the Natural Science and Technology Library became sensory-room compatible. It has blackout curtains, carpeted flooring, and a light whose colour and brightness can be adjusted.",
        ],
        link: "Read the library announcement (Japanese)",
        imageAlt: "Sensory-room compatible research room at the Natural Science and Technology Library",
      },
      ceremony: {
        date: "2026",
        title: "Sensory-Friendly Ceremony Project",
        label:
          "A student-staff project bringing sensory-friendly provisions to Kanazawa University ceremonies",
        paragraphs: [
          "Entrance and graduation ceremonies can involve intense stimulation. We work on settings that help people who experience fatigue, stress, or anxiety participate more comfortably, while protecting opportunities for a wider range of students to attend.",
          "Based on interviews with students, Kanazawa University introduced inclusive seating and a calm-down space at the 2025 academic degree conferment ceremony and the 2026 entrance ceremony.",
          "Our aim is for ceremonies that respect health needs and make participation feel genuinely possible to become standard practice.",
        ],
        cases: [
          [
            "01",
            "Inclusive seating",
            "Seats were spaced farther apart and placed where leaving the hall was easier and attention from others was less likely.",
          ],
          [
            "02",
            "Calm-down space",
            "A room offered relief from stimulation, with earmuffs and sensory toys available to borrow.",
          ],
        ],
        linksLabel: "Official Kanazawa University information (Japanese)",
        graduationLink: "2025 Academic Degree Conferment Ceremony",
        entranceLink: "2026 Entrance Ceremony",
        priorityAlt: "Inclusive seats installed in a ceremony hall",
        hallAlt: "Ceremony hall with inclusive seating",
        signAlt: "Sign explaining the inclusive seating",
        calmAlt: "Calm-down space and room layout at a university ceremony",
      },
    },
    lounge: {
      title: "Sensory Book Lounge",
      lead:
        "A place in the city that combines a sensory-friendly setting with books about sensory diversity.",
      paragraphs: [
        "The project expands people's choice of places where they can stay and interact regardless of sensory traits. In June 2025, it was selected for Kanazawa City's collaborative community development challenge programme.",
        "Four Lounges were held with the city and local venues from August to December 2025. We continue to welcome facilities and shops interested in hosting the project with us.",
      ],
      cityLink: "View the Kanazawa City programme page (Japanese)",
      activities: [
        [
          "01",
          "A sensory-friendly setting",
          "Lighting, sound, and distance from others are considered so visitors can choose to read, work, rest, calm down, or connect.",
        ],
        [
          "02",
          "Books and ways to learn",
          "Alongside related books, activities such as short talks, sensory-item displays, and sensory-toy making offer approachable ways to learn.",
        ],
      ],
      reportsLabel: "Sensory Book Lounge track record",
      reports: [
        [
          "2025.08.19",
          "Community & Library Kotonoha",
          "Ishibiki, Kanazawa",
          "/assets/ppt/lounge-kotonoha.png",
        ],
        [
          "2025.09.20",
          "Kanazawa Student Community Centre",
          "Katamachi, Kanazawa",
          "/assets/ppt/lounge-machinaka.png",
        ],
        [
          "2025.11.01-02",
          "Kanazawa University Festival 2025",
          "Kakuma Campus, Kanazawa University",
          "/assets/ppt/lounge-kinda-festival.jpg",
        ],
        [
          "2025.12.21",
          "Ishikawa Prefectural Library",
          "Kanazawa, Ishikawa",
          "/assets/ppt/lounge-library.png",
        ],
      ],
      galleryAlts: [
        "Sensory Book Lounge at Community and Library Kotonoha",
        "A quiet reading area with reduced sensory stimulation",
        "A sensory space with dimmed lighting",
      ],
      guide: {
        title: "Sensory Book Lounge guide",
        status: "Digital edition now available",
        body: "This 28-page Japanese guide introduces sensory diversity and explains how to begin creating a considerate space without specialist knowledge or elaborate equipment.",
        contact: "Ask about hosting a Lounge",
      },
    },
    reports: {
      title: "Track record",
      lead:
        "At the university and around Kanazawa, we create opportunities to learn, experience, and talk safely about sensory diversity.",
      awarenessTitle: "Awareness events",
      communityTitle: "Community events",
      awareness: [
        ["2024.10.17", "Learning about sensory diversity", "Kanazawa University community development cafe"],
        ["2024.11.02-03", "A sensory-friendly refresh", "Kanazawa University Festival 2024"],
        ["2025.01.24", "Your sensory world and mine", "Barrier-free workshop at Kanazawa University"],
        ["2025.04.25", "Relaxing through the five senses", "Kanazawa University"],
        ["2025.07.02 & 04", "Quiet Cafe", "Collaboration with e-swap"],
        ["2025.10.05", "KANAZAWA PRIDE PARADE 2025", "Exhibition booth"],
      ],
      community: [
        ["2025.03.25", "Talking with peers about tactile sensitivity and neurodevelopmental traits", "Online event with fukufuku312"],
        ["2025.04.25", "Relaxing through the five senses", "Kanazawa University"],
        ["2025.07.02 & 04", "Clothing and sensory experience discussion", "Quiet Cafe with e-swap"],
      ],
      photoAlts: [
        "Blackboard at a With Sense event",
        "Sensory toys used at an event",
        "Display introducing sensory diversity",
      ],
    },
    join: {
      title: "New members and volunteers wanted",
      lead:
        "We welcome people who share our vision and want to shape the organisation and its work together.",
      paragraphs: [
        "Membership does not mean full participation. You can contribute flexibly according to your health, circumstances, and schedule, including by project, event, or individual task. Online participation is also possible.",
        "Joining the announcement group is a good first step. You can learn about our activities before choosing how you would like to be involved.",
      ],
      optionsTitle: "Ways to take part",
      options: [
        ["Core member", "Help lead planning and operations"],
        ["Support member", "Contribute particular skills or tasks"],
        ["Event volunteer", "Join for an event or project"],
        ["Announcement group", "Receive information first"],
      ],
      flowTitle: "How to join",
      steps: [
        ["01", "Join the announcement group", "Receive event and participation updates."],
        ["02", "Submit the application form", "Tell us about your interests and preferred involvement."],
        ["03", "Have an informal conversation", "Meet for about 30 minutes, in person or online."],
      ],
      groupLink: "Join the announcement group",
      formLink: "Open the member application form",
    },
    contact: {
      title: "Contact",
      lead:
        "Contact us about events, media enquiries, hosting a Sensory Book Lounge, or collaborating with a class, venue, or organisation.",
      instagram: ["Instagram", "News and event announcements"],
      email: ["Email", "ku.withsense@gmail.com"],
      collaboration: ["Collaboration enquiries", "For venues, classes, and organisations"],
    },
    footer: "Toward a university and society where sensory experiences are respected.",
  },
} as const;

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}
