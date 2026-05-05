import {
  BookOpen,
  Building2,
  CalendarDays,
  Handshake,
  HeartHandshake,
  Instagram,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Moon,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "私たちについて", href: "#about" },
  { label: "活動", href: "#activities" },
  { label: "実績", href: "#reports" },
  { label: "連絡先", href: "#contact" },
];

export const pillars = [
  {
    icon: Megaphone,
    title: "感覚の多様性に関する啓発・発信",
    body: "イベントの開催やInstagramを通した発信により、多様な感覚について知る人を増やす啓発活動を行っております。",
  },
  {
    icon: Moon,
    title: "金大センサリールームプロジェクト",
    body: "感覚刺激によって疲れやストレスを感じやすい人が安心して過ごすことができる大学を目指し、金沢大学内にセンサリールームをつくるプロジェクトです。",
  },
  {
    icon: HeartHandshake,
    title: "感覚にやさしいコミュニティづくり",
    body: "感覚に関する困りごとをもつ人々の孤独感や孤立感を軽減するための心理的居場所を作ることを目標として、交流イベントを開催しています。",
  },
];

export const sensoryExamples = [
  "照明がまぶしすぎる",
  "大きな音や賑やかな場所でとても緊張してしまう",
  "香水や食べ物のにおいで気分が悪くなりやすい",
  "服のタグや素材がチクチクする",
];

export const metrics = [
  { value: "2024.7", label: "設立" },
  { value: "6", label: "金沢大学の学生で活動" },
  { value: "3", label: "主な活動の柱" },
  { value: "4", label: "Sensory Book Lounge開催実績" },
];

export const reports = [
  {
    date: "2025年8月19日(火)",
    title: "Sensory Book Lounge @コトノハ",
    place: "Community & Library コトノハ さま",
    image: "/assets/flyer-machinaka-1.png",
  },
  {
    date: "2025年9月20日(土)",
    title: "Sensory Book Lounge @金沢学生のまち市民交流館",
    place: "金沢学生のまち市民交流館 さま",
    image: "/assets/flyer-machinaka-1.png",
  },
  {
    date: "2025年11月1日(土)、2日(日)",
    title: "Sensory Book Lounge @金大祭 2025",
    place: "金沢大学角間キャンパス",
    image: "/assets/litlink-image-3.png",
  },
  {
    date: "2025年12月21日(日)",
    title: "Sensory Book Lounge @石川県立図書館",
    place: "石川県立図書館 さま",
    image: "/assets/flyer-ishikawa-library-1.png",
  },
];

export const contactLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    detail: "@ku_withsense",
    href: "https://www.instagram.com/ku_withsense?igsh=MWFyb2gwcTRrYm5jZg==",
  },
  {
    icon: Mail,
    label: "Gmail",
    detail: "ku.withsense@gmail.com",
    href: "mailto:ku.withsense@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "参加案内",
    detail: "イベントごとにInstagram等でご案内します",
    href: "https://lit.link/ku_withsense",
  },
];

export const collaborationPoints = [
  {
    icon: Lightbulb,
    title: "照明・音量の調整",
    body: "照明を落とす、BGMの音量を下げるなど、空間の刺激を少し整えるところから始めます。",
  },
  {
    icon: BookOpen,
    title: "本と展示",
    body: "感覚の多様性やバリアフリーに関する書籍・ポスターを通じて、学びの入口をつくります。",
  },
  {
    icon: Handshake,
    title: "施設・店舗との協働",
    body: "金沢市内の店舗や施設と協力し、安心して滞在・交流ができる居場所の選択肢を広げます。",
  },
];

export const projectFacts = [
  { icon: CalendarDays, label: "整備時期", value: "2025年1月" },
  { icon: Building2, label: "場所", value: "金沢大学自然科学系図書館 研究個室" },
  { icon: Sparkles, label: "整備内容", value: "遮光カーテン・調光ライト・カーペット床" },
  { icon: MapPin, label: "連携", value: "大学教職員・学内組織・ダイバーシティ推進機構" },
];
