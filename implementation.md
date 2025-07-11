# Implementation Plan

## Routing and Authentication Enhancements
- [ ] Step 1: Install React Router and Set Up Basic Routing
  - **Task**: Install react-router-dom, configure routing in App.tsx to handle public (Landing) and private routes (Dashboard, etc.), and wrap private routes with an auth check using Supabase session. Define routes for / (Landing), /dashboard, /new-shipment, /history, /templates, /settings. Redirect logged-in users from / to /dashboard.
  - **Description**: This establishes client-side routing to separate logged-in views from the public landing page, ensuring secure access to app features per PRD's auth requirements. It prevents unauthorized access and enables seamless navigation post-login.
  - **Files**:
    - `package.json`: Add react-router-dom as a dependency.
    - `src/App.tsx`: Import BrowserRouter, Routes, Route; add auth listener to check session and render routes conditionally.
    - `src/main.tsx`: Wrap App with Router if needed.
    - `src/utils/supabaseClient.ts`: Export a hook or function to get current session.
  - **Step Dependencies**: None (builds on existing Supabase setup from landing page plan).
  - **Agent Instructions**: After changes, run `npm install` and `npm run dev`; test by logging in/out to verify redirects (e.g., logged-in user sees /dashboard instead of landing).

- [ ] Step 2: Create Private Route Wrapper Component
  - **Task**: Build a PrivateRoute component that checks Supabase session; if not authenticated, redirect to / (Landing) with a toast notification; otherwise, render the child component. Apply this to all logged-in routes in App.tsx.
  - **Description**: Enhances security by protecting logged-in pages, aligning with PRD's JWT auth and non-functional security requirements. This ensures only authenticated users access the dashboard and shipment flows.
  - **Files**:
    - `src/components/PrivateRoute.tsx`: Define the component using useEffect or similar for session check and Navigate from react-router-dom.
    - `src/App.tsx`: Wrap private routes (e.g., Dashboard) with PrivateRoute.
  - **Step Dependencies**: Step 1 (Routing setup).
  - **Agent Instructions**: Test by accessing /dashboard without login (should redirect); login and access (should load a placeholder Dashboard).

