# Joorweb Typography

This file owns typography for Joorweb. Application boundaries, Puck, Page Schema, and package layout stay in [frontend-architecture.md](../architecture/frontend-architecture.md). Color stays in [colors.md](colors.md). Component structure stays in [components.md](components.md). The token overview stays in [design-system.md](design-system.md).

`typography.md` was empty. This is the typography record.

**Established** means a decision already approved. **Proposed** means a recommendation in this file. It is not approved and it is not built. **Open** means a decision is still required. This file does not add Proposed sizes, weights, families, or roles. Unspecified metrics stay Open.

The decisions in sections 1 through 11 are Established where a value or rule is stated. CSS blocks are **illustrative**. They show an approved rule. They are not a shipped stylesheet, not a token file, and not a font path.

frontend-architecture.md section 2.5 still describes typography as Open. design-system.md section 16 still lists font families and font sizes as unresolved. Those files were not edited. Both are pending documentation synchronization, not open typography decisions. The type decisions in this file stay Established. This file does not close spacing, radius, shadow, breakpoints, or any other non-type token.

---

## 1. Font families

**Established.**

| Use | Family | Status |
|---|---|---|
| Persian text | IRANSans | Established |
| English text | Inter | Established |
| Fallback | system sans-serif | Established |

Font selection must consider the language of the content. A Persian run uses IRANSans. An English run uses Inter. One page family does not silently cover the other language.

The fallback is the system sans-serif, written in CSS as the generic family `sans-serif`. No additional family names are approved.

Do not silently replace IRANSans with IRANSansX. IRANSansX is not the Persian family.

```css
/* Illustrative. Not a shipped stylesheet. */
:lang(fa) {
  font-family: IRANSans, sans-serif;
}

:lang(en) {
  font-family: Inter, sans-serif;
}
```

Color of type stays in [colors.md](colors.md). This file does not assign a text color.

---

## 2. Number formatting

**Established** presentation. The internationalization library remains Open in design-system.md. This file does not choose a formatter.

| Context | Numerals | Status |
|---|---|---|
| Persian user interfaces | Persian numerals (۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹) | Established |
| Code, identifiers, email addresses, and technical data | Latin numerals (0–9) | Established |

Applying Persian numerals to dates, quantities, and monetary values is an implementation interpretation of the approved Persian UI numeral rule. It is not a separately approved decision. The approved numeral rules stay the two rows above. This file does not invent a currency or a calendar. design-system.md already requires that a formatted value, once provided, stays readable and correctly ordered.

Phone numbers are not in either numeral list. Their digits stay **Open**. Their direction handling is Established in section 8.

design-system.md requires tabular figures for financial figures where the typeface provides them. Whether IRANSans or Inter provides tabular figures, and how to turn them on, is **Open**.

---

## 3. Type scale

**Established** shared sizes, in pixels. These are the shared scale. They are not a second scale per application.

| Role | Size | Status |
|---|---|---|
| Display | 48px | Established |
| Heading 1 | 36px | Established |
| Heading 2 | 30px | Established |
| Heading 3 | 24px | Established |
| Heading 4 | 20px | Established |
| Body Large | 18px | Established |
| Body | 16px | Established |
| Body Small | 14px | Established |
| Caption | 12px | Established |
| Button | 14px | Established |

Button and Body Small share 14px. They stay different roles. Section 5 gives them different line heights.

Label, Input, Navigation, and Code are roles in section 7. They have no approved size. This table does not give them one.

```css
/* Illustrative. Not a shipped stylesheet.
   Shared scale only. Mobile sizes are Open. See section 9. */
.example-display { font-size: 48px; }
.example-heading-1 { font-size: 36px; }
.example-heading-2 { font-size: 30px; }
.example-heading-3 { font-size: 24px; }
.example-heading-4 { font-size: 20px; }
.example-body-large { font-size: 18px; }
.example-body { font-size: 16px; }
.example-body-small { font-size: 14px; }
.example-caption { font-size: 12px; }
.example-button { font-size: 14px; }
```

The class names above are not components and not tokens.

---

## 4. Font weights

**Established.** The same four weights apply to IRANSans and to Inter.

| Name | Weight | Status |
|---|---|---|
| Regular | 400 | Established |
| Medium | 500 | Established |
| SemiBold | 600 | Established |
| Bold | 700 | Established |

No other weight is approved. Which role uses which of the four weights is **Open**. Do not invent that assignment.

Italic is a font style, not a font weight. It is not a fifth weight, and it does not change 400, 500, 600, or 700. Italic support has not been decided. It stays **Open**.

Font loading in section 11 loads only these required weights.

---

## 5. Line height

