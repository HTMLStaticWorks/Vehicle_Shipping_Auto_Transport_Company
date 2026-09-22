# ROADLINK AUTO — Vehicle Shipping & Auto Transport Commercial Template

> **“Reliable Vehicle Transport, From Pickup to Delivery.”**

A premium, commercial-grade HTML5 / Bootstrap 5 / Vanilla JavaScript template designed for nationwide vehicle transportation companies, auto shipping brokers, car hauling fleets, and automotive logistics operations. Built to ThemeForest and TemplateMonster commercial quality standards.

---

## 🌟 Key Features

- **19 Production-Ready HTML Pages**:
  - `index.html`: High-converting transport portal with quick quote calculator, nationwide interactive coverage map, 6 core services, how it works timeline, tracking preview, vehicle categories, and testimonials.
  - `home-2.html`: Genuinely different layout — Logistics Control Center inspired design with split-screen hero, live dispatch status panel, geographic lane review, Open vs Enclosed comparison matrix, logistics route pipeline, fleet visual, and transparent expectation overview.
  - `services.html`: Comprehensive catalog of 8 specialized auto transport services with specifications and direct links.
  - `service-details.html`: Reusable service specifications template with breadcrumbs, hero, overview, who it's for, key benefits, 5-step prep checklist, FAQ accordion, related services, and quote CTA.
  - `open-transport.html`: Dedicated Open Carrier transport deep dive.
  - `enclosed-transport.html`: Dedicated Enclosed Carrier transport deep dive.
  - `door-to-door.html`: Door-to-Door delivery logistics and street clearance guidelines.
  - `dealer-transport.html`: B2B Dealership inventory movement, multi-vehicle batch hauling, and auction logistics.
  - `shipping-solutions.html`: Target solution matrix (Nationwide, Cross-Country, Dealer/Auction, Luxury/Classic, Relocation/Snowbird).
  - `shipping-process.html`: Illustrated 6-stage logistics workflow and 8-point vehicle preparation checklist.
  - `tracking.html`: Interactive shipment tracking portal with demo consignment ID `RL-2026-04821`, live status progress timeline, driver assignment specs, and checkpoint updates.
  - `get-a-quote.html`: Multi-section interactive quote calculator with field validation, required indicators, and instant estimated rate modal.
  - `about.html`: Company narrative, mission, transport philosophy, logistics approach, and core values.
  - `contact.html`: Central dispatch coordinates, interactive inquiry form with validation, and nationwide terminal visual.
  - `dashboard.html`: Customer portal for booking vehicle transport requests, tracking shipment status in real-time, viewing pickup/delivery windows, inspecting digital BOL reports, and managing payments.
  - `login.html`: Standalone authentication UI demonstration with password toggle (no dashboard redirect).
  - `signup.html`: Standalone registration UI demonstration with password confirmation (no dashboard redirect).
  - `forgot-password.html`: Password recovery UI demonstration with simulated reset confirmation.
  - `404.html`: Logistics-themed error page (*"Route Not Found"*).
  - `coming-soon.html`: Launch countdown timer with live days/hours/minutes/seconds and email subscription form.
  - `documentation/index.html`: Complete commercial template documentation.

- **Design System, RTL & Theme System**:
  - Logistics color palette: Deep Navy, Charcoal, White, Cool Gray, Restrained Blue, and Logistics Amber/Orange CTA accents.
  - Persistent Light / Dark Mode toggle powered by CSS custom properties and `localStorage` with system preference auto-detection.
  - **Full RTL (Right-to-Left) Support**: Native layout compatibility for Arabic and Hebrew with `localStorage` persistence and dedicated `RTL` navbar button.
  - Zero invisible text or contrast loss in either theme or layout direction.
  - Modern typography: `Space Grotesk` for bold headings + `Inter` for clean UI body text.

- **Interactive Modules**:
  - Customer Vehicle Transport Dashboard (`dashboard.html`).
  - Live front-end Shipment Tracking simulation (`RL-2026-04821`).
  - Interactive Quote Calculation modal with dynamic price ranges.
  - Subtle GSAP 3 entrance animations with automatic `prefers-reduced-motion` accessibility support.
  - Responsive sticky navigation bar with `Dashboard` menu, `RTL` toggle, styled `Sign Up` button, desktop dropdowns, and mobile drawer.
  - Floating back-to-top button and FAQ accordions.