## Navigation Updates for Logged-In View
- [ ] Step 3: Update Navbar for Logged-In State
  - **Task**: Modify Navbar to conditionally render based on auth session: for logged-in, show logo linking to /dashboard, quick links (Dashboard, New Shipment), user avatar/name dropdown with Savings summary (placeholder text like "Lifetime Savings: $0") and Logout; add hamburger icon for mobile sidebar toggle. Use Tailwind for styling consistency (e.g., green accents #B0EC9C).
  - **Description**: Adapts the navigation to the logged-in context, providing quick access to core actions like New Shipment while displaying key metrics (savings) per PRD's dashboard goals. This minimizes friction for personas like Missionary Families.
  - **Files**:
    - `src/components/Navbar.tsx`: Add session check, conditional JSX for logged-in elements, dropdown logic (use state for toggle), and hamburger icon.
    - `src/App.tsx`: Ensure Navbar is rendered in all routes.
    - `src/utils/supabaseClient.ts`: Use getSession for auth state.
  - **Step Dependencies**: Step 2 (PrivateRoute ready).
  - **Agent Instructions**: Login; verify Navbar shows user elements and dropdown; click Logout to test sign-out and redirect to Landing.

- [ ] Step 4: Implement Sidebar Component
  - **Task**: Create a Sidebar component with links to Dashboard, New Shipment (highlighted CTA), History, Templates, Settings, Support, and Logout at bottom. Make it collapsible on desktop (toggle button) and full-screen overlay on mobile (triggered by Navbar hamburger). Use Tailwind for vertical layout, responsiveness (e.g., hidden by default on mobile), and styling matching Buffer (e.g., #213130 background).
  - **Description**: Provides structured navigation for deeper app sections without cluttering the top bar, improving UX for frequent tasks per PRD's lean design. It's complementary to Navbar, avoiding redundancy by focusing on full menu.
  - **Files**:
    - `src/components/Sidebar.tsx`: Define component with NavLink from react-router-dom for links, state for collapse/overlay.
    - `src/components/Navbar.tsx`: Add hamburger click handler to toggle Sidebar.
    - `src/pages/Dashboard.tsx`: Import and render Sidebar (placeholder for now).
  - **Step Dependencies**: Step 3 (Navbar updated).
  - **Agent Instructions**: On desktop, toggle collapse; on mobile, open/close overlay; click links to ensure routing works (even to placeholders).

## Dashboard Page Implementation
- [ ] Step 5: Create Dashboard Page Skeleton
  - **Task**: Build Dashboard.tsx with main content area: grid of metric cards for savings (e.g., "Lifetime Savings: $X", "This Month: $Y on Z shipments" – use placeholders or mock data), recent shipments list (top 3-5 as cards with mock details like date, recipient, savings), and prominent "Create New Shipment" button linking to /new-shipment. Include Sidebar integration.
  - **Description**: Establishes the home screen for logged-in users, showcasing savings and quick actions per PRD's F8 (savings dashboard) and success metrics. This builds trust and encourages retention.
  - **Files**:
    - `src/pages/Dashboard.tsx`: JSX for grid/cards, mock data array, button with Link.
    - `src/App.tsx`: Add Route for /dashboard to Dashboard component.
    - `src/components/Sidebar.tsx`: Ensure Dashboard link is active.
  - **Step Dependencies**: Step 4 (Sidebar ready).
  - **Agent Instructions**: Navigate to /dashboard; verify cards display mocks, button routes to /new-shipment placeholder, and layout is responsive (stacks on mobile).

- [ ] Step 6: Integrate Real Savings Data into Dashboard
  - **Task**: Use Supabase to fetch user-specific data (e.g., from a 'shipments' table – assume schema exists or create via code comments); calculate and display actual lifetime/monthly savings vs. retail rates. Add error handling for fetches.
  - **Description**: Makes the dashboard dynamic, directly tying to PRD's goal of showing clear dollar savings. This step transitions from mocks to backend integration for accuracy.
  - **Files**:
    - `src/pages/Dashboard.tsx`: Add useEffect for Supabase queries, state for data, calculations (e.g., sum savings).
    - `src/utils/supabaseClient.ts`: Export functions for querying shipments table.
  - **Step Dependencies**: Step 5 (Dashboard skeleton).
  - **Agent Instructions**: Mock a shipments table in Supabase if needed; login and verify fetched data displays (use console logs for debugging).

## New Shipment Page Implementation
- [ ] Step 7: Set Up New Shipment Page with Multi-Step Form Structure
  - **Task**: Create NewShipment.tsx with a 3-step wizard (progress bar): Step 1 - Addresses (From/To with autocomplete placeholder), Step 2 - Package Details (dimensions/weight inputs, AR button placeholder), Step 3 - Rates & Payment (options list, pay button). Use state for form data and step navigation. Include Sidebar.
  - **Description**: Implements the core shipment flow per PRD's F3-F7, enabling <2-minute label creation. The stepped structure guides users, reducing errors for occasional shippers.
  - **Files**:
    - `src/pages/NewShipment.tsx`: Define component with useState for steps/form, conditional rendering per step.
    - `src/App.tsx`: Add Route for /new-shipment.
    - `src/components/Sidebar.tsx`: Ensure New Shipment link is highlighted.
  - **Step Dependencies**: Step 4 (Sidebar ready).
  - **Agent Instructions**: Navigate to /new-shipment; progress through steps, verify form state persists, and back/next buttons work.

- [ ] Step 8: Implement Address Autocomplete and Validation in New Shipment
  - **Task**: Integrate USPS API (use a mock or placeholder fetch for now) for address suggestions and validation in Step 1; add inline errors for invalid/international addresses. Auto-fill fields on selection.
  - **Description**: Addresses PRD's F6 for frictionless input, preventing costly errors like invalid shipments. This enhances reliability for all personas.
  - **Files**:
    - `src/pages/NewShipment.tsx`: Add inputs with onChange for API calls, dropdown for suggestions, validation logic.
    - `src/utils/api.ts`: Create a utility for USPS API fetch (mock response initially).
  - **Step Dependencies**: Step 7 (Form structure).
  - **Agent Instructions**: Type an address; verify suggestions appear and validation flags errors (e.g., international prompt).

- [ ] Step 9: Add Package Details with AR Fallback in New Shipment
  - **Task**: In Step 2, implement manual inputs for LxWxH/weight; add AR button that (for now) simulates capture with mock values or prompts fallback manual entry with photo upload placeholder. Include confirmation prompt for dimensions.
  - **Description**: Covers PRD's F5 for AR dimension capture, with fallback to ensure accessibility across devices. This lowers barriers for mobile users like families.
  - **Files**:
    - `src/pages/NewShipment.tsx`: Add inputs, button handler for AR sim, state updates for dims.
  - **Step Dependencies**: Step 8 (Step 1 complete).
  - **Agent Instructions**: Click AR button; verify fallback triggers and values auto-fill; test manual entry.

- [ ] Step 10: Integrate Rate Shopping, Payment, and Label Generation in New Shipment
  - **Task**: In Step 3, fetch UPS/USPS rates (mock API initially), display color-coded options; add insurance checkbox, Stripe payment form, and generate label/QR (mock PDF/QR download). Save to history via Supabase. Add draft resume feature.
  - **Description**: Completes the shipment flow per PRD's F3-F4, F7, F9, enabling end-to-end creation with savings display. This is key for value prop (up to 89% off).
  - **Files**:
    - `src/pages/NewShipment.tsx`: Add rate fetch, options JSX, Stripe Elements integration, generation logic.
    - `src/utils/api.ts`: Mock functions for rates/labels.
    - `src/utils/supabaseClient.ts`: Function to insert shipment record.
  - **Step Dependencies**: Step 9 (Step 2 complete).
  - **Agent Instructions**: Complete form; verify rates show, payment mocks succeed, label generates, and history insert logs.

## Additional Pages and Polish
- [ ] Step 11: Implement Shipment History Page
  - **Task**: Create History.tsx with table/cards of past shipments (fetch from Supabase), filters (date/carrier), actions (download, void). Include tracking links and notifications opt-in display.
  - **Description**: Fulfills PRD's F4 and F12 for 90-day history and tracking, allowing users to manage past shipments and track savings over time.
  - **Files**:
    - `src/pages/History.tsx`: JSX for table, useEffect for fetch, filter state.
    - `src/App.tsx`: Add Route for /history.
    - `src/utils/supabaseClient.ts`: Query function for shipments.
  - **Step Dependencies**: Step 6 (Data integration experience).
  - **Agent Instructions**: Add mock data to Supabase; verify list displays, filters work, actions log.

- [ ] Step 12: Add Saved Templates and Settings Pages
  - **Task**: Create Templates.tsx for CRUD on templates (list, add/edit modals) and Settings.tsx for profile/payment edits (forms). Link templates to New Shipment pre-fill.
  - **Description**: Supports PRD's F10 for templates and implicit settings, enhancing efficiency for repeat users like Micro-Brand Founders.
  - **Files**:
    - `src/pages/Templates.tsx`: List and modal JSX, Supabase CRUD.
    - `src/pages/Settings.tsx`: Forms for updates.
    - `src/App.tsx`: Add Routes for /templates, /settings.
    - `src/pages/NewShipment.tsx`: Add template dropdown to pre-fill.
    - `src/utils/supabaseClient.ts`: Functions for templates table.
  - **Step Dependencies**: Step 11 (History similar).
  - **Agent Instructions**: Create/edit a template; verify it pre-fills in New Shipment; update settings and check persistence.

- [ ] Step 13: Implement Support Page and Final Responsiveness Polish
  - **Task**: Create Support.tsx with email ticketing form (submit via Supabase or mock), FAQ list. Ensure all logged-in pages are responsive (Tailwind classes), add toasts for errors/success, and test WCAG AA basics.
  - **Description**: Meets PRD's F11 for support and non-functional requirements (accessibility, performance). This completes the MVP with polished UX.
  - **Files**:
    - `src/pages/Support.tsx`: Form and FAQ JSX.
    - `src/App.tsx`: Add Route for /support.
    - `src/components/Navbar.tsx`: Add global toast container if needed.
    - `src/pages/Dashboard.tsx`: Adjust classes for responsiveness.
    - `src/pages/NewShipment.tsx`: Adjust classes.
    - `src/pages/History.tsx`: Adjust classes.
    - `src/pages/Templates.tsx`: Adjust classes.
    - `src/pages/Settings.tsx`: Adjust classes.
  - **Step Dependencies**: Step 12 (All pages ready).
  - **Agent Instructions**: Submit support form (check console); resize browser to test layouts; verify no accessibility issues (e.g., alt texts, contrasts).