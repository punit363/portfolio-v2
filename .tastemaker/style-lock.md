# Portfolio style lock

## Direction
- Reference: the user-supplied 7680 × 4320 screenshot.
- Surface: software engineer portfolio; editorial, monochrome, intentionally sparse.
- First viewport: fixed identity rail and navigation rail at left; framed statement and contact link at right.
- Structure: Split Diptych with six full-viewport panels in scroll order Home, About me, Experience, Projects, Toolstack, Connect. The numbered content sequence remains 00 through 05. The first panel reproduces the landing reference; the remaining panels change on scroll.
- Navigation labels stay in reverse vertical order: Connect, Toolstack, Projects, Experience, About me. Only the current marker expands to 22vh and gains the black fill with red text; inactive markers stay at 12vh on standard viewports. Thus the active marker moves from bottom to top as the page scrolls down.

## Color contract
- Background and surface: `#080808`.
- Primary text and mark: `#f3f2f0` and `#ffffff`.
- Muted text: `#949494`.
- Corner and decorative Experience aside: shared `#898989` token, with full opacity.
- Decorative hairlines: `#2a2a2a`.
- Cursor-active identity rail: `#ff0000` with `#080808` text and logo. Contrast is 5.01:1.
- `#f3f2f0` on `#080808`: 17.74:1, text-safe.
- Hairlines are decorative and do not carry state.
- Single dark mode; no toggle.

## Typography and spacing
- Helvetica Neue / Helvetica / Arial for large display and body text.
- Courier New for the vertical rails.
- Main frame: left at 45.8vw, right inset equal to the identity rail's outer left gutter (2.1vw on desktop, 16px on tablet, 12px on phone), top at 4.6vh on desktop.
- The contact label and email share the frame's left edge, with the email block ending at the frame's lower edge. Frame and contact use the same responsive positioning tokens.
- About me follows the supplied overlapping-card reference at exact desktop ratios: the name block begins at 22.7vw and 35.5vh with a 28vw × 31.3vh footprint; the biography begins at 43vw, ends at 89vw, and sits 6.2vh above the bottom. Both use an inset top-left hairline. On phones the cards return to document flow and retain their overlap without horizontal scrolling.
- The Experience frame is 25vh tall on desktop, with its `S-400` label held at the upper right. The three-entry timeline is bottom anchored; its bottom inset always equals the responsive right gutter (2.1vw desktop, 16px tablet, 12px phone). Short landscape screens return it to document flow so every entry remains reachable.
- Projects uses the same compact frame and bottom-anchor rule as Experience: the third row ends at the responsive right-gutter distance from the viewport bottom. Its headings, project titles, category labels, skill lines, and vertical rhythm are about 10% smaller, with a tighter category-to-title gap. Skill names use middle-dot separators rather than full stops, and long lists wrap without horizontal overflow.
- Toolstack follows the supplied Toolbox reference: `mY everydaY carrY` in the upper frame, `weapoN masteR` as a muted corner aside, and five ordered groups below. Language, Frontend, Backend, AI, and Infrastructure share a continuous 01–23 number sequence. Group outlines are removed; the larger individual tool tiles remain square. The five clusters sit close together on one bottom-left baseline on desktop, then wrap to three and two columns while retaining the responsive bottom gutter.
- Connect closes the sequence with `lesS talK. morE claritY.` in the shared upper frame and a three-row social register bottom anchored to the common right gutter. X owns the red field at rest; hover or keyboard focus transfers the red field to LinkedIn or GitHub. Each row pairs a large platform name with a monospaced handle, sequence number, and northeast arrow. Compact screens hide the secondary handles while preserving the platform names and destinations.
- The decorative Experience aside reads `cubiclE` vertically and `crusH` horizontally. Both words are underlined, with `cubiclE`'s underline on its left, to suggest a small corner at the frame's lower edge.
- Square corners, no shadows, ample negative space. Toolstack uses only the individual tool-cell outlines; the group containers stay borderless.

## Motion and interaction
- Fixed left rails, regular document scroll on the right.
- Anchor links use smooth scrolling; content after the hero enters with a short opacity and transform reveal.
- About me defaults to a red name card with black type and a black biography card with white type. Hovering or keyboard-focusing the biography swaps those states: the name becomes black with red type and the biography becomes red with black type.
- Experience and Projects entries use the same 140ms hover treatment on fine pointers: the outer highlight edge stays fixed, the surface turns `#ff0000` with `#080808` text, the bordered card shifts 40px right, the metadata line shifts 10px left, and a down-right arrow appears at the lower-right corner. Touch layouts keep the resting state; reduced-motion retains the color change and removes movement.
- Experience and Projects entries are single-open disclosures. Activating one keeps its header red, changes the arrow from down-right to up-right, opens a red-edged monospaced detail panel, and moves the two inactive rows right while their space closes. The open entry is reflected in the `experience` or `project` query parameter; reduced motion keeps the disclosure state and removes the large translations. On phones, an open disclosure returns to document flow so long copy stays reachable without horizontal overflow.
- Reduced-motion preference removes transitions and smooth scrolling.
- While at the landing top, fine-pointer movement anywhere on the page turns only the identity rail red. It holds for three seconds after the last movement, then returns over 1.4 seconds. Reduced-motion preference keeps the color change but removes the fade.
- Scrolling below the landing position or choosing a section link keeps the identity rail and navigation rail red. The current navigation item expands and becomes black with red text; returning to the top restores the navigation rail.
- Tablet and phone layouts retain both fixed rails while resizing the content frame. The phone rails leave a 12px outer gutter on each side; the compact Experience heading clears the section count at 320px width. Toolstack uses two compact columns on phones. Short landscape viewports return bottom-anchored content to normal flow to prevent overlap.

## Assets and memory
- The reference contains no photography or illustrations; the rail now uses the supplied `znag.svg`, also used as the favicon.
- Implementation: Next.js App Router, React, and the existing global CSS. The scroll observer runs in the client page component.
- User-supplied exact first-viewport copy is preserved.
- Connect links to the user-supplied X, LinkedIn, and GitHub profiles. Toolstack uses the tools visible in the supplied Toolbox reference, with LangChain, LangGraph, Unstructured, ChromaDB, Claude Code, and Codex under AI. Experience titles come from the supplied references; Nomura’s expanded narrative follows the supplied reference copy, while the other role narratives are concise portfolio copy without invented metrics. Spot Exchange and RAG Pipeline project narratives use the user-provided facts; the Perpetual Exchange narrative extends the stated Spot Exchange architecture without adding performance metrics.
- No personal taste profile preference was inferred from this one reference.