**Established** for the roles that have a value. The numbers are unitless.

| Role | Line height | Status |
|---|---|---|
| Display | 1.2 | Established |
| Heading | 1.3 | Established |
| Body Large | 1.7 | Established |
| Body | 1.7 | Established |
| Body Small | 1.6 | Established |
| Caption | 1.5 | Established |
| Button | 1.4 | Established |

Heading 1, Heading 2, Heading 3, and Heading 4 share the Heading line height, 1.3. The approved decision does not give each heading level its own line height.

Body Large and Body share 1.7. They do not share a size. Body Small is 1.6. Button is 1.4, not the Body Small line height, even though both are 14px.

Label, Input, Navigation, and Code have no approved line height.

```css
/* Illustrative. Not a shipped stylesheet. */
.example-display { line-height: 1.2; }
.example-heading { line-height: 1.3; }
.example-body-large { line-height: 1.7; }
.example-body { line-height: 1.7; }
.example-body-small { line-height: 1.6; }
.example-caption { line-height: 1.5; }
.example-button { line-height: 1.4; }
```

---

## 6. Letter spacing

**Established.**

| Text | Letter spacing | Status |
|---|---|---|
| Persian | 0 | Established |
| English, default | 0 | Established |
| Large English headings | -0.02em | Established |

Never apply artificial letter spacing to Persian text. That rule covers a Persian run inside an English interface. The default for English is also 0. The -0.02em value is only for large English headings.

Which roles count as large English headings is **Open**. The approved decision states the phrase and the value. It does not name Display, Heading 1, or any other role. This file does not assign -0.02em to a named role.

```css
/* Illustrative. Not a shipped stylesheet.
   Persian stays at 0. English stays at 0 unless the text is a large English heading.
   Which roles are large is Open. */
:lang(fa) {
  letter-spacing: 0;
}

:lang(en) {
  letter-spacing: 0;
}
```

---

## 7. Typography roles

**Established** role names. A role names a job. It is not a promise that every role has a size.

| Role | Approved size | Approved line height | Status |
|---|---|---|---|
| Display | 48px | 1.2 | Established |
| Heading 1 | 36px | 1.3, shared by headings | Established |
| Heading 2 | 30px | 1.3, shared by headings | Established |
| Heading 3 | 24px | 1.3, shared by headings | Established |
| Heading 4 | 20px | 1.3, shared by headings | Established |
| Body Large | 18px | 1.7 | Established |
| Body | 16px | 1.7 | Established |
| Body Small | 14px | 1.6 | Established |
| Label | None | None | Role Established. Metrics Open. |
| Caption | 12px | 1.5 | Established |
| Button | 14px | 1.4 | Established |
| Input | None | None | Role Established. Metrics Open. |
| Navigation | None | None | Role Established. Metrics Open. |
| Code | None | None | Role Established. Metrics Open. |

Semantic roles are independent of one fixed font size. An application may adapt a role to its own screen while preserving the shared design system, including the shared scale in section 3. Adaptation does not add a role, a family, or a weight. Exact adapted sizes are Open in section 9.

Label, Input, Navigation, and Code have no approved size and no approved line height. Those metrics stay **Open**. This file does not fill them.

Code has no approved family of its own. No monospace family is approved. Code still follows section 2 for Latin numerals and section 8 for direction.

Weight per role stays Open, as section 4 says.

---

## 8. RTL and LTR

**Established.** Direction rules for the product also live in design-system.md section 8 and frontend-rules.md section 7. This section records the typography consequences. It does not restate application boundaries.

| Language | Direction | Family |
|---|---|---|
| Persian | RTL | IRANSans |
| English | LTR | Inter |

Mixed-language content must handle direction independently. A Persian paragraph may contain an English term, and an English paragraph may contain Persian text. Each run keeps the direction and the family of its own language.

URLs, email addresses, phone numbers, and code must have appropriate direction handling. They stay isolated so surrounding Persian or English punctuation does not reverse them.

Prefer CSS logical properties over physical left and right properties. frontend-rules.md section 7.2 already shows `margin-inline-start`, `padding-inline-start`, `border-inline-start`, and `text-align: start`.

A language change must update layout direction and typography together: direction, family, numerals, and letter spacing. Changing the `lang` value without changing those is incomplete.

```css
/* Illustrative. Not a shipped stylesheet. */
:lang(fa) {
  direction: rtl;
  font-family: IRANSans, sans-serif;
  letter-spacing: 0;
}

:lang(en) {
  direction: ltr;
  font-family: Inter, sans-serif;
  letter-spacing: 0;
}
```

```html
<!-- Illustrative. Not a shipped template. -->
<p dir="rtl" lang="fa">
  نمونه
  <span dir="ltr" lang="en">user@example.com</span>
</p>
```

