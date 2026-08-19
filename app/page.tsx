import Image from "next/image";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import {
  awarenessEvents,
  communityEvents,
  contactLinks,
  involvementOptions,
  joinSteps,
  loungeActivities,
  loungeReports,
  metrics,
  pillars,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section id="top" className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Kanazawa / Sensory Accessibility</p>
              <h1>With Sense</h1>
              <p className="hero-lead">
                「感覚の多様性」をキーワードに、
                <br />
                感覚にやさしい大学・社会をつくる。
              </p>
              <p className="hero-text">
                金沢大学の学生を中心に、啓発・発信、環境づくり、
                安心してつながれるコミュニティづくりに取り組んでいます。
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#activities">
                  活動を知る
                  <ChevronRight aria-hidden="true" size={18} />
                </a>
                <a className="button secondary" href="#contact">
                  参加・連携について
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </div>
            </div>

            <div className="hero-identity">
              <Image
                className="hero-logo"
                src="/assets/logo-circle.png"
                alt="With Senseのロゴ"
                width={1024}
                height={1024}
                priority
              />
            </div>
          </div>

          <div className="metric-grid" aria-label="With Senseの概要">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="band">
          <div className="container split">
            <SectionHeading eyebrow="About" title="私たちについて" />
            <div className="copy-block copy-large">
              <p>
                With Senseは、2024年7月に設立しました。現在は金沢大学の学生6名を中心に活動しています。
              </p>
              <p>
                情報にあふれる現代社会で、多様な感覚をもつ誰もが安心して過ごせる社会や、心地よいと感じられる空間を増やすことを目指しています。
              </p>
              <p className="statement">
                感覚は、ひとつの基準で分けられるものではありません。
                <br />
                私たちは「感覚はグラデーション」と考えています。
              </p>
            </div>
          </div>
        </section>

        <section className="band band-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Sense Diversity"
              title="感覚の多様性とは？"
              lead="同じ音、光、匂い、触り心地でも、心地よさやつらさは人によって異なります。"
            />

            <div className="sense-intro">
              <div className="copy-block">
                <p>
                  私たちは視覚や聴覚などの五感をはじめ、さまざまな感覚を持って生きています。刺激をどのくらい受け取るか、受け取った情報を脳や神経でどう処理するかには個人差があります。
                </p>
                <p>
                  感覚過敏や感覚鈍麻は病名ではなく、さまざまな病気や障がいで現れることのある症状であり、多様な感覚特性のひとつです。
                </p>
              </div>
              <ul className="sense-examples">
                <li>照明がまぶしすぎる</li>
                <li>大きな音や賑やかな場所で緊張する</li>
                <li>香水や食べ物の匂いで気分が悪くなる</li>
                <li>服のタグや素材がチクチクする</li>
              </ul>
            </div>

            <div className="diagram-grid">
              <figure className="diagram">
                <Image
                  src="/assets/ppt/sense-diversity.png"
                  alt="特殊感覚、体性感覚、内臓感覚など、感覚の多様性を説明する図"
                  width={1920}
                  height={1080}
                />
                <figcaption>私たちの中にある、いろいろな感覚</figcaption>
              </figure>
              <figure className="diagram">
                <Image
                  src="/assets/ppt/sensory-traits.png"
                  alt="感覚過敏と感覚鈍麻の例を説明する図"
                  width={1920}
                  height={1080}
                />
                <figcaption>多様な感覚特性の例</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="activities" className="band">
          <div className="container">
            <SectionHeading
              eyebrow="Activities"
              title="3つの活動"
              lead="知ること、休める環境をつくること、安心してつながれる場をひらくこと。"
            />

            <div className="activity-list">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article className="activity-row" key={pillar.title}>
                    <span className="activity-number">{pillar.number}</span>
                    <Icon className="activity-icon" aria-hidden="true" size={28} />
                    <h3>{pillar.title}</h3>
                    <p>{pillar.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="band band-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Campus Projects"
              title="安心して過ごせる環境を、実際の場所に"
              lead="当事者の声と周囲の協力をつなぎ、大学や式典会場の環境を少しずつ変えています。"
            />

            <div className="project-note">
              <div>
                <p className="project-year">2025.01</p>
                <h3>金大センサリールームプロジェクト</h3>
              </div>
              <p>
                金沢大学自然科学系図書館の研究個室に、遮光カーテンと調光ライトを設置し、センサリールーム対応の整備を実現しました。
              </p>
            </div>

            <div className="ceremony-heading">
              <p className="project-year">2026</p>
              <h2>式典センサリープロジェクト</h2>
            </div>

            <article className="case-study">
              <div className="case-copy">
                <span className="case-index">01</span>
                <h3>インクルーシブ席（優先席）の設置</h3>
                <ul className="check-list">
                  <li>
                    <Check aria-hidden="true" size={18} />
                    式典会場2階とライブ配信会場最後列に計11席を設置
                  </li>
                  <li>
                    <Check aria-hidden="true" size={18} />
                    座席同士の間隔を1席分空け、広めに設計
                  </li>
                  <li>
                    <Check aria-hidden="true" size={18} />
                    会場外に出やすく、人目も気になりにくい位置を選定
                  </li>
                </ul>
              </div>
              <div className="case-media priority-media sensory-photo-group">
                <figure>
                  <Image
                    src="/assets/ppt/priority-seat.jpg"
                    alt="式典会場に設置されたインクルーシブ席"
                    width={1108}
                    height={1477}
                  />
                </figure>
                <figure>
                  <Image
                    src="/assets/ppt/ceremony-hall.jpg"
                    alt="インクルーシブ席を設置した式典会場"
                    width={1477}
                    height={1108}
                  />
                </figure>
                <figure className="sign-figure">
                  <Image
                    src="/assets/ppt/priority-seat-sign.png"
                    alt="インクルーシブ席の案内掲示"
                    width={1285}
                    height={892}
                  />
                </figure>
              </div>
            </article>

            <article className="case-study case-study-reverse">
              <div className="case-copy">
                <span className="case-index">02</span>
                <h3>カームダウンスペースの設置</h3>
                <p>
                  式典会場2階の会議室を、刺激から避難し休憩できる場所として整備しました。イヤーマフやセンサリートイの貸し出しも行っています。
                </p>
              </div>
              <figure className="calm-layout sensory-photo-group">
                <Image
                  src="/assets/ppt/calm-down-layout.jpg"
                  alt="式典のカームダウンスペースの写真とレイアウト"
                  width={1280}
                  height={720}
                />
              </figure>
            </article>
          </div>
        </section>

        <section className="band">
          <div className="container">
            <div className="lounge-intro">
              <SectionHeading
                eyebrow="Sensory Book Lounge"
                title="感覚にやさしい読書空間"
                lead="令和7年度協働のまちづくりチャレンジ事業に採択された、感覚にやさしい居場所づくり事業です。"
              />
              <div className="copy-block">
                <p>
                  「感覚にやさしい空間」と「感覚の多様性に関する書籍」の2つを組み合わせ、誰もが安心して滞在・交流できる居場所の選択肢をまちなかに増やします。
                </p>
              </div>
            </div>

            <div className="lounge-activity-list">
              {loungeActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <article key={activity.title}>
                    <span>0{index + 1}</span>
                    <Icon aria-hidden="true" size={26} />
                    <div>
                      <h3>{activity.title}</h3>
                      <p>{activity.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="lounge-gallery sensory-photo-group">
              <figure className="gallery-large">
                <Image
                  src="/assets/ppt/lounge-kotonoha.png"
                  alt="コトノハで行われたSensory Book Lounge"
                  width={1280}
                  height={949}
                />
              </figure>
              <figure>
                <Image
                  src="/assets/ppt/lounge-quiet-room.jpg"
                  alt="感覚に配慮した静かな読書スペース"
                  width={1477}
                  height={1108}
                />
              </figure>
              <figure>
                <Image
                  src="/assets/ppt/sensory-space.jpg"
                  alt="照明を落としたセンサリースペース"
                  width={1108}
                  height={1477}
                />
              </figure>
            </div>

            <div className="report-list" aria-label="Sensory Book Lounge実施実績">
              {loungeReports.map((report) => (
                <article className="report-row" key={report.title}>
                  <div className="report-image sensory-photo-group">
                    <Image
                      src={report.image}
                      alt={report.title + "でのSensory Book Lounge"}
                      width={720}
                      height={540}
                    />
                  </div>
                  <p className="report-date">{report.date}</p>
                  <div>
                    <h3>{report.title}</h3>
                    <p>{report.place}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reports" className="band band-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Reports"
              title="啓発・交流イベント実績"
              lead="感覚の多様性を知り、体験し、安心して言葉を交わせる機会をつくっています。"
            />

            <div className="report-columns">
              <div>
                <h3 className="subsection-title">感覚の多様性啓発イベント</h3>
                <div className="timeline">
                  {awarenessEvents.map((event) => (
                    <article
                      className="timeline-row"
                      key={event.year + event.date + event.title}
                    >
                      <time>
                        <span>{event.year}</span>
                        {event.date}
                      </time>
                      <div>
                        <h4>{event.title}</h4>
                        <p>{event.note}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="subsection-title">感覚にやさしい交流イベント</h3>
                <div className="community-list">
                  {communityEvents.map((event) => (
                    <article key={event.date + event.title}>
                      <time>{event.date}</time>
                      <h4>{event.title}</h4>
                      <p>{event.note}</p>
                    </article>
                  ))}
                </div>
                <p className="report-note">
                  このほかのイベントでも、参加者同士や団体メンバーと交流・対話できる時間を設けています。
                </p>
              </div>
            </div>

            <div className="event-gallery sensory-photo-group">
              <figure>
                <Image
                  src="/assets/ppt/event-blackboard.jpeg"
                  alt="With Senseのイベント会場に描かれた黒板"
                  width={3300}
                  height={2475}
                />
              </figure>
              <figure>
                <Image
                  src="/assets/ppt/event-community.png"
                  alt="参加者がテーブルを囲むイベントの様子"
                  width={1080}
                  height={1080}
                />
              </figure>
              <figure>
                <Image
                  src="/assets/ppt/sensory-toys.jpg"
                  alt="イベントで使用したセンサリートイ"
                  width={1477}
                  height={1108}
                />
              </figure>
              <figure>
                <Image
                  src="/assets/ppt/event-display.jpg"
                  alt="感覚の多様性に関する展示"
                  width={1108}
                  height={1477}
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="join" className="band">
          <div className="container">
            <SectionHeading
              eyebrow="Join Us"
              title="関わり方は、ひとつではありません"
              lead="在籍イコール、すべての活動への参加ではありません。希望や体調、予定に合わせて柔軟に関わり方を選べます。"
            />

            <div className="involvement-list">
              {involvementOptions.map((option) => (
                <article key={option.label}>
                  <p>{option.title}</p>
                  <strong>{option.label}</strong>
                </article>
              ))}
            </div>

            <div className="join-flow">
              <h3>加入までの基本的な流れ</h3>
              <div className="join-steps">
                {joinSteps.map((item) => (
                  <article key={item.step}>
                    <span>{item.step}</span>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
              <a
                className="text-link"
                href="https://www.instagram.com/ku_withsense?igsh=MWFyb2gwcTRrYm5jZg=="
                target="_blank"
                rel="noreferrer"
              >
                最新の募集・参加案内をInstagramで見る
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="band contact-band">
          <div className="container contact-layout">
            <SectionHeading
              eyebrow="Contact"
              title="お問い合わせ"
              lead="イベント参加、取材、授業・施設・団体との連携など、お気軽にご連絡ください。"
            />
            <div className="contact-list">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith("http");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    <Icon aria-hidden="true" size={24} />
                    <div>
                      <strong>{link.label}</strong>
                      <span>{link.detail}</span>
                    </div>
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <Image
            src="/assets/logo-circle.png"
            alt=""
            width={44}
            height={44}
          />
          <strong>With Sense</strong>
        </div>
        <p>感覚にやさしい大学・社会の実現を目指して。</p>
        <small>© 2026 With Sense</small>
      </footer>
    </>
  );
}
