# Portfolio style lock

## Direction
- Reference: the user-supplied 7680 × 4320 screenshot.
- Surface: software engineer portfolio; editorial, monochrome, intentionally sparse.
- First viewport: fixed identity rail and navigation rail at left; framed statement and contact link at right.
- Structure: Split Diptych with five full-viewport panels in scroll order Home, Experience, Projects, Toolstack, Connect. The first panel reproduces the reference; the remaining panels change on scroll.
- Navigation labels stay in reverse vertical order: Connect, Toolstack, Projects, Experience. Only the current marker expands to 22vh and gains the black fill with red text; inactive markers stay at 12vh on standard viewports. Thus the active marker moves from bottom to top as the page scrolls down.

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
- The Experience frame is 25vh tall on desktop, with its `S-400` label held at the upper right. The timeline begins at 34vh; compact entry spacing keeps all three roles, dates, companies, and the return link visible in a standard desktop viewport. Narrow and short screens grow vertically so every entry remains reachable by scrolling.
- Projects uses the same compact frame, gutters, and three-entry rhythm as Experience. At large desktop heights its list starts at 38vh to match the supplied Projects reference; at smaller heights it tightens to 34vh. Skill names use middle-dot separators rather than full stops, and long lists wrap without horizontal overflow.
- Toolstack follows the supplied Toolbox reference: `mY arsenaL` in the upper frame, `weapoN masteR` as a muted corner aside, and five ordered groups below. Language, Frontend, Backend, AI, and Infrastructure share one tile size and number sequence. They form five columns on wide screens, then wrap to three, two, and one column as space narrows; the section grows so no group or return link is clipped.
- The decorative Experience aside reads `cubiclE` vertically and `crusH` horizontally. Both words are underlined, with `cubiclE`'s underline on its left, to suggest a small corner at the frame's lower edge.
- Square corners, no shadows, ample negative space. The Toolstack's outlined tile grids are specific to the supplied reference rather than general content cards.

## Motion and interaction
- Fixed left rails, regular document scroll on the right.
- Anchor links use smooth scrolling; content after the hero enters with a short opacity and transform reveal.
- Reduced-motion preference removes transitions and smooth scrolling.
- While at the landing top, fine-pointer movement anywhere on the page turns only the identity rail red. It holds for three seconds after the last movement, then returns over 1.4 seconds. Reduced-motion preference keeps the color change but removes the fade.
- Scrolling below the landing position or choosing a section link keeps the identity rail and navigation rail red. The current navigation item expands and becomes black with red text; returning to the top restores the navigation rail.
- Tablet and phone layouts retain both fixed rails while resizing the content frame. The phone rails leave a 12px outer gutter on each side; the compact Experience heading clears the section count at 320px width. Short landscape viewports tighten the navigation and section content to prevent overlap.

## Assets and memory
- The reference contains no photography or illustrations; the rail now uses the supplied `znag.svg`, also used as the favicon.
- Implementation: Next.js App Router, React, and the existing global CSS. The scroll observer runs in the client page component.
- User-supplied exact first-viewport copy is preserved.
- Connect retains a placeholder-level statement. Toolstack uses the tools visible in the supplied Toolbox reference, with LangChain, LangGraph, Unstructured, and ChromaDB added under AI from the existing Projects content. Projects and Experience use only the entries visible in the user's supplied references; no duties, achievements, or project links were inferred.
- No personal taste profile preference was inferred from this one reference.
