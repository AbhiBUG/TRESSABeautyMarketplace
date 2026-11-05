import { useEffect, useMemo, useRef, useState } from "react"

type Page =
  | "home"
  | "explore"
  | "consultation"
  | "profile"
  | "booking"
  | "collaborations"
  | "stylists"
  | "login"
  | "business"

const photos = {
  hero: [
    "https://images.unsplash.com/photo-1632765866070-3fadf25d3d5b?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1619218533116-f050e7d91d91?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?auto=format&fit=crop&w=1200&q=85",
  ],
  stylist1:
    "https://images.unsplash.com/photo-1604261605115-4b34b646a05c?auto=format&fit=crop&w=700&q=85",
  stylist2:
    "https://images.unsplash.com/photo-1543725808-9246f07b58b6?auto=format&fit=crop&w=700&q=85",
  stylist3:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
  stylist4:
    "https://images.unsplash.com/photo-1583599431375-f3a3fcbb91c8?auto=format&fit=crop&w=700&q=85",
  trend1:
    "https://images.unsplash.com/photo-1614942925739-a21796eba758?auto=format&fit=crop&w=600&q=85",
  trend2:
    "https://images.unsplash.com/photo-1561382554-68c3e414d5d1?auto=format&fit=crop&w=600&q=85",
  trend3:
    "https://images.unsplash.com/photo-1648498180323-fef0364bea48?auto=format&fit=crop&w=600&q=85",
  trend4:
    "https://images.unsplash.com/photo-1793290320898-efa695400226?auto=format&fit=crop&w=600&q=85",
  trend5:
    "https://images.unsplash.com/photo-1583724711595-ed09eedf1ff8?auto=format&fit=crop&w=600&q=85",
}

const modelLooks = [
  {
    name: "The Sculpted Curl",
    saved: "Saved 1.8k times this week",
    views: [
      "https://images.unsplash.com/photo-1632765866070-3fadf25d3d5b?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1743001345835-a8e9f258a823?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?auto=format&fit=crop&w=700&q=90",
    ],
  },
  {
    name: "The Soft Butterfly",
    saved: "Saved 1.2k times this week",
    views: [
      "https://images.unsplash.com/photo-1614942925739-a21796eba758?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1654503398242-affa5b37f1bc?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1584103208051-6d190fa0e065?auto=format&fit=crop&w=700&q=90",
    ],
  },
  {
    name: "The Modern Crop",
    saved: "Saved 980 times this week",
    views: [
      "https://images.unsplash.com/photo-1793290320898-efa695400226?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1565906353471-db6555b67554?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1731951039647-94f50eea1fd5?auto=format&fit=crop&w=700&q=90",
    ],
  },
]

const trends = [
  { name: "Butterfly Cut", image: photos.trend1, tag: "Most saved" },
  { name: "Soft Waves", image: photos.trend2, tag: "Trending" },
  { name: "Sleek Bun", image: photos.trend3, tag: "Editor pick" },
  { name: "Textured Crop", image: photos.trend4, tag: "New" },
  { name: "Modern Fade", image: photos.trend5, tag: "Trending" },
]

const stylists = [
  {
    id: 1,
    name: "Meera Sharma",
    role: "Cut & colour artist",
    location: "Bandra, Mumbai",
    rating: 4.9,
    reviews: 128,
    price: 2200,
    image: photos.stylist1,
    tags: ["Cuts", "Colour", "Waves"],
    bio: "Known for soft, wearable cuts and colour that grows out beautifully. Meera creates polished looks that still feel like you.",
    review: "Meera completely understood the assignment. My cut looks amazing even when I style it myself—which never happens.",
    reviewer: "Riya K.",
    menu: [["Signature cut & finish", "75 min", "₹2,600"], ["Gloss, tone & style", "90 min", "₹3,400"], ["Soft wave styling", "60 min", "₹2,200"], ["Full transformation", "3 hrs", "₹6,500"]],
  },
  {
    id: 2,
    name: "Ananya Rao",
    role: "Texture specialist",
    location: "Indiranagar, Bengaluru",
    rating: 5.0,
    reviews: 94,
    price: 1900,
    image: photos.stylist2,
    tags: ["Braids", "Natural hair", "Silk press"],
    bio: "Ananya specialises in expressive texture work, protective styling and natural finishes designed around your routine.",
    review: "Ananya made my curls feel so easy to wear. The whole appointment was thoughtful and relaxed.",
    reviewer: "Pooja S.",
    menu: [["Natural curl finish", "60 min", "₹2,000"], ["Braids & protective style", "120 min", "₹3,200"], ["Silk press", "90 min", "₹2,400"], ["Texture consultation", "45 min", "₹1,200"]],
  },
  {
    id: 3,
    name: "Kavya Malhotra",
    role: "Editorial stylist",
    location: "Hauz Khas, Delhi",
    rating: 4.8,
    reviews: 76,
    price: 2800,
    image: photos.stylist3,
    tags: ["Occasion", "Updos", "Waves"],
    bio: "Kavya brings an editorial eye to occasion styling, creating expressive waves and updos that photograph beautifully.",
    review: "Kavya gave me the exact soft, modern look I had saved. I felt incredible all evening.",
    reviewer: "Aditi M.",
    menu: [["Editorial waves", "75 min", "₹2,800"], ["Occasion updo", "90 min", "₹3,500"], ["Bridal trial styling", "120 min", "₹4,500"], ["Full event look", "3 hrs", "₹6,800"]],
  },
  {
    id: 4,
    name: "Aarav Mehta",
    role: "Precision cut specialist",
    location: "Koregaon Park, Pune",
    rating: 4.9,
    reviews: 112,
    price: 1700,
    image: photos.stylist4,
    tags: ["Crops", "Fades", "Cuts"],
    bio: "Aarav focuses on precise cuts, clean fades and easy-to-maintain shapes tailored to your features and lifestyle.",
    review: "Aarav gave me the cleanest cut I have had in years. The shape still looks great weeks later.",
    reviewer: "Vikram J.",
    menu: [["Precision cut", "60 min", "₹1,700"], ["Fade & finish", "60 min", "₹1,800"], ["Textured crop", "75 min", "₹2,000"], ["Cut consultation", "30 min", "₹800"]],
  },
]

const services = [
  {
    number: "01",
    title: "The Everyday Edit",
    text: "Easy, polished hair for every plan on your calendar.",
    meta: "From ₹800 · 45 min",
    image: photos.hero[0],
  },
  {
    number: "02",
    title: "Main Character Energy",
    text: "Waves, updos and standout looks made for your moment.",
    meta: "From ₹1,500 · 75 min",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "The Big Transformation",
    text: "A considered cut, colour and finish that feels completely you.",
    meta: "From ₹3,000 · 2.5 hrs",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Your Place, Your Look",
    text: "A trusted TRESSA artist, bringing the good hair day to you.",
    meta: "From ₹1,200 · At home",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85",
  },
]

const Icon = ({ name, size = 20 }: { name: string; size?: number }) => {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21c.7-3.5 3.1-5.3 7-5.3s6.3 1.8 7 5.3" />
      </>
    ),
    business: (
      <>
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path d="M9 6V4h6v2M4 11h16M10 15h4" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    star: (
      <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.7l6.2-.9L12 3Z" />
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    heart: (
      <path d="M20.8 5.8a5.4 5.4 0 0 0-7.7 0L12 6.9l-1.1-1.1a5.4 5.4 0 0 0-7.7 7.7L12 22l8.8-8.5a5.4 5.4 0 0 0 0-7.7Z" />
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Header({ page, go }: { page: Page; go: (p: Page) => void }) {
  const [open, setOpen] = useState(false)
  const links: [string, Page, string?][] = [
    ["Explore", "explore"],
    ["Services", "home", "services"],
    ["Collaborations", "collaborations"],
  ]
  const navigate = (p: Page, anchor?: string) => {
    setOpen(false)
    if (anchor && page === p) {
      document
        .getElementById(anchor)
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    go(p)
    if (anchor) {
      window.setTimeout(
        () =>
          document
            .getElementById(anchor)
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        520,
      )
    }
  }
  return (
    <header className="header">
      <button
        className="brand"
        onClick={() => navigate("home")}
        aria-label="Tressa home"
      >
        TRESSA<span>.</span>
      </button>
      <nav className={open ? "nav open" : "nav"}>
        {links.map(([label, target, anchor]) => (
          <button
            className={page === target ? "active" : ""}
            key={label}
            onClick={() => navigate(target, anchor)}
          >
            {label}
          </button>
        ))}
        <button className="mobile-sign" onClick={() => navigate("login")}>
          Sign in
        </button>
      </nav>
      <div className="header-actions">
        <button
          className="sign-in"
          onClick={() => navigate("login")}
        >
          Sign In
        </button>
        <button className="pill primary" onClick={() => navigate("explore")}>
          Find a stylist <Icon name="arrow" size={17} />
        </button>
        <button
          className="profile-button"
          onClick={() => navigate("login")}
          aria-label="Open profile"
        >
          <Icon name="user" size={18} />
        </button>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  )
}

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: string
  copy?: string
}) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  )
}

