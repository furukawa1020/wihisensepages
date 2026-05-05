import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import {
  collaborationPoints,
  contactLinks,
  metrics,
  navItems,
  pillars,
  projectFacts,
  reports,
  sensoryExamples,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="With Sense トップへ">
          With Sense
        </a>
        <nav className="desktop-nav" aria-label="サイト内ナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero band">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">金沢大学 学生団体</p>
              <h1>学生団体 With Sense</h1>
              <p className="hero-lead">
                「感覚の多様性」をキーワードに活動する金沢大学の学生団体です
              </p>
              <p className="hero-text">
                感覚にやさしい大学・社会の実現を目指し、啓発・発信、金大センサリールームプロジェクト、感覚にやさしいコミュニティづくりに取り組んでいます。
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#activities">
                  活動を見る
                  <ChevronRight aria-hidden="true" size={18} />
                </a>
                <a className="button ghost" href="#contact">
                  連絡先
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </div>
            </div>
          <div className="hero-panel" aria-label="With Sense概要">
            <Image
              className="logo-mark"
              src="/assets/logo-circle.png"
              alt="With Senseのロゴ"
              width={1200}
              height={1200}
              priority
            />
              <div className="metric-grid">
                {metrics.map((metric) => (
                  <div className="metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="band about-band">
          <div className="container split">
            <SectionHeading eyebrow="About" title="私たちについて" />
            <div className="copy-block">
              <p>
                2024年7月設立。現在は金沢大学の学生6名で活動。
              </p>
              <p>
                「感覚の多様性」をキーワードとして感覚にやさしい大学・社会の実現を目指し、主に3つの活動を行っております。
              </p>
              <div className="three-lines">
                <span>感覚の多様性に関する啓発・発信</span>
                <span>金大センサリールームプロジェクト</span>
                <span>感覚にやさしいコミュニティづくり</span>
              </div>
            </div>
          </div>
        </section>

        <section className="band calm-band">
          <div className="container sense-layout">
            <div>
              <SectionHeading
                eyebrow="Sense Diversity"
                title="感覚の多様性とは？"
                lead="同じ音・光・匂い・触り心地でも、感じ方は人によって異なります。"
              />
              <div className="copy-block">
                <p>
                  私たちは視覚や聴覚などの五感をはじめとして、さまざまな感覚を持って生きています。外部からの刺激をどのくらい受け取るか、伝わってきた情報を脳や神経でどのように処理するかには個人差が見られます。
                </p>
                <p>
                  このような違いを、私たちは「感覚はグラデーション」とし、多様な感覚特性を尊重しようと考えております。
                </p>
              </div>
              <ul className="example-list">
                {sensoryExamples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
            <figure className="visual-frame wide">
              <Image
                src="/assets/litlink-image-1.png"
                alt="感覚の多様性について説明する図"
                width={1200}
                height={675}
              />
            </figure>
          </div>
        </section>

        <section id="activities" className="band">
          <div className="container">
            <SectionHeading
              eyebrow="Activities"
              title="活動の3本柱"
              lead="With Senseの活動は、知ること、休める場所をつくること、つながれる場所をひらくことを中心に広がっています。"
            />
            <div className="pillar-grid">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article className="pillar-card" key={pillar.title}>
                    <div className="icon-box">
                      <Icon aria-hidden="true" size={24} />
                    </div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="band project-band">
          <div className="container project-layout">
            <div>
              <SectionHeading
                eyebrow="Campus Project"
                title="金大センサリールームプロジェクト"
                lead="With Senseの先駆けともなった、大学の環境を変えていくプロジェクトです。"
              />
              <div className="copy-block">
                <p>
                  大学生活では、人混みに晒されることや照明や電子機器類などの強い光を受けることが避けられない場面が多くあります。
                </p>
                <p>
                  このような声に共感や支援をする人たちと共に、大学教職員や学内組織・ダイバーシティ推進機構とも連携して活動しております。
                </p>
              </div>
            </div>
            <div className="fact-panel">
              {projectFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div className="fact-row" key={fact.label}>
                    <Icon aria-hidden="true" size={22} />
                    <div>
                      <span>{fact.label}</span>
                      <strong>{fact.value}</strong>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="lounge" className="band calm-band">
          <div className="container lounge-layout">
            <div>
              <SectionHeading
                eyebrow="Sensory Book Lounge"
                title="居場所の選択肢を、まちなかに"
                lead="金沢市の協働事業として、感覚にやさしい空間及び時間と、感覚の多様性を学べる書籍の提供をおこないます。"
              />
              <div className="copy-block">
                <p>
                  2025年6月、With Senseは金沢市が実施する令和7年度『協働のまちづくりチャレンジ事業(学生・高校生部門)』に採択されました。
                </p>
                <p>
                  Sensory Book Loungeは、感覚特性にとらわれず、安心して滞在・交流ができる「居場所の選択肢」をまちなかに増やすことを目標としております。
                </p>
              </div>
            </div>
            <figure className="visual-frame wide">
              <Image
                src="/assets/litlink-image-3.png"
                alt="Sensory Book Loungeの実施実績をまとめた図"
                width={1200}
                height={675}
              />
            </figure>
          </div>
          <div className="container collaboration-grid">
            {collaborationPoints.map((point) => {
              const Icon = point.icon;
              return (
                <article className="mini-card" key={point.title}>
                  <Icon aria-hidden="true" size={22} />
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="reports" className="band">
          <div className="container">
            <SectionHeading
              eyebrow="Reports"
              title="開催実績"
              lead="公式lit.link掲載の実績をもとに、開催場所と日程を整理しています。"
            />
            <div className="report-grid">
              {reports.map((report) => (
                <article className="report-card" key={report.title}>
                  <div className="report-image">
                    <Image
                      src={report.image}
                      alt={`${report.title}の関連画像`}
                      width={720}
                      height={480}
                    />
                  </div>
                  <div>
                    <p className="report-date">{report.date}</p>
                    <h3>{report.title}</h3>
                    <p>{report.place}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="band contact-band">
          <div className="container contact-layout">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="最新情報・お問い合わせ"
                lead="開催イベントにつきましては、公式Instagramにて告知いたします。LINEお知らせオープンチャット等の参加案内は、イベントや告知内容に応じてご案内します。"
              />
            </div>
            <div className="contact-grid">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    className="contact-card"
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <Icon aria-hidden="true" size={24} />
                    <span>{link.label}</span>
                    <small>{link.detail}</small>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>学生団体 With Sense</p>
        <p>「感覚の多様性」をキーワードに活動する金沢大学の学生団体です</p>
      </footer>
    </>
  );
}
