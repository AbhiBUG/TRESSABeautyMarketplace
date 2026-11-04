import { useEffect, useMemo, useRef, useState } from "react"

type Page = "home" | "explore" | "consultation" | "profile" | "booking" | "collaborations" | "stylists"

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
    name: "Maya Thompson",
    role: "Cut & colour artist",
    location: "Bandra, Mumbai",
    rating: 4.9,
    reviews: 128,
    price: 55,
    image: photos.stylist1,
    tags: ["Cuts", "Colour", "Waves"],
  },
  {
    id: 2,
    name: "Imani Rose",
    role: "Texture specialist",
    location: "Indiranagar, Bengaluru",
    rating: 5.0,
    reviews: 94,
    price: 48,
    image: photos.stylist2,
    tags: ["Braids", "Natural hair", "Silk press"],
  },
  {
    id: 3,
    name: "Sofia Lane",
    role: "Editorial stylist",
    location: "Hauz Khas, Delhi",
    rating: 4.8,
    reviews: 76,
    price: 70,
    image: photos.stylist3,
    tags: ["Occasion", "Updos", "Waves"],
  },
  {
    id: 4,
    name: "Alex Chen",
    role: "Precision cut specialist",
    location: "Koregaon Park, Pune",
    rating: 4.9,
    reviews: 112,
    price: 42,
    image: photos.stylist4,
    tags: ["Crops", "Fades", "Cuts"],
  },
]

const services = [
  {
    number: "01",
    title: "Weekly Hair Refresh",
    text: "Blow-dries, silk presses and finishing touches that keep your week looking good.",
    meta: "From £28 · 45 min",
  },
  {
    number: "02",
    title: "Special Occasion Styling",
    text: "Event-ready updos, curls and editorial looks made for your big moment.",
    meta: "From £45 · 75 min",
  },
  {
    number: "03",
    title: "Makeover & Beautification",
    text: "A full refresh with cut, colour and styling, tailored completely to you.",
    meta: "From £90 · 2.5 hrs",
  },
  {
    number: "04",
    title: "At-Home Beauty Services",
    text: "Top-rated professionals, all the glow-up, and zero travel from your door.",
    meta: "From £55 · At yours",
  },
]