The internationalization library that performs the language change remains Open in design-system.md.

---

## 9. Responsive typography

**Established** rules. Pixel breakpoints and mobile font sizes are **Open**. design-system.md section 7 already requires the viewport categories mobile, tablet, laptop, desktop, and large desktop, and it does not set their pixel widths. This file does not set them either.

- Headings should adapt to smaller screens.
- Body text must not be smaller than 14px on mobile.
- Use `clamp()` where appropriate.
- Preserve the shared type scale across applications.

The 14px floor applies to body text. It is not a chosen mobile size for Body or Body Large. Body remains 16px and Body Large remains 18px on the shared scale. The floor only forbids body text below 14px on mobile. Caption is 12px on the shared scale. Caption is not body text. This file does not assign caption a mobile size.

`clamp()` is the approved way to adapt a heading when a fluid size is appropriate. A numeric `clamp()` would require a minimum, a preferred value, and a maximum that are not approved. No such numbers are given here.

Role adaptation is allowed while the shared type scale in section 3 is preserved. Exact responsive sizes and breakpoints stay Open. An application does not invent those sizes or breakpoints.

---

## 10. Accessibility

The target is WCAG 2.2 Level AA, as frontend-rules.md and design-system.md already state. This file does not claim that Joorweb, or this type, conforms to WCAG.

**Established** requirements:

- Support text resizing up to 200% without loss of content or functionality. This is the resize requirement in WCAG 2.2 Success Criterion 1.4.4. Naming the criterion does not mean the product has been tested against it.
- Avoid font sizes below 12px except for justified exceptional cases. Caption at 12px is the smallest approved size. It is not below the floor. This file grants no exceptional case. Whether any later case is justified stays **Open**.
- Preserve readability and adequate line height. For roles in section 5, the approved line height is the adequate value. Roles with no line height do not yet have one.
- Never communicate meaning through font weight or size alone. Color has the same rule in design-system.md and in [colors.md](colors.md). A status still needs text or an equivalent non-type cue.

The mechanism that keeps 200% resize working, including whether a screen uses browser zoom, root-font scaling, or another method, is **Open**. The shared sizes in section 3 stay in px until that mechanism is decided. This file does not convert the scale to another unit.

Contrast of text against surfaces is checked in colors.md. This file does not add contrast ratios.

---

## 11. Font loading

**Established** loading rules. File paths are not approved.

- Prefer WOFF2.
- Load only the required weights: Regular 400, Medium 500, SemiBold 600, and Bold 700, for each family that the screen actually uses.
- Use `font-display: swap`.
- Self-host the font files. Do not depend on a third-party font host for IRANSans or Inter.

IRANSans commercial licensing, and the exact licensed font files, must be verified before production use. That verification has not been done in this file. License status and the real file names stay **Open**. Do not treat a sample URL as a licensed file.

This file does not record a license for Inter. It does not substitute IRANSansX files for IRANSans.

```css
/* Illustrative. Not a shipped stylesheet.
   The URL is a placeholder, not a path in this repository and not a licensed file. */
@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("IRANSans-Regular.woff2") format("woff2");
}
```

The same shape applies to weights 500, 600, and 700, and to Inter. Only a weight the screen requires is loaded. Other weights are not approved. Prefer WOFF2. That preference does not prohibit another format.

Where the self-hosted files live is **Open**, together with token package implementation. Architecture names `packages/design-tokens` and leaves format and theme wiring unresolved. This file does not place fonts in that package.

---

## 12. Token naming

design-system.md section 4 sets the naming shape: `{category}.{role}.{modifier}` when a modifier is needed. The typography category covers family, size, weight, and line-height roles for Persian and English. This file uses that shape and does not add a second one.

Concrete token identifiers, the prefix, the file format, and the mapping onto Tailwind stay **Open**, as design-system.md sections 4 and 16 already say. The illustrative custom properties in frontend-rules.md section 4.1 are not typography tokens. They are an example of token use, and that section already says the values are illustrative.

This file therefore does not publish names such as a custom property or a Tailwind key for Display or for IRANSans. Product UI uses approved tokens once those names exist. Until then, a component does not invent a private type scale.

---

## 13. Usage rules

These rules restate sections 1 through 11. They do not add a type decision.