function SearchBox({
  onSearch,
  defaultService = "",
}: {
  onSearch: (service: string, location: string) => void
  defaultService?: string
}) {
  const [service, setService] = useState(defaultService)
  const [location, setLocation] = useState("")
  return (
    <div className="search-box">
      <label>
        <span>What are you looking for?</span>
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Choose a service</option>
          <option>Haircut</option>
          <option>Colour</option>
          <option>Silk press</option>
          <option>Occasion styling</option>
          <option>At-home service</option>
        </select>
      </label>
      <div className="search-divider" />
      <label>
        <span>Where?</span>
        <div className="input-icon">
          <Icon name="pin" size={17} />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Mumbai or PIN code"
          />
        </div>
      </label>
      <button onClick={() => onSearch(service, location)} aria-label="Search">
        <Icon name="search" />
      </button>
    </div>
  )
}

function StylistCard({
  stylist,
  go,
  selectStylist,
}: {
  stylist: typeof stylists[0]
  go: (p: Page) => void
  selectStylist: (id: number) => void
}) {
  return (
    <article className="stylist-card" onClick={() => { selectStylist(stylist.id); go("profile") }}>
      <div className="stylist-image">
        <img src={stylist.image} alt={`${stylist.name}, ${stylist.role}`} />
        <button
          aria-label="Save stylist"
          onClick={(e) => {
            e.stopPropagation()
            alert(`${stylist.name} saved to favourites`)
          }}
        >
          <Icon name="heart" size={18} />
        </button>
        <span>Available this week</span>
      </div>
      <div className="stylist-info">
        <div>
          <p className="stylist-role">{stylist.role}</p>
          <h3>{stylist.name}</h3>
        </div>
        <div className="rating">
          <Icon name="star" size={16} /> {stylist.rating}{" "}
          <span>({stylist.reviews})</span>
        </div>
      </div>
      <div className="stylist-meta">
        <span>
          <Icon name="pin" size={15} /> {stylist.location}
        </span>
        <strong>from ₹{stylist.price}</strong>
      </div>
    </article>
  )
}

