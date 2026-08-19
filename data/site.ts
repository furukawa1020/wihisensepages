import {
  BookOpen,
  Handshake,
  HeartHandshake,
  Instagram,
  Mail,
  Megaphone,
  MessageCircle,
  Moon,
} from "lucide-react";

export const navItems = [
  { label: "私たちについて", href: "#about" },
  { label: "活動", href: "#activities" },
  { label: "プロジェクト", href: "#projects" },
  { label: "実績", href: "#reports" },
  { label: "関わり方", href: "#join" },
  { label: "お問い合わせ", href: "#contact" },
];

export const pillars = [
  {
    number: "01",
    icon: Megaphone,
    title: "感覚の多様性に関する啓発・発信",
    body: "イベントやInstagramでの発信を通じて、多様な感覚特性について知る人を増やす活動を行っています。",
  },
  {
    number: "02",
    icon: Moon,
    title: "金大センサリールームプロジェクト",
    body: "感覚刺激による疲れやストレスを感じやすい人が、大学内で安心して休める環境づくりに取り組んでいます。",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "感覚にやさしいコミュニティづくり",
    body: "困りごとをもつ人の孤独感や孤立感を軽減し、安心してつながれる心理的な居場所をひらいています。",
  },
];

export const metrics = [
  { value: "2024年7月", label: "設立" },
  { value: "6名", label: "金沢大学の学生を中心に活動" },
  { value: "3つ", label: "活動の柱" },
  { value: "4会場", label: "Sensory Book Lounge実施" },
];

export const loungeReports = [
  {
    date: "2025.08.19",
    title: "Community & Library コトノハ",
    place: "金沢市石引",
    image: "/assets/ppt/lounge-kotonoha.png",
  },
  {
    date: "2025.09.20",
    title: "金沢学生のまち市民交流館",
    place: "金沢市片町",
    image: "/assets/ppt/lounge-machinaka.png",
  },
  {
    date: "2025.11.01–02",
    title: "金大祭2025",
    place: "金沢大学角間キャンパス",
    image: "/assets/ppt/lounge-kinda-festival.jpg",
  },
  {
    date: "2025.12.21",
    title: "石川県立図書館",
    place: "石川県金沢市",
    image: "/assets/ppt/lounge-library.png",
  },
];

export const awarenessEvents = [
  {
    year: "2024",
    date: "10.17",
    title: "感覚の多様性を知る会",
    note: "金沢大学・地域創造カフェイベント",
  },
  {
    year: "2024",
    date: "11.02–03",
    title: "お疲れのあなたへ ～感覚にやさしいリフレッシュ～",
    note: "金大祭2024",
  },
  {
    year: "2025",
    date: "01.24",
    title: "あなたと私の感覚の世界",
    note: "金沢大学・バリアフリーワークショップ協力",
  },
  {
    year: "2025",
    date: "04.25",
    title: "五感でリフレッシュ！センサリートイdeゆるっと交流会",
    note: "金沢大学",
  },
  {
    year: "2025",
    date: "07.02・04",
    title: "静かふぇ",
    note: "金沢大学・e-swapコラボイベント",
  },
  {
    year: "2025",
    date: "08.19",
    title: "Sensory Book Lounge @ Community & Library コトノハ",
    note: "金沢市石引",
  },
  {
    year: "2025",
    date: "09.20",
    title: "Sensory Book Lounge @ 金沢学生のまち市民交流館",
    note: "金沢市片町",
  },
  {
    year: "2025",
    date: "10.05",
    title: "KANAZAWA PRIDE PARADE 2025",
    note: "展示ブース出展",
  },
  {
    year: "2025",
    date: "11.01–02",
    title: "Sensory Book Lounge @ 金大祭2025",
    note: "学祭企画出展",
  },
  {
    year: "2025",
    date: "12.21",
    title: "Sensory Book Lounge @ 石川県立図書館",
    note: "石川県立図書館",
  },
];

export const communityEvents = [
  {
    date: "2025.03.25",
    title: "先輩当事者に聞いてみよう！触覚過敏や発達特性による困りごと",
    note: "オンライン・fukufuku312コラボイベント",
  },
  {
    date: "2025.04.25",
    title: "五感でリフレッシュ！センサリートイdeゆるっと交流会",
    note: "金沢大学",
  },
  {
    date: "2025.07.02・04",
    title: "服と感覚のトークルーム",
    note: "静かふぇ内企画・e-swapコラボイベント",
  },
];

export const involvementOptions = [
  {
    label: "コアメンバー",
    title: "企画や運営の中心として関わりたい",
  },
  {
    label: "サポートメンバー",
    title: "得意を活かして部分的に参加したい",
  },
  {
    label: "スポット参加メンバー",
    title: "イベント当日だけ運営に参加したい",
  },
  {
    label: "お知らせグループメンバー",
    title: "まずは情報を受け取り、コミュニティに入りたい",
  },
  {
    label: "お休みメンバー",
    title: "就活・留学・療養などで一定期間活動を休みたい",
  },
];

export const joinSteps = [
  {
    step: "STEP 0",
    title: "お知らせグループに参加",
    body: "イベントや活動参加に関する情報を受け取れます。参加方法はInstagram等でご案内します。",
  },
  {
    step: "STEP 1",
    title: "新メンバー応募フォームから応募",
    body: "興味・関心や希望する関わり方などを入力します。",
  },
  {
    step: "STEP 2",
    title: "カジュアル面談",
    body: "フォームの内容をもとに、対面またはオンラインで30分程度お話しします。",
  },
];

export const contactLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    detail: "最新情報・イベント案内",
    href: "https://www.instagram.com/ku_withsense?igsh=MWFyb2gwcTRrYm5jZg==",
  },
  {
    icon: Mail,
    label: "Email",
    detail: "ku.withsense@gmail.com",
    href: "mailto:ku.withsense@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "参加について",
    detail: "関わり方と加入の流れを見る",
    href: "#join",
  },
  {
    icon: Handshake,
    label: "連携・協働について",
    detail: "施設・団体・授業等のご相談",
    href: "mailto:ku.withsense@gmail.com?subject=With%20Senseとの連携・協働について",
  },
];

export const loungeActivities = [
  {
    icon: Moon,
    title: "感覚にやさしい空間",
    body: "照明や音などの刺激に配慮し、読書・作業・カームダウン・休憩・交流に使える空間をつくります。",
  },
  {
    icon: BookOpen,
    title: "感覚の多様性を学べる企画",
    body: "ミニ講座、VRによる感覚過敏の追体験、センサリーアイテム展示、センサリートイ制作などを行います。",
  },
];
