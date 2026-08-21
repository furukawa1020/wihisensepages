import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Handshake,
  HeartHandshake,
  Instagram,
  Mail,
  Megaphone,
  Moon,
} from "lucide-react";
import { AccessibilitySettings } from "@/components/AccessibilitySettings";
import { GuidebookReader } from "@/components/GuidebookReader";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import {
  externalLinks,
  getSiteContent,
  SITE_URL,
  type Locale,
} from "@/data/site";

const activityIcons = [Megaphone, Moon, HeartHandshake];
const loungeIcons = [Moon, BookOpen];

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = getSiteContent(locale);
  const isJapanese = locale === "ja";
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "With Sense",
    url: locale === "ja" ? SITE_URL : SITE_URL + "/en",
    logo: SITE_URL + "/og-image.png",
    description: content.hero.body,
    foundingDate: "2024-07",
    email: "ku.withsense@gmail.com",
    areaServed: {
      "@type": "Place",
      name: "Kanazawa, Ishikawa, Japan",
    },
    sameAs: [externalLinks.instagram],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.skip}
      </a>
      <AccessibilitySettings locale={locale} />
      <SiteHeader locale={locale} />

      <main id="main-content" tabIndex={-1}>
        <section id="top" className="hero">
          <div className="container hero-inner">
            <div className="hero-lockup">
              <Image
                className="hero-logo"
                src="/assets/logo-circle.png"
                alt={content.hero.logoAlt}
                width={1024}
                height={1024}
                priority
              />
              <h1>With Sense</h1>
            </div>
            <p className="hero-lead">{content.hero.lead}</p>
            <p className="hero-text">{content.hero.body}</p>
            <div className="hero-actions">
              <a className="button primary" href="#activities">
                {content.hero.primary}
                <ChevronRight aria-hidden="true" size={18} />
              </a>
              <a className="button secondary" href="#join">
                {content.hero.secondary}
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>

            <dl className="metric-list" aria-label={content.hero.metricsLabel}>
              {content.hero.metrics.map(([value, label]) => (
                <div className="metric-row" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="about" className="band">
          <div className="container section-grid">
            <SectionHeading title={content.about.title} />
            <div className="reading-column">
              <div className="vision-statement">
                <p>{content.about.visionLabel}</p>
                <blockquote>{content.about.vision}</blockquote>
              </div>
              <div className="copy-block">
                {content.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container">
            <SectionHeading
              title={content.diversity.title}
              lead={content.diversity.lead}
            />

            <div className="diversity-layout">
              <div className="copy-block">
                {content.diversity.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div>
                <h3 className="subsection-title">
                  {content.diversity.examplesLabel}
                </h3>
                <ul className="plain-list">
                  {content.diversity.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="diagram-list sensory-photo-group">
              {content.diversity.figures.map(([src, alt, caption]) => (
                <figure className="diagram" key={src}>
                  <Image src={src} alt={alt} width={1920} height={1080} />
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="band">
          <div className="container">
            <SectionHeading
              title={content.activities.title}
              lead={content.activities.lead}
            />
            <div className="activity-list">
              {content.activities.items.map(([number, title, body], index) => {
                const Icon = activityIcons[index];
                return (
                  <article className="activity-row" key={number}>
                    <span className="row-number">{number}</span>
                    <Icon aria-hidden="true" size={28} />
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                );
              })}
            </div>
            <p className="context-note">{content.activities.note}</p>
          </div>
        </section>

        <section id="projects" className="band">
          <div className="container">
            <SectionHeading
              title={content.projects.title}
              lead={content.projects.lead}
            />

            <article className="project-block">
              <header className="project-heading">
                <p>{content.projects.room.date}</p>
                <div>
                  <h3>{content.projects.room.title}</h3>
                  <p>{content.projects.room.label}</p>
                </div>
              </header>
              <div className="project-body reading-column">
                <div className="copy-block">
                  {content.projects.room.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <a
                  className="text-link"
                  href={externalLinks.sensoryRoom}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.projects.room.link}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </div>
            </article>

            <article className="project-block">
              <header className="project-heading">
                <p>{content.projects.ceremony.date}</p>
                <div>
                  <h3>{content.projects.ceremony.title}</h3>
                  <p>{content.projects.ceremony.label}</p>
                </div>
              </header>
              <div className="project-body reading-column">
                <div className="copy-block">
                  {content.projects.ceremony.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="case-list">
                {content.projects.ceremony.cases.map(
                  ([number, title, body], index) => (
                    <article className="case-row" key={number}>
                      <div className="case-copy">
                        <span className="row-number">{number}</span>
                        <div>
                          <h4>{title}</h4>
                          <p>{body}</p>
                        </div>
                      </div>
                      {index === 0 ? (
                        <div className="case-images priority-images sensory-photo-group">
                          <figure>
                            <Image
                              src="/assets/ppt/priority-seat.jpg"
                              alt={content.projects.ceremony.priorityAlt}
                              width={1108}
                              height={1477}
                            />
                          </figure>
                          <figure>
                            <Image
                              src="/assets/ppt/ceremony-hall.jpg"
                              alt={content.projects.ceremony.hallAlt}
                              width={1477}
                              height={1108}
                            />
                          </figure>
                          <figure>
                            <Image
                              src="/assets/ppt/priority-seat-sign.png"
                              alt={content.projects.ceremony.signAlt}
                              width={1285}
                              height={892}
                            />
                          </figure>
                        </div>
                      ) : (
                        <figure className="calm-image sensory-photo-group">
                          <Image
                            src="/assets/ppt/calm-down-layout.jpg"
                            alt={content.projects.ceremony.calmAlt}
                            width={1280}
                            height={720}
                          />
                        </figure>
                      )}
                    </article>
                  ),
                )}
              </div>

              <div className="official-links">
                <h4>{content.projects.ceremony.linksLabel}</h4>
                <a
                  href={externalLinks.graduationCeremony}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.projects.ceremony.graduationLink}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
                <a
                  href={externalLinks.entranceCeremony}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.projects.ceremony.entranceLink}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="band">
          <div className="container">
            <SectionHeading
              title={content.lounge.title}
              lead={content.lounge.lead}
            />
            <div className="reading-column copy-block">
              {content.lounge.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a
                className="text-link"
                href={externalLinks.kanazawaChallenge}
                target="_blank"
                rel="noreferrer"
              >
                {content.lounge.cityLink}
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>

            <div className="lounge-activity-list">
              {content.lounge.activities.map(
                ([number, title, body], index) => {
                  const Icon = loungeIcons[index];
                  return (
                    <article key={number}>
                      <span className="row-number">{number}</span>
                      <Icon aria-hidden="true" size={26} />
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </article>
                  );
                },
              )}
            </div>

            <div className="lounge-gallery sensory-photo-group">
              <figure className="gallery-wide">
                <Image
                  src="/assets/ppt/lounge-kotonoha.png"
                  alt={content.lounge.galleryAlts[0]}
                  width={1280}
                  height={949}
                />
              </figure>
              <figure>
                <Image
                  src="/assets/ppt/lounge-quiet-room.jpg"
                  alt={content.lounge.galleryAlts[1]}
                  width={1477}
                  height={1108}
                />
              </figure>
              <figure>
                <Image
                  src="/assets/ppt/sensory-space.jpg"
                  alt={content.lounge.galleryAlts[2]}
                  width={1108}
                  height={1477}
                />
              </figure>
            </div>

            <div className="report-list" aria-label={content.lounge.reportsLabel}>
              {content.lounge.reports.map(([date, title, place, image]) => (
                <article className="report-row" key={date + title}>
                  <figure className="report-image sensory-photo-group">
                    <Image src={image} alt="" width={720} height={540} />
                  </figure>
                  <time dateTime={date.split(".").join("-")}>{date}</time>
                  <div>
                    <h3>{title}</h3>
                    <p>{place}</p>
                  </div>
                </article>
              ))}
            </div>

            <div id="guidebook">
              <GuidebookReader
                body={content.lounge.guide.body}
                locale={locale}
                status={content.lounge.guide.status}
                title={content.lounge.guide.title}
              />
              <a
                className="text-link guide-contact-link"
                href={
                  externalLinks.email +
                  "?subject=" +
                  encodeURIComponent(
                    isJapanese
                      ? "Sensory Book Loungeの実施について"
                      : "Enquiry about hosting a Sensory Book Lounge",
                  )
                }
              >
                {content.lounge.guide.contact}
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="reports" className="band">
          <div className="container">
            <SectionHeading
              title={content.reports.title}
              lead={content.reports.lead}
            />
            <div className="report-columns">
              <div>
                <h3 className="subsection-title">
                  {content.reports.awarenessTitle}
                </h3>
                <div className="timeline">
                  {content.reports.awareness.map(([date, title, note]) => (
                    <article className="timeline-row" key={date + title}>
                      <time>{date}</time>
                      <div>
                        <h4>{title}</h4>
                        <p>{note}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="subsection-title">
                  {content.reports.communityTitle}
                </h3>
                <div className="timeline">
                  {content.reports.community.map(([date, title, note]) => (
                    <article className="timeline-row" key={date + title}>
                      <time>{date}</time>
                      <div>
                        <h4>{title}</h4>
                        <p>{note}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="event-gallery sensory-photo-group">
              <figure>
                <Image
                  src="/assets/ppt/event-blackboard.jpeg"
                  alt={content.reports.photoAlts[0]}
                  width={3300}
                  height={2475}
                />
              </figure>
              <figure>
                <Image
                  src="/assets/ppt/sensory-toys.jpg"
                  alt={content.reports.photoAlts[1]}
                  width={1477}
                  height={1108}
                />
              </figure>
              <figure>
                <Image
                  src="/assets/ppt/event-display.jpg"
                  alt={content.reports.photoAlts[2]}
                  width={1108}
                  height={1477}
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="join" className="band">
          <div className="container">
            <SectionHeading title={content.join.title} lead={content.join.lead} />
            <div className="reading-column copy-block">
              {content.join.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="join-layout">
              <div>
                <h3 className="subsection-title">
                  {content.join.optionsTitle}
                </h3>
                <dl className="involvement-list">
                  {content.join.options.map(([label, description]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3 className="subsection-title">{content.join.flowTitle}</h3>
                <ol className="join-steps">
                  {content.join.steps.map(([number, title, body]) => (
                    <li key={number}>
                      <span>{number}</span>
                      <div>
                        <h4>{title}</h4>
                        <p>{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="join-actions">
              <a
                className="button primary"
                href={externalLinks.announcementGroup}
                target="_blank"
                rel="noreferrer"
              >
                {content.join.groupLink}
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a
                className="button secondary"
                href={externalLinks.applicationForm}
                target="_blank"
                rel="noreferrer"
              >
                {content.join.formLink}
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="band contact-band">
          <div className="container section-grid">
            <SectionHeading
              title={content.contact.title}
              lead={content.contact.lead}
            />
            <div className="contact-list">
              <a
                href={externalLinks.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram aria-hidden="true" size={24} />
                <div>
                  <strong>{content.contact.instagram[0]}</strong>
                  <span>{content.contact.instagram[1]}</span>
                </div>
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a href={externalLinks.email}>
                <Mail aria-hidden="true" size={24} />
                <div>
                  <strong>{content.contact.email[0]}</strong>
                  <span>{content.contact.email[1]}</span>
                </div>
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a
                href={
                  externalLinks.email +
                  "?subject=" +
                  encodeURIComponent(
                    isJapanese
                      ? "With Senseとの連携・協働について"
                      : "Collaboration with With Sense",
                  )
                }
              >
                <Handshake aria-hidden="true" size={24} />
                <div>
                  <strong>{content.contact.collaboration[0]}</strong>
                  <span>{content.contact.collaboration[1]}</span>
                </div>
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image
              src="/assets/logo-circle.png"
              alt=""
              width={48}
              height={48}
            />
            <strong>With Sense</strong>
          </div>
          <p>{content.footer}</p>
          <small>© 2026 With Sense</small>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}