1. Persian text uses IRANSans. English text uses Inter. The fallback is the system sans-serif.
2. Do not silently replace IRANSans with IRANSansX.
3. Select the family from the language of the content, including a run inside mixed text.
4. Persian user interfaces use Persian numerals. Code, identifiers, email addresses, and technical data use Latin numerals.
5. The shared sizes and line heights in sections 3 and 5 are the scale. Label, Input, Navigation, and Code stay without a size and without a line height until those metrics are approved.
6. Use only Regular 400, Medium 500, SemiBold 600, and Bold 700. Do not assign a weight to a role until that assignment is approved.
7. Persian letter spacing stays 0. English letter spacing stays 0, except large English headings at -0.02em. Do not apply that exception until the roles that count as large are approved, and never apply it to Persian text.
8. Persian layout is RTL. English layout is LTR. Isolate URLs, email addresses, phone numbers, and code. Prefer logical properties.
9. A language change updates direction and typography together.
10. Headings may adapt on smaller screens. Body text on mobile is not below 14px. Do not publish a breakpoint, a mobile size, or a numeric `clamp()` until those values are approved. Keep the shared scale.
11. Avoid type below 12px. A justified exception is permitted.
12. Do not communicate meaning through weight or size alone.
13. Prefer WOFF2, self-host the files, use `font-display: swap`, and load only required weights. Do not ship IRANSans before its commercial license and the exact licensed files are verified.

Anti-patterns:

- Substituting IRANSansX for IRANSans.
- One family for both languages.
- Tracking or other artificial letter spacing on Persian text.
- A second type scale for one application.
- A size or line height invented for Label, Input, Navigation, or Code.
- A font weight outside 400, 500, 600, and 700.
- Body text below 14px on mobile.
- Type below 12px without a justified exception.
- A third-party font host, or a font file whose IRANSans license has not been verified.
- Status or hierarchy shown by weight or size alone.

---

## 14. Decision index

### Established

- Persian family IRANSans. English family Inter. Fallback: system sans-serif.
- Family selection follows the content language. IRANSansX is not a silent replacement.
- Persian numerals in Persian user interfaces. Latin numerals for code, identifiers, email addresses, and technical data.
- Shared sizes: Display 48px, Heading 1 36px, Heading 2 30px, Heading 3 24px, Heading 4 20px, Body Large 18px, Body 16px, Body Small 14px, Caption 12px, Button 14px.
- Weights for both families: Regular 400, Medium 500, SemiBold 600, Bold 700. Italic is a font style, not one of these weights.
- Line height: Display 1.2, Heading 1.3, Body Large 1.7, Body 1.7, Body Small 1.6, Caption 1.5, Button 1.4.
- Letter spacing: Persian 0, English default 0, large English headings -0.02em. No artificial letter spacing on Persian text.
- Role names: Display, Heading 1, Heading 2, Heading 3, Heading 4, Body Large, Body, Body Small, Label, Caption, Button, Input, Navigation, and Code.
- Roles are independent of one fixed size and may adapt per application while the shared scale is preserved.
- Persian RTL and English LTR. Mixed text handles direction independently. URLs, email addresses, phone numbers, and code have appropriate direction handling. Logical properties are preferred. A language change updates direction and typography.
- Headings adapt on smaller screens. Body text is not below 14px on mobile. `clamp()` is appropriate where a fluid size is used. The shared scale stays common to applications.
- The accessibility target is WCAG 2.2 AA. Text must be able to resize to 200% without loss of content or functionality. Sizes below 12px are avoided except for a justified exception. Readability and adequate line height stay in force. Meaning is not communicated by weight or size alone.
- Loading: prefer WOFF2, load only required weights, `font-display: swap`, self-host. IRANSans licensing and the exact licensed files must be verified before production use.

### Proposed

- None. This file does not recommend an unapproved size, weight, family, role, or breakpoint.

### Open

- Size and line height for Label, Input, Navigation, and Code.
- Which approved weight each role uses.
- Italic support. Italic is a font style, not a font weight. Weights stay 400, 500, 600, and 700.
- Which roles are the large English headings that use -0.02em.
- Numeral style for phone numbers.
- Whether IRANSans or Inter provides tabular figures, and how financial figures enable them. The requirement, where the face provides them, already stands in design-system.md.
- Exact breakpoints and exact mobile sizes, including any numeric `clamp()`.
- The mechanism for 200% text resize. No below-12px exception is granted here.
- The mechanism for Persian and Latin numerals. The internationalization library remains Open in design-system.md.
- Concrete typography token names, prefix, file format, and Tailwind mapping. design-system.md sections 4 and 16.
- Token package implementation, and where self-hosted font files live.
- Verification of the IRANSans commercial license and of the exact licensed files. This file does not record an Inter license.

### Documentation sync

- frontend-architecture.md section 2.5 still describes typography as Open. design-system.md section 16 still lists font families and font sizes as unresolved. Those files were not edited. Both are pending documentation synchronization, not open typography decisions. The decisions in this file stay Established.