function Home({
  go,
  chooseTrend,
  setSearch,
  selectStylist,
}: {
  go: (p: Page) => void
  chooseTrend: (t: string) => void
  setSearch: (v: { service: string; location: string }) => void
  selectStylist: (id: number) => void
}) {
  const [hero, setHero] = useState(0)
  const heroTitle = "Your next look starts here"
  const [typedHeroTitle, setTypedHeroTitle] = useState("")
  const collabRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    const timer = setInterval(() => {
      setHero((x) => (x + 1) % modelLooks.length)
    }, 4200)
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setRevealed(true),
      { threshold: 0.3 },
    )
    if (collabRef.current) observer.observe(collabRef.current)
    return () => {
      clearInterval(timer)
      observer.disconnect()
    }
  }, [])
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedHeroTitle(heroTitle)
      return
    }

    let characterIndex = 0
    const timer = window.setInterval(() => {
      characterIndex += 1
      setTypedHeroTitle(heroTitle.slice(0, characterIndex))
      if (characterIndex === heroTitle.length) window.clearInterval(timer)
    }, 75)

    return () => window.clearInterval(timer)
  }, [])
  const search = (service: string, location: string) => {
    setSearch({ service, location })
    go("explore")
  }
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow fade-one">Beauty, booked better.</p>
            <h1
              className="animated-title typing-title hero-title"
              aria-label={heroTitle}
              aria-live="polite"
            >
              <span className="typing-text">{typedHeroTitle}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </h1>
            <p className="hero-intro fade-three">
              Discover top-rated stylists, find the look that feels like you,
              and book it in minutes.
            </p>
            <div className="fade-four">
              <SearchBox onSearch={search} />
            </div>
            <div className="hero-proof fade-four">
              <span className="avatar-stack">
                {[photos.stylist1, photos.stylist2, photos.stylist3].map(
                  (x) => (
                    <img key={x} src={x} alt="" />
                  ),
                )}
              </span>
              <span>
                <b>4.9</b> average rating from 2,000+ beauty lovers
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="model-views" key={hero}>
              {modelLooks[hero].views.map((src, i) => (
                <figure className={`hair-view hair-view-${i + 1}`} key={src}>
                  <img
                    src={src}
                    alt={`${modelLooks[hero].name}, ${["front", "side", "back"][i]} hair view`}
                  />
                  <figcaption>{["Front", "Profile", "Back"][i]}</figcaption>
                </figure>
              ))}
            </div>
            <div className="model-switch">
              <span>
                Look {String(hero + 1).padStart(2, "0")} /{" "}
                {String(modelLooks.length).padStart(2, "0")}
              </span>
              <div>
                {modelLooks.map((look, i) => (
                  <button
                    key={look.name}
                    className={hero === i ? "active" : ""}
                    onClick={() => setHero(i)}
                    aria-label={`Show ${look.name}`}
                  />
                ))}
              </div>
            </div>
            <div className="floating-note">
              <i>New</i>
              <div>
                <b>{modelLooks[hero].name}</b>
                <span>{modelLooks[hero].saved}</span>
              </div>
            </div>
          </div>
        </section>


        <section className="trend-section">
          <div className="section">
            <SectionTitle
              eyebrow="The edit"
              title="Looks everyone's loving"
              copy="Tap a trend to make it yours."
            />
            <div className="trend-row">
              <div className="trend-track">
                {[...trends, ...trends].map((t, i) => (
                  <button
                    className={`trend-card trend-${(i % trends.length) + 1}`}
                    key={`${t.name}-${i}`}
                    onClick={() => {
                      chooseTrend(t.name)
                      go("consultation")
                    }}
                  >
                    <img src={t.image} alt={t.name} />
                    <span>{t.tag}</span>
                    <div>
                      <h3>{t.name}</h3>
                      <p>
                        Find your stylist <Icon name="arrow" size={15} />
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section id="services" className="service-section section">
          <SectionTitle
            eyebrow="Find your thing"
            title="Beauty for real life."
            copy="From the everyday refresh to the full transformation, there's a TRESSA stylist for it."
          />
          <div className="service-grid">
            {services.map((s) => (
              <button
                className="service-card"
                key={s.title}
                onClick={() => {
                  setSearch({ service: s.title, location: "" })
                  go("explore")
                }}
              >
                <img className="service-image" src={s.image} alt="" />
                <div className="service-content">
                  <span className="service-number">{s.number}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <small>{s.meta}</small>
                </div>
                <i className="service-arrow">
                  <Icon name="arrow" />
                </i>
              </button>
            ))}
          </div>
        </section>



        <section className="section stylists-section">
          <div className="title-row">
            <SectionTitle eyebrow="Near you" title="Stylists worth knowing" />
            <button className="text-link" onClick={() => go("explore")}>
              Explore all <Icon name="arrow" size={17} />
            </button>
          </div>
          <div className="stylist-grid">
            {stylists.slice(0, 3).map((s) => (
              <StylistCard key={s.id} stylist={s} go={go} selectStylist={selectStylist} />
            ))}
          </div>
        </section>

        <section className="artist-cta section">
          <div>
            <p className="eyebrow">For the artists</p>
            <h2>Love creating beautiful looks?</h2>
          </div>
          <p>Showcase your craft. Grow your chair.</p>
          <button className="pill primary" onClick={() => go("login")}>
            Become a TRESSA Artist <Icon name="arrow" size={17} />
          </button>
        </section>

        <section
          ref={collabRef}
          className={`collab-banner section ${revealed ? "revealed" : ""}`}
        >
          <div className="collab-image">
            <img src={photos.hero[1]} alt="Model with editorial hairstyle" />
            <span>Open call · Mumbai</span>
          </div>
          <div className="collab-copy">
            <p className="eyebrow">Tressa collaborations</p>
            <h2
              className="animated-title collab-title"
              aria-label="Be the face of the next trend"
            >
              {"Be the face of the next trend".split(" ").map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className={
                    word === "trend" ? "gradient-word light-gradient" : ""
                  }
                  style={
                    { "--word-delay": `${i * 0.09}s` } as React.CSSProperties
                  }
                >
                  {word}
                </span>
              ))}
            </h2>
            <p>
              Get discounted styling from leading creatives in exchange for
              being featured in fresh promotional content. New face, new look.
            </p>
            <div>
              <button
                className="pill light"
                onClick={() => go("collaborations")}
              >
                Collaborate <Icon name="arrow" size={17} />
              </button>
              <small>Turn your passion into a perk</small>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function Explore({
  go,
  initial,
  selectStylist,
}: {
  go: (p: Page) => void
  initial: { service: string ;location: string }
  selectStylist: (id: number) => void
}) {
  const [service, setService] = useState(initial.service)
  const [location, setLocation] = useState(initial.location)
  const [budget, setBudget] = useState(5000)
  const [sort, setSort] = useState("Recommended")
  const filtered = useMemo(() => {
    const query = service.toLowerCase()
    const locationQuery = location.trim().toLowerCase()
    const matchesService = (stylist: (typeof stylists)[number]) =>
      !query ||
      stylist.tags.some((tag) => query.includes(tag.toLowerCase()) || tag.toLowerCase().includes(query)) ||
      (query.includes("haircut") && stylist.tags.some((tag) => ["cuts", "fades", "crops"].includes(tag.toLowerCase()))) ||
      (query.includes("occasion") && stylist.tags.some((tag) => ["occasion", "updos", "waves"].includes(tag.toLowerCase()))) ||
      (query.includes("at-home") || query.includes("home"))
    return [...stylists]
      .filter((stylist) =>
        stylist.price <= budget &&
        (!locationQuery || stylist.location.toLowerCase().includes(locationQuery)) &&
        matchesService(stylist),
      )
      .sort((a, b) =>
        sort === "Highest rated" ? b.rating - a.rating :
        sort === "Price: low to high" ? a.price - b.price : b.reviews - a.reviews,
      )
  }, [budget, location, service, sort])
  return (
    <main className="page-main">
      <div className="page-heading">
        <p className="eyebrow">Your beauty circle</p>
        <h1>
          Find your <em>person.</em>
        </h1>
        <p>Talented, vetted professionals who really get your hair.</p>
      </div>
      <div className="filter-bar">
        <label>
          Service
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">All services</option>
            <option>Cuts</option>
            <option>Colour</option>
            <option>Waves</option>
            <option>Braids</option>
            <option>Fades</option>
          </select>
        </label>
        <label>
          Location
          <div className="input-icon">
            <Icon name="pin" size={16} />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Anywhere in Mumbai"
            />
          </div>
        </label>
        <label className="budget">
          Budget <span>Up to ₹{budget}</span>
          <input
            type="range"
            min="1000"
            max="5000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </label>
        <button className="pill primary">
          <Icon name="search" size={17} /> Search
        </button>
      </div>
      <div className="results-head">
        <p>
          <b>{filtered.length || 0} stylists</b> match your search
        </p>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option>Recommended</option>
          <option>Highest rated</option>
          <option>Price: low to high</option>
        </select>
      </div>
      {filtered.length ? (
        <div className="stylist-grid four">
          {filtered.map((s) => (
            <StylistCard key={s.id} stylist={s} go={go} selectStylist={selectStylist} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>No exact matches just yet</h3>
          <p>Try a higher budget or browse all services.</p>
          <button
            className="pill primary"
            onClick={() => {
              setBudget(5000)
              setService("")
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  )
}

function Consultation({ go, trend }: { go: (p: Page) => void; trend: string }) {
  const [step, setStep] = useState(1)
  const [look, setLook] = useState(trend)
  const [hair, setHair] = useState("")
  const [occasion, setOccasion] = useState("")
  const [budget, setBudget] = useState("₹2,000–₹3,500")
  const options = (
    items: string[],
    value: string,
    setter: (s: string) => void,
  ) => (
    <div className="choice-grid">
      {items.map((x) => (
        <button
          key={x}
          className={value === x ? "selected" : ""}
          onClick={() => setter(x)}
        >
          {x}
          {value === x && <Icon name="check" size={17} />}
        </button>
      ))}
    </div>
  )
  return (
    <main className="consult-page">
      <div className="progress">
        <span style={{ width: `${step * 33.33}%` }} />
      </div>
      <button
        className="back-link"
        onClick={() => (step > 1 ? setStep(step - 1) : go("home"))}
      >
        ← Back
      </button>
      <div className="consult-card">
        <p className="eyebrow">Your look, decoded · {step} of 3</p>
        {step === 1 && (
          <>
            <h1>
              What are we
              <br />
              <em>going for?</em>
            </h1>
            <p>Choose a direction. You can tell your stylist more later.</p>
            <label className="field-label">
              Desired look
              <input
                value={look}
                onChange={(e) => setLook(e.target.value)}
                placeholder="e.g. soft waves, butterfly cut..."
              />
            </label>
            {options(
              trends.map((t) => t.name),
              look,
              setLook,
            )}
          </>
        )}
        {step === 2 && (
          <>
            <h1>
              Tell us about
              <br />
              <em>your hair.</em>
            </h1>
            <p>This helps us match you with the right specialist.</p>
            <label className="question-label">Hair type</label>
            {options(
              ["Straight", "Wavy", "Curly", "Coily", "Not sure"],
              hair,
              setHair,
            )}
            <label className="question-label">What's the occasion?</label>
            {options(
              [
                "Everyday refresh",
                "Big event",
                "Full makeover",
                "Just because",
              ],
              occasion,
              setOccasion,
            )}
          </>
        )}
        {step === 3 && (
          <>
            <h1>
              One last
              <br />
              <em>detail.</em>
            </h1>
            <p>What's your comfortable spend for this look?</p>
            {options(
              ["Under ₹2,000", "₹2,000–₹3,500", "₹3,500–₹6,000", "₹6,000+"],
              budget,
              setBudget,
            )}
            <div className="match-preview">
              <span>
                <Icon name="check" />
              </span>
              <div>
                <b>Great match potential</b>
                <p>
                  We found 4 stylists who specialise in {look || "your look"}.
                </p>
              </div>
            </div>
          </>
        )}
        <button
          className="pill primary full"
          disabled={
            step === 1 ? !look : step === 2 ? !hair || !occasion : !budget
          }
          onClick={() => (step < 3 ? setStep(step + 1) : go("explore"))}
        >
          {step < 3 ? "Continue" : "See my matches"}{" "}
          <Icon name="arrow" size={17} />
        </button>
      </div>
    </main>
  )
}

function Profile({ go, stylistId }: { go: (p: Page) => void; stylistId: number }) {
  const stylist = stylists.find((artist) => artist.id === stylistId) ?? stylists[0]
  return (
    <main className="profile-page">
      <div className="profile-hero">
        <div className="profile-photo">
          <img src={stylist.image} alt={stylist.name} />
          <span>Top rated</span>
        </div>
        <div className="profile-summary">
          <p className="eyebrow">{stylist.role}</p>
          <h1>
            {stylist.name.split(" ")[0]}
            <br />
            <em>{stylist.name.split(" ").slice(1).join(" ")}.</em>
          </h1>
          <div className="profile-rating">
            <Icon name="star" size={18} /> <b>{stylist.rating}</b> <span>{stylist.reviews} reviews</span> ·{" "}
            <span>{stylist.location}</span>
          </div>
          <p>
            {stylist.bio}
          </p>
          <div className="tag-row">
            {stylist.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="booking-card">
          <p>Next available</p>
          <h3>Thursday, 14 March</h3>
          <div className="time-row">
            {["10:30", "13:00", "16:30"].map((x) => (
              <button key={x}>{x}</button>
            ))}
          </div>
          <button className="pill primary full" onClick={() => go("booking")}>
            Book with {stylist.name.split(" ")[0]} <Icon name="arrow" size={17} />
          </button>
          <small>No payment taken yet</small>
        </div>
      </div>
      <section className="profile-content">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>The portfolio</h2>
        </div>
        <div className="portfolio">
          {[photos.hero[0], photos.trend1, photos.hero[2], photos.trend2].map(
            (x, i) => (
              <img
                key={x}
                className={`p-${i}`}
                src={x}
                alt={`${stylist.name}'s hairstyle portfolio`}
              />
            ),
          )}
        </div>
        <div className="profile-columns">
          <div>
            <p className="eyebrow">The menu</p>
            <h2>Services</h2>
            {stylist.menu.map((x) => (
              <div className="service-line" key={x[0]}>
                <span>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </span>
                <strong>{x[2]}</strong>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow">Client love</p>
            <h2>Reviews</h2>
            <blockquote>
              “{stylist.review}”
              <footer>
                <b>{stylist.reviewer}</b>
                <span>Verified booking · February 2025</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  )
}

function Booking({ go, stylistId }: { go: (p: Page) => void; stylistId: number }) {
  const stylist = stylists.find((artist) => artist.id === stylistId) ?? stylists[0]
  const selectedService = stylist.menu[0]
  const [date, setDate] = useState(14)
  const [time, setTime] = useState("10:30")
  const [confirmed, setConfirmed] = useState(false)
  const unavailableDates = [8, 9, 15, 16, 22, 23]
  const timeSlots = ["10:30", "13:00", "14:30", "16:30"]
  const blockedTimes: Record<number, string[]> = {
    4: ["13:00"],
    5: ["16:30"],
    6: ["10:30", "14:30"],
    7: ["13:00"],
    10: ["10:30"],
    11: ["14:30"],
    12: ["13:00", "16:30"],
    13: ["10:30"],
    14: ["14:30"],
    17: ["13:00"],
    18: ["10:30", "16:30"],
    19: ["14:30"],
    20: ["13:00"],
    21: ["10:30"],
    24: ["14:30", "16:30"],
  }
  const isDateUnavailable = (day: number) => unavailableDates.includes(day)
  const isTimeUnavailable = (slot: string) => (blockedTimes[date] ?? []).includes(slot)
  const chooseDate = (day: number) => {
    if (isDateUnavailable(day)) return
    setDate(day)
    const nextAvailable = timeSlots.find((slot) => !(blockedTimes[day] ?? []).includes(slot))
    if (nextAvailable) setTime(nextAvailable)
  }
  if (confirmed)
    return (
      <main className="success-page">
        <div className="success-mark">
          <Icon name="check" size={36} />
        </div>
        <p className="eyebrow">You're all set</p>
        <h1>
          Your new look is
          <br />
          <em>in the diary.</em>
        </h1>
        <p>
          {stylist.name.split(" ")[0]} will see you Thursday, 14 March at {time}.
          We’ve sent the details to your inbox.
        </p>
        <div className="confirmation">
          <img src={stylist.image} alt={stylist.name} />
          <div>
            <small>Appointment with</small>
            <b>{stylist.name}</b>
            <span>{selectedService[0]} · {selectedService[2]}</span>
          </div>
        </div>
        <button className="pill primary" onClick={() => go("home")}>
          Back to home
        </button>
      </main>
    )
  return (
    <main className="booking-page">
      <div className="booking-form">
        <button className="back-link" onClick={() => go("profile")}>
          ← {stylist.name.split(" ")[0]}’s profile
        </button>
        <p className="eyebrow">Book your appointment</p>
        <h1>
          Pick your
          <br />
          <em>moment.</em>
        </h1>
        <label className="question-label">Choose a date · March 2025</label>
        <div className="availability-legend">
          <span><i className="legend-dot available" /> Available</span>
          <span><i className="legend-dot unavailable" /> Booked</span>
          <span><i className="legend-dot chosen" /> Selected</span>
        </div>
        <div className="calendar">
          <div className="weekdays">
            {["M", "T", "W", "T", "F", "S", "S"].map((x, i) => (
              <span key={i}>{x}</span>
            ))}
          </div>
          <div className="days">
            {Array.from({ length: 21 }, (_, i) => i + 4).map((d) => (
              <button
                key={d}
                disabled={isDateUnavailable(d)}
                className={`${date === d ? "selected" : isDateUnavailable(d) ? "unavailable" : "available"}`}
                onClick={() => chooseDate(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
        <label className="question-label">Available times</label>
        <div className="time-row large">
          {timeSlots.map((x) => (
            <button
              disabled={isTimeUnavailable(x)}
              className={time === x ? "selected" : isTimeUnavailable(x) ? "unavailable" : "available"}
              key={x}
              onClick={() => setTime(x)}
            >
              {x}
            </button>
          ))}
        </div>
        <p className="slot-note">Green slots are open. Red slots are already booked.</p>
      </div>
      <aside className="booking-summary">
        <p className="eyebrow">Your booking</p>
        <div className="summary-person">
          <img src={stylist.image} alt="" />
          <div>
            <b>{stylist.name}</b>
            <span>{stylist.location}</span>
          </div>
        </div>
        <div className="summary-line">
          <span>
            {selectedService[0]}<small>{selectedService[1]}</small>
          </span>
          <b>{selectedService[2]}</b>
        </div>
        <div className="summary-line">
          <span>
            <Icon name="clock" size={17} /> 14 March at {time}
          </span>
        </div>
        <div className="total">
          <span>Total</span>
          <b>{selectedService[2]}</b>
        </div>
        <button
          className="pill primary full"
          onClick={() => setConfirmed(true)}
        >
          Confirm booking <Icon name="arrow" size={17} />
        </button>
        <small>You won’t be charged in this prototype.</small>
      </aside>
    </main>
  )
}

function Collaborations({ go }: { go: (p: Page) => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  const [applied, setApplied] = useState<number[]>([])
  const [location, setLocation] = useState("All locations")
  const [category, setCategory] = useState("All services")
  const [offerType, setOfferType] = useState("All offers")
  const [submitted, setSubmitted] = useState(false)
  const [requestSent, setRequestSent] = useState(false)
  const [requestMode, setRequestMode] = useState(false)
  const [requestStudio, setRequestStudio] = useState("")
  const [requestSubmitted, setRequestSubmitted] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [applicationPendingPayment, setApplicationPendingPayment] = useState(false)
  const calls = [
    { title: "The New Romantic", studio: "Aaina Studio", place: "Bandra, Mumbai", service: "Hair styling", offer: "Discounted", price: "₹1,500 → ₹750", deadline: "24 Mar", availability: "2 spots left", image: photos.hero[1], profile: photos.stylist1, deliverables: "Before-and-after photos + social feature", duration: "90 minutes" },
    { title: "Texture in Motion", studio: "Keshya Studio", place: "Indiranagar, Bengaluru", service: "Makeover", offer: "Complimentary", price: "Complimentary", deadline: "30 Mar", availability: "4 spots left", image: photos.hero[0], profile: photos.stylist2, deliverables: "Short transformation video + portfolio feature", duration: "2 hours" },
    { title: "Future Classics", studio: "TRESSA Creative", place: "Hauz Khas, Delhi", service: "Colouring", offer: "Discounted", price: "₹3,000 → ₹1,500", deadline: "05 Apr", availability: "1 spot left", image: photos.trend4, profile: photos.stylist3, deliverables: "Before-and-after photos", duration: "2.5 hours" },
    { title: "The Soft Edit", studio: "Roop Studio", place: "Koregaon Park, Pune", service: "Haircut", offer: "Complimentary", price: "Complimentary", deadline: "12 Apr", availability: "3 spots left", image: photos.trend2, profile: photos.stylist4, deliverables: "Short video + social media feature", duration: "75 minutes" },
  ]
  const filtered = calls.filter((call) =>
    (location === "All locations" || call.place.includes(location)) &&
    (category === "All services" || call.service === category) &&
    (offerType === "All offers" || call.offer === offerType),
  )
  const active = selected === null ? null : calls[selected]
  const applicationComplete = selected !== null && applied.includes(selected)
  const apply = (index: number) => {
    setSelected(index)
    setSubmitted(false)
    setRequestSent(false)
    setRequestMode(false)
    setApplicationPendingPayment(true)
    window.setTimeout(() => {
      document.getElementById("collab-payment")?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 0)
  }
  return (
    <main className="collab-page">
      <section className="collab-intro page-main">
        <div>
          <p className="eyebrow">TRESSA model collaborations</p>
          <h1>Be the Face of the <em>Next Trend.</em></h1>
          <p>Discover exciting beauty experiences, collaborate with talented stylists and enjoy exclusive styling offers.</p>
        </div>
        <div className="collab-hero-model">
          <img src={photos.hero[1]} alt="Model showcasing a beauty transformation" />
          <span>New looks start here</span>
        </div>
      </section>
      <section className="offer-explainer page-main">
        <div className="page-heading">
          <p className="eyebrow">Before you apply</p>
          <h2>Choose the offer that suits you.</h2>
        </div>
        <div className="offer-explainer-grid">
          <article>
            <span className="offer-explainer-label">Complimentary</span>
            <h3>Enjoy the service at no cost.</h3>
            <p>The salon provides the agreed beauty service free of charge in exchange for the confirmed collaboration and content deliverables.</p>
          </article>
          <article>
            <span className="offer-explainer-label">Paid offer</span>
            <h3>Access a service at a special price.</h3>
            <p>You pay the discounted amount shown on the offer card while participating in the agreed collaboration and content session.</p>
          </article>
        </div>
        <p className="offer-explainer-note">Every deliverable, discount and content usage expectation is agreed with the salon before your appointment.</p>
      </section>
      
      <section className="collab-explore page-main">
        <div className="page-heading split">
          <div><p className="eyebrow">Open opportunities</p><h2>Find your next look.</h2></div>
          <p>Modelling experience is not required. Bring your personality and let the artist do the rest.</p>
        </div>
        <div className="collab-filters">
          <select value={location} onChange={(e) => setLocation(e.target.value)}><option>All locations</option><option>Mumbai</option><option>Bengaluru</option><option>Delhi</option><option>Pune</option></select>
          <select value={category} onChange={(e) => setCategory(e.target.value)}><option>All services</option><option>Hair styling</option><option>Haircut</option><option>Colouring</option><option>Makeover</option></select>
          <select value={offerType} onChange={(e) => setOfferType(e.target.value)}><option>All offers</option><option>Complimentary</option><option>Discounted</option></select>
        </div>
        <div className="offer-grid">
          {filtered.map((c) => {
            const index = calls.indexOf(c)
            return <article className="offer-card" key={c.title}>
              <div className="offer-image"><img src={c.image} alt={c.title} /><span>{c.offer}</span></div>
              <div className="offer-content">
                <div className="offer-studio"><img src={c.profile} alt="" /><small>{c.studio}</small></div>
                <h3>{c.title}</h3>
                <p><Icon name="pin" size={14} /> {c.place} · {c.service}</p>
                <small className="offer-detail">{c.deliverables}</small>
                <div className="offer-meta"><strong>{c.price}</strong><span>Apply by {c.deadline}</span></div>
                <span className="availability">{c.availability}</span>
                <div className="offer-actions"><button className="pill outline" onClick={() => setSelected(index)}>View details</button><button className="pill primary" onClick={() => apply(index)} disabled={applied.includes(index)}>{applied.includes(index) ? "Applied" : "Apply"} {!applied.includes(index) && <Icon name="arrow" size={15} />}</button></div>
              </div>
            </article>
          })}
        </div>
      </section>
      {active && <section className="collab-detail page-main">
        <button className="back-link" onClick={() => setSelected(null)}>← Back to opportunities</button>
        <div className="detail-layout">
          <div><img className="detail-image" src={active.image} alt={active.title} /></div>
          <div className="detail-copy">
            <p className="eyebrow">{active.studio} · {active.place}</p>
            <h2>{active.title}</h2>
            <p>Join a creative salon session and experience a tailored {active.service.toLowerCase()} with the TRESSA community.</p>
            <div className="detail-facts"><span><b>Offer</b>{active.price}</span><span><b>Duration</b>{active.duration}</span><span><b>Deadline</b>{active.deadline}</span></div>
            <h4>What you receive</h4><p>{active.deliverables}. Content is created and shared only with your consent.</p>
            <h4>Application notes</h4><p>No modelling experience is needed. Applicants should be comfortable participating in the agreed service and content session.</p>
            <div className="detail-actions">
              <button className="pill primary" onClick={() => apply(selected!)} disabled={applicationComplete}>{applicationComplete ? "Applied" : "Apply for this collaboration"} {!applicationComplete && <Icon name="arrow" size={16} />}</button>
            </div>
          </div>
        </div>
        <form className="application-form" onSubmit={(event) => {
          event.preventDefault()
          if (!paymentComplete) {
            setApplicationPendingPayment(true)
            document.getElementById("collab-payment")?.scrollIntoView({ behavior: "smooth", block: "center" })
            return
          }
          setApplied([...new Set([...applied, selected!])])
          setSubmitted(true)
          setRequestSent(requestMode)
        }}>
          <p className="eyebrow">{requestMode ? "Request the collaboration" : "Application"}</p><h3>{requestMode ? "Start a conversation with the business." : "Tell the artist a little about you."}</h3>
          {applicationPendingPayment && !paymentComplete && <p className="application-payment-prompt">Complete the resource fee below before submitting this application.</p>}
          <div className="form-grid"><input required placeholder="Your name" /><input required type="email" placeholder="Email address" /><input placeholder="Phone number" /><input type="url" placeholder="Portfolio or social link (optional)" /></div>
          <input type="text" placeholder="Preferred appointment availability" /><textarea required placeholder="Why are you interested in this collaboration?" rows={4} /><label className="consent"><input required type="checkbox" /> I agree to the collaboration terms and content consent expectations.</label>
          <button className="pill primary" type="submit">{submitted ? (requestMode ? "Request sent to business" : "Application submitted") : (requestMode ? "Send request" : "Submit Application")} {!submitted && <Icon name="arrow" size={16} />}</button>
        </form>
      </section>}

      <section className="collab-request page-main">
        <div className="page-heading split">
          <div><p className="eyebrow">Your idea, your invitation</p><h2>Send a request to a business.</h2></div>
          <p>Have a look in mind? Tell a salon or stylist what you would love to create together.</p>
        </div>
        <form className="request-form" onSubmit={(event) => { event.preventDefault(); setRequestSubmitted(true) }}>
          <select required value={requestStudio} onChange={(event) => setRequestStudio(event.target.value)}>
            <option value="">Choose a business</option>
            {calls.map((call) => <option key={call.studio} value={call.studio}>{call.studio} · {call.place}</option>)}
          </select>
          <textarea required placeholder="Tell the business about the look or collaboration you have in mind." rows={3} />
          <button className="pill primary" type="submit">{requestSubmitted ? "Request sent to business" : "Send request"} {!requestSubmitted && <Icon name="arrow" size={16} />}</button>
        </form>
      </section>
      
      <section className="my-collabs page-main">
        <div className="page-heading"><p className="eyebrow">Your activity</p><h2>My collaborations.</h2></div>
        <div className="collab-status-grid">
          {[["Applications submitted", applied.length, "Review your applications"], ["Pending responses", applied.length, "Awaiting salon response"], ["Accepted collaborations", 0, "Your confirmed looks"], ["Upcoming appointments", 0, "Your next sessions"], ["Completed collaborations", 1, "Your finished transformations"]].map(([label, count, text]) => <article key={label}><strong>{count}</strong><span>{label}</span><small>{text}</small></article>)}
        </div>
        <article className="completed-collab">
          <div><span className="completed-badge">Completed</span><h3>Texture in Motion</h3><p>Keshya Studio · Makeover · Indiranagar, Bengaluru</p></div>
    <small className="completed-history-note">Payment available below</small>
        </article>
      </section>
<section id="collab-payment" className="collab-payment page-main">
  <div className="payment-section-copy">
    <p className="eyebrow">Collaboration resources</p>
    <h2>{applicationPendingPayment && !paymentComplete ? "Complete your resource fee to apply." : "Everything your next look needs."}</h2>
    <p>
      {applicationPendingPayment && !paymentComplete
        ? "Your application is ready. Click the payment button to unlock the final submission."
        : "Your completed collaboration is recorded here, with a clear resource fee settled after the experience."}
    </p>
  </div>
  <div className="payment-card">
    <div className="payment-card-heading">
      <div><span className="completed-badge">{applicationPendingPayment && !paymentComplete ? "Application fee" : "Ready to pay"}</span><h3>{applicationPendingPayment && !paymentComplete && active ? active.title : "Texture in Motion"}</h3><small>{applicationPendingPayment && !paymentComplete && active ? `${active.studio} · Collaboration application` : "Keshya Studio · Completed collaboration"}</small></div>
      <strong>5%</strong>
    </div>
    <div className="payment-summary-row"><span>Payment status</span><b>{paymentComplete ? "Complete" : "Due after completion"}</b></div>
    <button className="pill primary" onClick={() => {
      setPaymentComplete(true)
      setApplicationPendingPayment(false)
      if (selected !== null) {
        setApplied([...new Set([...applied, selected])])
        setSubmitted(true)
      }
    }} disabled={paymentComplete}>
      {paymentComplete ? "Payment complete" : applicationPendingPayment ? "Pay resource fee to apply" : "Pay TRESSA"} {!paymentComplete && <Icon name="arrow" size={15} />}
    </button>
    <small className="payment-note">{paymentComplete ? "Thank you for using TRESSA to bring your collaboration to life." : "The final resource fee is shown before payment confirmation."}</small>
  </div>
</section>

<section className="collab-fee-note page-main">
        <div>
          <p className="eyebrow">The TRESSA 5% resource fee</p>
          <h2>Use the platform. Pay for the value.</h2>
          <p>
            When a collaboration succeeds, both sides pay 5% of their agreed
            collaboration value for the TRESSA resources used to discover,
            coordinate and complete the experience.
          </p>
        </div>
        <div className="collab-fee-grid">
          <article>
            <span className="collab-fee-amount">5%</span>
            <strong>Customer resource fee</strong>
            <small>5% is charged on the customer’s agreed value for discovery, coordination and support.</small>
          </article>
          <article>
            <span className="collab-fee-amount">5%</span>
            <strong>Business resource fee</strong>
            <small>5% is charged on the business’s agreed value for access to collaboration resources and tools.</small>
          </article>
        </div>
        <p className="offer-explainer-note">
          No successful collaboration, no 5% resource fee. The amount and
          calculation base are shown clearly to both sides before confirmation.
        </p>
        <blockquote className="collab-fee-quote">
          “You use the resources. We keep building what makes the next great
          collaboration possible.”
        </blockquote>
      </section>

    </main>
  )
}

function ForStylists({ go }: { go: (p: Page) => void }) {
  return (
    <main className="stylist-landing">
      <section className="pro-hero">
        <div>
          <p className="eyebrow">For independent stylists</p>
          <h1>
            Talent like yours
            <br />
            deserves to be <em>seen.</em>
          </h1>
          <p>
            TRESSA puts your work in front of the right clients, supports your
            creative growth, and keeps you in control.
          </p>
          <div>
            <button
              className="pill light"
              onClick={() =>
                alert(
                  "Thanks for your interest! Stylist onboarding is coming soon.",
                )
              }
            >
              Join TRESSA <Icon name="arrow" size={17} />
            </button>
            <button
              className="plain-button"
              onClick={() =>
                document
                  .getElementById("plans")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See how it works
            </button>
          </div>
        </div>
        <img src={photos.hero[2]} alt="Creative independent hair stylist" />
      </section>
      <section className="pro-benefits section">
        <SectionTitle
          eyebrow="Your chair. Your rules."
          title="We handle discovery. You do your best work."
        />
        <div>
          {[
            [
              "01",
              "Get discovered",
              "Showcase your portfolio to clients actively searching for your craft.",
            ],
            [
              "02",
              "Grow your book",
              "Fill quiet slots and build relationships with clients who come back.",
            ],
            [
              "03",
              "Create & collaborate",
              "Join campaigns, test new looks and work with emerging talent.",
            ],
            [
              "04",
              "Build your name",
              "Promote your work with editorial features and sponsored placements.",
            ],
          ].map((x) => (
            <article key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="plans" className="plans section">
        <SectionTitle
          eyebrow="Simple, transparent pricing"
          title="Choose how you grow."
        />
        <div className="plan-grid">
          <article>
            <p>Pay as you grow</p>
            <h3>
              12% <span>/ booking</span>
            </h3>
            <ul>
              <li>
                <Icon name="check" />
                Free profile and portfolio
              </li>
              <li>
                <Icon name="check" />
                Client discovery
              </li>
              <li>
                <Icon name="check" />
                Booking management
              </li>
            </ul>
            <button className="pill outline">Start free</button>
          </article>
          <article className="featured">
            <small>Most popular</small>
            <p>TRESSA Pro</p>
            <h3>
              ₹2,400 <span>/ month</span>
            </h3>
            <ul>
              <li>
                <Icon name="check" />
                Everything in free
              </li>
              <li>
                <Icon name="check" />
                Only 5% booking commission
              </li>
              <li>
                <Icon name="check" />
                Sponsored promotion credits
              </li>
              <li>
                <Icon name="check" />
                Priority collaboration access
              </li>
            </ul>
            <button className="pill light">Join the waitlist</button>
          </article>
          <article>
            <p>Sponsored</p>
            <h3>
              From ₹700 <span>/ day</span>
            </h3>
            <ul>
              <li>
                <Icon name="check" />
                Boost specific services
              </li>
              <li>
                <Icon name="check" />
                Reach local clients
              </li>
              <li>
                <Icon name="check" />
                Pause any time
              </li>
            </ul>
            <button className="pill outline">Learn more</button>
          </article>
        </div>
      </section>
      <section className="pro-cta">
        <h2>
          Ready for your next
          <br />
          <em>chapter?</em>
        </h2>
        <p>Join the next generation of independent beauty talent.</p>
        <button className="pill light" onClick={() => go("home")}>
          Get started <Icon name="arrow" size={17} />
        </button>
      </section>
    </main>
  )
}

function Login({ go }: { go: (p: Page) => void }) {
  const [mode, setMode] = useState<"user" | "business">("user")
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-intro">
          <p className="eyebrow">Welcome back</p>
          <h1>
            Your next
            <br />
            look starts <em>here.</em>
          </h1>
          <p>
            Sign in to manage your bookings, discover new looks and keep your
            TRESSA world in one place.
          </p>
        </div>
        <form
          className="login-form"
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
            window.setTimeout(
              () => go(mode === "business" ? "business" : "home"),
              500,
            )
          }}
        >
          <div className="login-modes">
            <button
              type="button"
              className={mode === "user" ? "selected" : ""}
              onClick={() => setMode("user")}
            >
              <Icon name="user" size={16} /> Login as User
            </button>
            <button
              type="button"
              className={mode === "business" ? "selected" : ""}
              onClick={() => setMode("business")}
            >
              <Icon name="business" size={16} /> Login as Business
            </button>
          </div>
          <label>
            Username
            <input name="username" type="text" autoComplete="username" />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              autoComplete="current-password"
            />
          </label>
          <button className="pill primary login-submit" type="submit">
            {submitted ? "Signing you in..." : `Continue as ${mode}`}
            {!submitted && <Icon name="arrow" size={17} />}
          </button>
          <button className="login-back" type="button" onClick={() => go("home")}>
            Back to TRESSA
          </button>
        </form>
      </section>
    </main>
  )
}

function BusinessDashboard({ go }: { go: (p: Page) => void }) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")
  const [businessPaymentComplete, setBusinessPaymentComplete] = useState(false)
  const plans = [
    {
      name: "STARTER",
      price: "Free",
      period: "for 2 Months",
      tagline: "Get discovered. Build your presence.",
      features: [
        "Business portfolio",
        "Service listings",
        "Booking management",
        "Free access for the first 2 months",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "PRO",
      price: billing === "monthly" ? "₹2,000" : "₹15,000",
      period: billing === "monthly" ? "/month" : "/year",
      tagline: "Turn visibility into business growth.",
      features: [
        "Everything in Starter",
        "Unlimited bookings",
        "Basic business insights",
        "Promotional tools",
      ],
      cta: "Choose Pro",
      popular: true,
    },
    {
      name: "PRO-PLUS",
      price: billing === "monthly" ? "₹10,000" : "₹80,000",
      period: billing === "monthly" ? "/month" : "/year",
      tagline: "Build influence. Measure growth. Scale further.",
      features: [
        "Everything in Pro",
        "Model collaborations",
        "Referral collaborations",
        "Advanced business analytics",
      ],
      cta: "Get Pro-Plus",
      premium: true,
    },
  ]

  return (
    <main className="business-page">
      <section className="business-hero">
        <div>
          <p className="eyebrow">TRESSA for business</p>
          <h1>
            Your studio,
            <br />
            <em>your next chapter.</em>
          </h1>
          <p>Manage your salon, showcase your team and grow your bookings.</p>
          <button className="pill light" onClick={() => go("home")}>
            Back to TRESSA <Icon name="arrow" size={17} />
          </button>
        </div>
        <div className="business-visual">
          <img
            src={photos.hero[2]}
            alt="Creative beauty studio styling a client"
          />
          <div className="business-profile">
            <Icon name="business" size={28} />
            <span>Business profile</span>
            <strong>Ready to get started</strong>
          </div>
        </div>
      </section>
      <section className="business-tools section">
        <SectionTitle eyebrow="Your workspace" title="Everything in one place." />
        <div>
          <article>
            <span className="business-tool-number">01</span>
            <Icon name="business" size={22} />
            <h3>Studio profile</h3>
            <p>Add your services, team and story.</p>
          </article>
          <article>
            <span className="business-tool-number">02</span>
            <Icon name="clock" size={22} />
            <h3>Bookings</h3>
            <p>Keep your appointments moving.</p>
            <button className="business-tool-link">
              View all bookings <Icon name="arrow" size={15} />
            </button>
          </article>
          <article>
            <span className="business-tool-number">03</span>
            <Icon name="user" size={22} />
            <h3>Collaborations</h3>
            <p>Reach people looking for their next look.</p>
            <strong className="business-collab-count">3 active collaborations</strong>
          </article>
        </div>
      </section>
      <section className="business-collaboration-payment section">
        <div>
          <p className="eyebrow">Collaboration resources</p>
          <h2>Everything your next collaboration needs.</h2>
          <p>
            Track completed opportunities and settle the platform resource fee
            after the agreed collaboration is complete.
          </p>
        </div>
        <div className="business-payment-card">
          <div className="payment-card-heading">
            <div><span className="completed-badge">Ready to pay</span><h3>Texture in Motion</h3><small>Keshya Studio · Completed collaboration</small></div>
            <strong>5%</strong>
          </div>
          <div className="payment-summary-row"><span>Payment status</span><b>{businessPaymentComplete ? "Complete" : "Due after completion"}</b></div>
          <button className="pill primary" onClick={() => setBusinessPaymentComplete(true)} disabled={businessPaymentComplete}>
            {businessPaymentComplete ? "Payment complete" : "Pay TRESSA"} {!businessPaymentComplete && <Icon name="arrow" size={15} />}
          </button>
          <p className="payment-note">{businessPaymentComplete ? "Thank you for using TRESSA to make the collaboration happen." : "The final resource fee is shown before payment confirmation."}</p>
        </div>
      </section>
      <section className="business-success-note section">
        <div>
          <p className="eyebrow">A shared resource model</p>
          <h2>More access. More creative opportunities.</h2>
          <p>
            TRESSA provides the discovery, coordination and tools that help
            customers and businesses create better collaborations. A clear
            resource fee is settled after completion.
          </p>
        </div>
        <div className="business-success-quote">
          “Your success helps another artist, customer or opportunity find its
          next beginning.”
        </div>
      </section>

              <div className="roadmap-finale">
          <p className="eyebrow">Your next stage starts here</p>
          <h3>Your creativity builds the business. TRESSA helps it grow.</h3>
          <p>
            Start with a professional presence, expand your reach, create
            meaningful collaborations and unlock deeper business intelligence.
          </p>
          <strong>Build your presence. Showcase your artistry. Make smarter decisions.</strong>
          <div>
            <button className="pill primary" disabled>
              Current plan · Free trial
            </button>
            <button className="pill outline">Explore Business Plans <Icon name="arrow" size={16} /></button>
          </div>
        </div>


   <section className="proplus-walkthrough section">
        <div className="walkthrough-heading">
          <SectionTitle
            eyebrow="The TRESSA business roadmap"
            title="Build your presence. Grow with purpose."
            copy="Move through four stages as your artistry, reach and business intelligence grow."
          />
          <span className="demo-badge">Your growth journey</span>
        </div>
        <div className="roadmap">
          <div className="roadmap-track">
          {[
            {
              number: "01",
              title: "Build your presence",
              heading: "Get discovered. Build your reputation.",
              icon: "business",
              intro: "Give your business a polished home on TRESSA.",
              doTitle: "Build",
              doItems: [
                "Business profile",
                "Portfolio & transformations",
                "Services, pricing & bookings",
              ],
              benefitTitle: "The result",
              benefits: [
                "Look professional",
                "Get discovered",
                "Turn interest into bookings",
              ],
              message: "Your work deserves to be seen.",
            },
            {
              number: "02",
              title: "Grow your reach",
              heading: "Turn visibility into real opportunities.",
              icon: "arrow",
              intro: "Turn discovery into meaningful customer opportunities.",
              doTitle: "Grow",
              doItems: [
                "Discovery tools",
                "Seasonal promotions",
                "Views, enquiries & bookings",
              ],
              benefitTitle: "The result",
              benefits: [
                "Reach new customers",
                "Spot popular services",
                "Know what to improve",
              ],
              message: "Don't just get discovered. Turn attention into opportunities.",
            },
            {
              number: "03",
              title: "Model collaborations",
              heading: "Create transformations. Build your brand story.",
              icon: "user",
              intro: "Create real transformations and share the story.",
              doTitle: "The flow",
              doItems: [
                "Discover a model",
                "Make an agreed offer",
                "Create the transformation",
                "Showcase approved content",
              ],
              benefitTitle: "The result",
              benefits: [
                "Fresh portfolio content",
                "Authentic promotion",
                "More trust and visibility",
              ],
              message: "Your next great portfolio transformation could begin with a collaboration.",
            },
            {
              number: "04",
              title: "Advanced business analytics",
              heading: "Go beyond numbers. Discover what drives growth.",
              icon: "clock",
              intro: "Turn business activity into your next smart move.",
              doTitle: "See",
              doItems: [
                "Customer behaviour",
                "Demand & seasonal trends",
                "Service & revenue performance",
                "Campaign & collaboration ROI",
              ],
              benefitTitle: "The result",
              benefits: [
                "Make informed decisions",
                "Improve retention",
                "Plan with confidence",
              ],
              message: "Don't just track your growth. Understand how to accelerate it.",
            },
          ].map((stage) => (
            <article className="roadmap-stage" key={stage.number}>
              <span className="roadmap-stage-number">{stage.number}</span>
              <Icon name={stage.icon} size={22} />
              <h3>{stage.title}</h3>
              <h4>{stage.heading}</h4>
              <p>{stage.intro}</p>
              <strong>{stage.doTitle}</strong>
              <ul>
                {stage.doItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <strong>{stage.benefitTitle}</strong>
              <ul>
                {stage.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <em>{stage.message}</em>
            </article>
          ))}
          </div>
        </div>

      </section>
        
      <section className="business-pricing section">
        <div className="pricing-heading">
          <SectionTitle
            eyebrow="Business subscription plans"
            title="Choose how your studio grows."
            copy="Start with the essentials, then scale when the moment feels right."
          />
          <div className="billing-toggle" aria-label="Billing period">
            <button
              className={billing === "monthly" ? "selected" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={billing === "yearly" ? "selected" : ""}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${plan.popular ? "popular" : ""} ${
                plan.premium ? "premium" : ""
              }`}
              key={plan.name}
            >
              {plan.popular && <span className="popular-label">Most popular</span>}
              {plan.name === "STARTER" && (
                <span className="current-plan-label">Current plan</span>
              )}
              <p className="pricing-plan-name">{plan.name}</p>
              <div className="pricing-price">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>
              {plan.name !== "STARTER" && (
                <small className="annual-saving">
                  {plan.name === "PRO"
                    ? "Save ₹9,000/year"
                    : "Save ₹40,000/year"}
                </small>
              )}
              <p className="pricing-tagline">{plan.tagline}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="check" size={16} /> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`pill ${plan.premium ? "light" : plan.popular ? "light" : "outline"}`}
                disabled={plan.name === "STARTER"}
              >
                {plan.name === "STARTER" ? "Current plan" : plan.cta}{" "}
                {plan.name !== "STARTER" && <Icon name="arrow" size={16} />}
              </button>
            </article>
          ))}
        </div>
        <p className="trial-note">
          Starter is free for the first 2 months. Post-trial pricing policy is
          configurable.
        </p>
        <div className="comparison-wrap">
          <div className="comparison-heading">
            <div>
              <p className="eyebrow">Side by side</p>
              <h3>Compare plans</h3>
            </div>
            <span>Pick the pace that feels right.</span>
          </div>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th>Pro</th>
                <th>Pro-Plus</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Business portfolio", "✓", "✓", "✓"],
                ["Service listings", "✓", "✓", "✓"],
                ["Booking management", "✓", "✓", "✓"],
                ["Unlimited bookings", "—", "✓", "✓"],
                ["Basic business insights", "—", "✓", "✓"],
                ["Promotional tools", "—", "✓", "✓"],
                ["Model collaborations", "—", "—", "✓"],
                ["Referral collaborations", "—", "—", "✓"],
                ["Advanced business analytics", "—", "—", "✓"],
              ].map(([feature, starter, pro, proPlus]) => (
                <tr key={feature}>
                  <td>{feature}</td>
                  <td>{starter}</td>
                  <td>{pro}</td>
                  <td>{proPlus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
   
      <section className="analytics-preview section">
        <div className="analytics-heading">
          <SectionTitle
            eyebrow="Pro-Plus analytics preview"
            title="See the story behind every booking."
            copy="Advanced intelligence to help you understand demand, retention and growth."
          />
          <span className="demo-badge">Illustrative demo data</span>
        </div>
        <div className="analytics-dashboard">
          <div className="analytics-widgets">
            <article>
              <span>Booking conversion</span>
              <strong>68%</strong>
              <small>Illustrative demo data</small>
            </article>
            <article>
              <span>Repeat customers</span>
              <strong>42%</strong>
              <small>Illustrative demo data</small>
            </article>
            <article>
              <span>Revenue trend</span>
              <strong>↗ 24%</strong>
              <small>Illustrative demo data</small>
            </article>
            <article>
              <span>Demand forecast</span>
              <strong>High</strong>
              <small>Illustrative demo data</small>
            </article>
          </div>
          <div className="analytics-chart">
            <div>
              <span>Revenue intelligence</span>
              <strong>Service performance & seasonal trends</strong>
            </div>
            <div className="chart-bars">
              {[42, 58, 48, 76, 64, 88, 70].map((height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="analytics-insights">
            <p className="eyebrow">Business recommendations</p>
            <h3>Turn insight into your next best move.</h3>
            <p>
              Customer segmentation, churn analysis and campaign or
              collaboration ROI help shape data-driven growth recommendations.
            </p>
          </div>
        </div>
      </section>
      <section className="business-conversion section">
        <p className="eyebrow">For salons and independent stylists</p>
        <h2>
          Your artistry
          <br />
          deserves to <em>grow.</em>
        </h2>
        <p>
          Build visibility, acquire customers, manage bookings, promote your
          work, unlock collaborations and grow with business intelligence.
        </p>
        <button className="pill light">
          Start your TRESSA journey <Icon name="arrow" size={17} />
        </button>
      </section>
    </main>
  )
}

function Footer({ go }: { go: (p: Page) => void }) {
  return (
    <footer>
      <div>
        <button className="brand light-brand" onClick={() => go("home")}>
          TRESSA<span>.</span>
        </button>
        <p>A new look. A new you.</p>
      </div>
      <div className="footer-links">
        <section>
          <b>Discover</b>
          <button onClick={() => go("explore")}>Explore stylists</button>
          <button onClick={() => go("consultation")}>Find my look</button>
          <button onClick={() => go("collaborations")}>Collaborations</button>
        </section>
        <section>
          <b>For talent</b>
          <button onClick={() => go("stylists")}>Join as a stylist</button>
          <button onClick={() => go("stylists")}>Pricing</button>
          <button onClick={() => go("stylists")}>Community</button>
        </section>
        <section>
          <b>Follow the looks</b>
          <button>
            <Icon name="instagram" size={17} /> Instagram
          </button>
          <button>TikTok</button>
          <button>Pinterest</button>
        </section>
      </div>
      <div className="footer-bottom">
        <span>© 2025 TRESSA</span>
        <span>Made for your next era.</span>
      </div>
    </footer>
  )
}

export default function App() {
  const routeForPath = (path: string): Page =>
    path === "/business" ? "business" : path === "/login" ? "login" : "home"
  const [page, setPage] = useState<Page>(() =>
    routeForPath(window.location.pathname),
  )
  const [transitioning, setTransitioning] = useState(false)
  const [trend, setTrend] = useState("")
  const [search, setSearch] = useState({ service: "", location: "" })
  const [selectedStylistId, setSelectedStylistId] = useState(1)
  useEffect(() => {
    const handlePopState = () => setPage(routeForPath(window.location.pathname))
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])
  const go = (p: Page) => {
    if (p === page) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (p === "business" || p === "login" || p === "home") {
      const path = p === "home" ? "/" : `/${p}`
      window.history.pushState({}, "", path)
    }
    setTransitioning(true)
    const transitionDelay = window.scrollY > 80 ? 420 : 280
    window.scrollTo({ top: 0, behavior: "smooth" })
    window.setTimeout(() => {
      setPage(p)
      window.scrollTo({ top: 0 })
      window.setTimeout(() => setTransitioning(false), 80)
    }, transitionDelay)
  }
  return (
    <div className="app">
      <Header page={page} go={go} />
      <div
        className={`page-stage ${transitioning ? "is-leaving" : "is-entering"}`}
      >
        {page === "home" && (
          <Home go={go} chooseTrend={setTrend} setSearch={setSearch} selectStylist={setSelectedStylistId} />
        )}
        {page === "explore" && <Explore go={go} initial={search} selectStylist={setSelectedStylistId} />}
        {page === "consultation" && <Consultation go={go} trend={trend} />}
        {page === "profile" && <Profile go={go} stylistId={selectedStylistId} />}
        {page === "booking" && <Booking go={go} stylistId={selectedStylistId} />}
        {page === "collaborations" && <Collaborations go={go} />}
        {page === "stylists" && <ForStylists go={go} />}
        {page === "login" && <Login go={go} />}
        {page === "business" && <BusinessDashboard go={go} />}
        {page !== "consultation" &&
          page !== "booking" &&
          page !== "login" &&
          page !== "business" && <Footer go={go} />}
      </div>
    </div>
  )
}