const Icon = ({ name, size = 20 }: { name: string size?: number }) => {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
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

function Header({ page, go }: { page: Page go: (p: Page) => void }) {
  const [open, setOpen] = useState(false)
  const links: [string, Page, string?][] = [
    ["Explore", "explore"],
    ["Services", "home", "services"],
    ["Collaborations", "collaborations"],
    ["For Stylists", "stylists"],
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
        <button className="mobile-sign" onClick={() => navigate("explore")}>
          Sign in
        </button>
      </nav>
      <div className="header-actions">
        <button
          className="sign-in"
          onClick={() =>
            alert("Sign in is coming soon — explore freely for now.")
          }
        >
          Sign In
        </button>
        <button className="pill primary" onClick={() => navigate("explore")}>
          Find a stylist <Icon name="arrow" size={17} />
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
}: {
  stylist: typeof stylists[0]
  go: (p: Page) => void
}) {
  return (
    <article className="stylist-card" onClick={() => go("profile")}>
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
        <strong>from £{stylist.price}</strong>
      </div>
    </article>
  )
}

function Home({
  go,
  chooseTrend,
  setSearch,
}: {
  go: (p: Page) => void
  chooseTrend: (t: string) => void
  setSearch: (v: { service: string location: string }) => void
}) {
  const [hero, setHero] = useState(0)
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
              className="animated-title hero-title"
              aria-label="Your next look starts here"
            >
              {"Your next look starts here".split(" ").map((word, i) => (
                <span
                  key={word}
                  className={word === "here" ? "gradient-word" : ""}
                  style={
                    {
                      "--word-delay": `${0.12 + i * 0.1}s`,
                    } as React.CSSProperties
                  }
                >
                  {word}
                </span>
              ))}
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
                <span className="service-number">{s.number}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <small>{s.meta}</small>
                </div>
                <i>
                  <Icon name="arrow" />
                </i>
              </button>
            ))}
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
              {trends.map((t, i) => (
                <button
                  className={`trend-card trend-${i + 1}`}
                  key={t.name}
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
              <StylistCard key={s.id} stylist={s} go={go} />
            ))}
          </div>
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
              being featured in fresh promotional content. New face, new look,
              no modelling experience needed.
            </p>
            <div>
              <button
                className="pill light"
                onClick={() => go("collaborations")}
              >
                See open calls <Icon name="arrow" size={17} />
              </button>
              <small>From £20 · Limited spots</small>
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
}: {
  go: (p: Page) => void
  initial: { service: string location: string }
}) {
  const [service, setService] = useState(initial.service)
  const [location, setLocation] = useState(initial.location)
  const [budget, setBudget] = useState(100)
  const [sort, setSort] = useState("Recommended")
  const filtered = useMemo(
    () =>
      stylists.filter(
        (s) =>
          s.price <= budget &&
          (!service ||
            service.includes("Weekly") ||
            s.tags.some((t) =>
              service.toLowerCase().includes(t.toLowerCase()),
            )),
      ),
    [budget, service],
  )
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
          Budget <span>Up to £{budget}</span>
          <input
            type="range"
            min="35"
            max="120"
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
            <StylistCard key={s.id} stylist={s} go={go} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>No exact matches just yet</h3>
          <p>Try a higher budget or browse all services.</p>
          <button
            className="pill primary"
            onClick={() => {
              setBudget(120)
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

function Consultation({ go, trend }: { go: (p: Page) => void trend: string }) {
  const [step, setStep] = useState(1)
  const [look, setLook] = useState(trend)
  const [hair, setHair] = useState("")
  const [occasion, setOccasion] = useState("")
  const [budget, setBudget] = useState("£40–£70")
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
              ["Under £40", "£40–£70", "£70–£120", "£120+"],
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

function Profile({ go }: { go: (p: Page) => void }) {
  const stylist = stylists[0]
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
            Maya
            <br />
            <em>Thompson.</em>
          </h1>
          <div className="profile-rating">
            <Icon name="star" size={18} /> <b>4.9</b> <span>128 reviews</span> ·{" "}
            <span>{stylist.location}</span>
          </div>
          <p>
            Known for soft, wearable cuts and colour that grows out beautifully.
            I want you to leave feeling like yourself—just turned all the way
            up.
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
            Book with Maya <Icon name="arrow" size={17} />
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
                alt="Maya's hairstyle portfolio"
              />
            ),
          )}
        </div>
        <div className="profile-columns">
          <div>
            <p className="eyebrow">The menu</p>
            <h2>Services</h2>
            {[
              ["Signature cut & finish", "75 min", "£65"],
              ["Gloss, tone & style", "90 min", "£85"],
              ["Soft wave styling", "60 min", "£55"],
              ["Full transformation", "3 hrs", "£165"],
            ].map((x) => (
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
              “Maya completely understood the assignment. My cut looks amazing
              even when I style it myself—which never happens.”
              <footer>
                <b>Nia K.</b>
                <span>Verified booking · February 2025</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  )
}

function Booking({ go }: { go: (p: Page) => void }) {
  const [date, setDate] = useState(14)
  const [time, setTime] = useState("10:30")
  const [confirmed, setConfirmed] = useState(false)
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
          Maya will see you Thursday, 14 March at {time}. We’ve sent the details
          to your inbox.
        </p>
        <div className="confirmation">
          <img src={photos.stylist1} alt="Maya Thompson" />
          <div>
            <small>Appointment with</small>
            <b>Maya Thompson</b>
            <span>Signature cut & finish · £65</span>
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
          ← Maya’s profile
        </button>
        <p className="eyebrow">Book your appointment</p>
        <h1>
          Pick your
          <br />
          <em>moment.</em>
        </h1>
        <label className="question-label">Choose a date · March 2025</label>
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
                disabled={[8, 9, 15, 16, 22, 23].includes(d)}
                className={date === d ? "selected" : ""}
                onClick={() => setDate(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
        <label className="question-label">Available times</label>
        <div className="time-row large">
          {["10:30", "13:00", "14:30", "16:30"].map((x) => (
            <button
              className={time === x ? "selected" : ""}
              key={x}
              onClick={() => setTime(x)}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <aside className="booking-summary">
        <p className="eyebrow">Your booking</p>
        <div className="summary-person">
          <img src={photos.stylist1} alt="" />
          <div>
            <b>Maya Thompson</b>
            <span>Bandra, Mumbai</span>
          </div>
        </div>
        <div className="summary-line">
          <span>
            Signature cut & finish<small>75 minutes</small>
          </span>
          <b>£65</b>
        </div>
        <div className="summary-line">
          <span>
            <Icon name="clock" size={17} /> 14 March at {time}
          </span>
        </div>
        <div className="total">
          <span>Total</span>
          <b>£65</b>
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
  const [applied, setApplied] = useState<number[]>([])
  const calls = [
    {
      title: "The New Romantic",
      studio: "Studio Sonder",
      place: "Bandra, Mumbai",
      date: "24 Mar",
      price: "£25",
      image: photos.hero[1],
    },
    {
      title: "Texture in Motion",
      studio: "Curl House",
      place: "Indiranagar, Bengaluru",
      date: "30 Mar",
      price: "Free",
      image: photos.hero[0],
    },
    {
      title: "Future Classics",
      studio: "TRESSA Creative",
      place: "Hauz Khas, Delhi",
      date: "05 Apr",
      price: "£30",
      image: photos.trend4,
    },
  ]
  return (
    <main className="page-main collabs-page">
      <div className="page-heading split">
        <div>
          <p className="eyebrow">Tressa collaborations</p>
          <h1>
            Your look could
            <br />
            start a <em>movement.</em>
          </h1>
        </div>
        <p>
          Try a creative look at a fraction of the price, and star in content
          made with some of the city’s freshest beauty talent.
        </p>
      </div>
      <div className="call-grid">
        {calls.map((c, i) => (
          <article className="call-card" key={c.title}>
            <div>
              <img src={c.image} alt={c.title} />
              <span>{i === 0 ? "Closing soon" : "Open call"}</span>
            </div>
            <section>
              <small>{c.studio}</small>
              <h2>{c.title}</h2>
              <p>
                <Icon name="pin" size={15} /> {c.place} · {c.date}
              </p>
              <div>
                <strong>{c.price}</strong>
                <button
                  className={`pill ${
                    applied.includes(i) ? "applied" : "primary"
                  }`}
                  onClick={() => setApplied([...applied, i])}
                >
                  {applied.includes(i) ? (
                    <>
                      <Icon name="check" size={17} /> Applied
                    </>
                  ) : (
                    <>
                      View & apply <Icon name="arrow" size={17} />
                    </>
                  )}
                </button>
              </div>
            </section>
          </article>
        ))}
      </div>
      <div className="how-it-works">
        <p className="eyebrow">How it works</p>
        <div>
          {[
            [
              "01",
              "Find your call",
              "Choose a look and brief that feels like you.",
            ],
            [
              "02",
              "Apply in a minute",
              "Tell the creative team a little about yourself.",
            ],
            [
              "03",
              "Get styled",
              "If selected, enjoy a discounted session and your main-character moment.",
            ],
          ].map((x) => (
            <article key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </div>
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
              £29 <span>/ month</span>
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
              From £8 <span>/ day</span>
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
  const [page, setPage] = useState<Page>("home")
  const [transitioning, setTransitioning] = useState(false)
  const [trend, setTrend] = useState("")
  const [search, setSearch] = useState({ service: "", location: "" })
  const go = (p: Page) => {
    if (p === page) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
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
          <Home go={go} chooseTrend={setTrend} setSearch={setSearch} />
        )}
        {page === "explore" && <Explore go={go} initial={search} />}
        {page === "consultation" && <Consultation go={go} trend={trend} />}
        {page === "profile" && <Profile go={go} />}
        {page === "booking" && <Booking go={go} />}
        {page === "collaborations" && <Collaborations go={go} />}
        {page === "stylists" && <ForStylists go={go} />}
        {page !== "consultation" && page !== "booking" && <Footer go={go} />}
      </div>
    </div>
  )
}
