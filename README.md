# SIRA ONE — Final Website

Bilingual responsive static website for SIRA ONE — Secure Intelligent Remote Automation.

## Pages
Home / Solutions / Services / Industries / About Us / Contact Us

## Branding
Uses the exact SIRA ONE shield logo supplied by the owner. English: Montserrat. Arabic: Cairo.

## GitHub Pages
The repository includes `CNAME` with `sira-one.com`.

## Contact form
The form is prepared for Formspree. Replace `YOUR_FORM_ID` in `contact.html` with the actual Formspree endpoint before launch. This is the only external service configuration still required for the form to send mail.

## DNS
For GitHub Pages, the apex domain uses GitHub's A records and `www` uses a CNAME to `sira-one.github.io`.

## Language
- Primary/default website language: English.
- Arabic is available through the language switcher.
- Arabic expansion of SIRA: **التحكم الآمن الذكي عن بُعد**.

## Default language fix
The website now uses a versioned language preference key, so any Arabic preference saved by an older version cannot make the new deployment open in Arabic. English is the guaranteed first-visit/default language.

## Logo deployment
The logo file `sira-one-logo.jpg` is intentionally stored in the repository root so it is uploaded reliably through GitHub's web interface. All pages reference this root file.

## Footer v8
Quick Links are now presented as a clean vertical navigation list with spacing and hover states instead of running together as inline text.

## Final v9
- Rebuilt footer navigation consistently across all pages.
- Quick Links and Solutions are now separate vertical link lists.
- Solutions footer links point to the corresponding solution sections.
- Final mobile footer layout stacks cleanly on small screens.