- **Compliance & Integrity**:
  - **Zero Dashboard**: Authentication pages are front-end UI demonstrations only, with strictly no dashboard redirects.
  - **Demo Data Transparency**: All carrier statistics, testimonials, and tracking IDs are realistically framed as commercial template demo content.

---

## 📁 File Structure

```text
vehicle-shipping-auto-transport/
│
├── index.html                   # Home 1 (High-conversion portal)
├── home-2.html                  # Home 2 (Logistics control center layout)
│
├── services.html                # Comprehensive services catalog (8 services)
├── service-details.html         # Reusable service specifications template
│
├── open-transport.html          # Open Carrier hauling detailed page
├── enclosed-transport.html      # Enclosed Carrier hauling detailed page
├── door-to-door.html            # Door-to-Door delivery logistics page
├── dealer-transport.html        # B2B Dealer and fleet transport page
│
├── shipping-solutions.html      # Solutions matrix by audience & corridor
├── shipping-process.html        # 6-Stage logistics workflow & prep checklist
│
├── tracking.html                # Interactive shipment tracking portal
├── get-a-quote.html             # Multi-section quote calculator form
│
├── about.html                   # Brand story, safety standards & values
├── contact.html                 # Dispatch coordinates & inquiry form
├── dashboard.html               # Customer transport booking & tracking dashboard
│
├── login.html                   # Standalone authentication UI (no dashboard)
├── signup.html                  # Standalone registration UI (no dashboard)
├── forgot-password.html         # Password recovery UI with simulated link
│
├── 404.html                     # "Route Not Found" error page
├── coming-soon.html             # Live launch countdown timer page
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css    # Bootstrap 5.3.3 core CSS
│   │   ├── bootstrap-icons.min.css # Bootstrap Icons CSS
│   │   ├── style.css            # Master logistics design system
│   │   └── fonts/               # Offline icon webfonts
│   │
│   ├── js/
│   │   ├── bootstrap.bundle.min.js # Bootstrap 5.3.3 JS bundle
│   │   ├── gsap.min.js          # GSAP 3.12 animation library
│   │   └── main.js              # Application logic & interactive controllers
│   │
│   ├── images/
│   │   ├── hero/                # Hero transport photography
│   │   ├── vehicles/            # Vehicle category imagery
│   │   ├── transport/           # Vehicle loading & inspection
│   │   ├── logistics/           # Central dispatch & terminals
│   │   ├── trucks/              # Hauler rigs & driver cabs
│   │   ├── maps/                # Vector nationwide route maps
│   │   ├── services/            # Specialized carrier photos
│   │   └── blog/                # Article images
│   │
│   └── icons/
│       ├── logo.svg             # RoadLink Auto vector logo
│       └── favicon.svg          # Carrier shield favicon
│
├── documentation/
│   └── index.html               # Comprehensive template documentation
└── README.md                    # Project README
```

---

## 🚀 How to Run & Preview

Because this is a pure static HTML5 / CSS3 / Vanilla JavaScript template, no build tools, Node.js, or package managers are required:

1. Double-click `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).
2. Or serve via any local HTTP web server:
   ```bash
   # Python 3
   python -m http.server 8000

   # PHP
   php -S localhost:8000

   # Node / npx
   npx serve .
   ```
3. Navigate between pages using the sticky header navigation bar.

---

## 🎨 Design System Customization

All primary brand colors, typography, and theme tokens are defined in `assets/css/style.css`:

```css
:root {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;

  --color-primary: #1e40af;       /* Logistics Blue */
  --color-cta: #ea580c;           /* Amber/Orange Action Button */
  --color-secondary: #0f172a;     /* Deep Navy */
  --color-accent: #0284c7;        /* Route Cyan */
}
```

To alter the theme, simply edit these custom properties or add additional color tokens.

---

## 📱 Responsive Breakpoints Tested

- Mobile Phones: 320px, 360px, 375px, 390px, 414px, 425px
- Tablets: 768px, 800px, 1024px
- Laptops & Desktops: 1280px, 1366px, 1440px, 1920px, 2560px+

---

## 📄 License & Credits

- **Fonts**: [Google Fonts](https://fonts.google.com/) (Space Grotesk, Inter)
- **Framework**: [Bootstrap 5.3.3](https://getbootstrap.com/)
- **Icons**: [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/)
- **Animations**: [GSAP by GreenSock](https://greensock.com/gsap/)
- **Imagery**: Royalty-free automotive transport photography from Unsplash

Developed for commercial auto transport and logistics websites. All branding and data elements represent fictional demo template material.
