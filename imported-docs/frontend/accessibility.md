# Accessibility

> This page was last reviewed 6th March 2024. It needs to be reviewed again on the 6th December 2024.

## What is the standard for accessibility?

In accordance with the Digital Government Act, the municipality of Amsterdam is required to build all its websites and applications in compliance with the Web Content Accessibility Guidelines (WCAG) at levels A and AA.

## When and for whom is this standard applicable?

This standard applies to front-end developers.\
The law is applicable to all government websites and applications, including intranets, extranets, and cloud applications. Additionally, it includes mobile applications, encompassing native, web, and hybrid apps for mobile devices.

## How to test for accessibility

### in general?

- [ ] Manually test your application to ensure proper rendering:
  - [ ] adjusting the text size to the maximum
  - [ ] zooming in at 200%
  - [ ] verify that all links feature descriptive link text
- [ ] Evaluate the usability of your application by
  - [ ] testing a workflow on your application without the use of a keyboard. Employ screen readers, such as [JAWS](https://accessibility.psu.edu/screenreaders/jawscommands/) or [VoiceOver](https://support.apple.com/guide/voiceover-guide/welcome/web).
    - [ ] confirm the page's order is logical
    - [ ] verify all content is accessible to the screen reader
  - [ ] testing a workflow on your application without the use of a mouse  Employ keyboard shortcuts
    - [ ] check if the focus ring remains consistently visible
- [ ] Ensure all videos are captioned
- [ ] Ensure all audio is described as needed
- [ ] Ensure all audio-only files are transcribed

### on a web application?

- [ ] Validate your webpage with [WebAIM’s WAVE Accessibility Evaluation Tool](https://wave.webaim.org/standalone) WebAIM's WAVE Accessibility Evaluation Tool offers the option to disable stylesheets, allowing you to assess the content ordering as presented to screen readers.
- [ ] Validate your webpage with [Markup Validation Service](https://validator.w3.org/)
- [ ] Validate your webpage with [Lighthouse from Google](https://developer.chrome.com/docs/lighthouse/overview)
- [ ] Manually test the rendering of your application by enabling high contrast mode on your website (you can use a plugin like High Contrast in Chrome)
- [ ] Review your page using a grayscale filter or a color-deficient vision simulator, such as [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/), to confirm that the content is not solely reliant on color
- [ ] Review the print preview of your webpage (CTL + P on Windows)
- [ ] Translate your page into another language, including a right-to-left language like Arabic
  - Confirm the following:
  - [ ] ensure accurate rendering of all elements
  - [ ] verify precise translation of all content (employ a screen reader to catch potential oversights, especially in aria-labels)
  - [ ] check for proper content orientation when translated to or from a right-to-left language
- [ ] Apply the provided CSS snippet and confirm that all elements are still rendered correctly, adhering to WCAG 1.4.12. In Chrome, you can utilize the Stylus plugin for easy implementation.

```css
*{
  line-height: 1.5 !important;
  letter-spacing: 0.12em !important;
  word-spacing: 0.16em !important;
} p
  {
  margin-bottom: 2em !important;
 }
```

### on a mobile app?

- [ ] For Android apps, employ the Accessibility Scanner app, and for iOS apps, activate the Xcode Accessibility Inspector within Xcode.
  - [ ] check for unlabeled elements
  - [ ] check for clipped text
  - [ ] check the color contrast levels
  - [ ] check the text size
- [ ] Follow the tips and tricks provided on [Mobile A11y](https://mobilea11y.com/).
- [ ] Utilize a screen reader to assess the element order in your app. For Android, you can use TalkBack, and for iOS, employ VoiceOver.
- [ ] Utilize [Appium](http://appium.io/docs/en/latest/) to develop a test suite for a mobile app, incorporating accessibility testing.

### on a non-web application?

- [ ] Refer to the guidance provided in [Applying WCAG 2.2 to Non-Web Information and Communications Technologies (WCAG2ICT)](https://www.w3.org/TR/wcag2ict-22/#introduction) for additional tips and tricks.

## How to comply with the WCAG?

The WCAG can be broken down into four key principles. If the website or application aligns with these principles, it meets the WCAG requirements. The four principles are:

1. **Perceivable:** Ensure that everything on the website or app is easily noticeable by everyone.
2. **Operable:** Make sure that everything on the website or app is accessible to everyone, including those who don't use a mouse or keyboard.
3. **Understandable:** Ensure that everything on the website or app, including error handling, is comprehensible for both software and users.
4. **Robust:** Guarantee that the website or app can be utilized across various devices and assistive technologies.

W3.org has offered [a concise guide](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.0) detailing actions you can take to align with the four principles. Below are brief suggestions for each principle:

## What to avoid?

Incorporate accessibility into the core design of your application rather than treating it as an add-on feature.

## Considerations

Testing accessibility thoroughly can be challenging. Consider collaborating with users, including those with disabilities, and invite them to test and provide feedback.

## Further reading

- [Testing for Accessibility](https://accessibility.psu.edu/testing/protocol/)
- [Praktische toegankelijkheidstips](https://www.digitoegankelijk.nl/aan-de-slag/tips)

## Acknowledgments

Many thanks to [Aram Limpens](https://github.com/alimpens) and [Sirée Koolen-Wijkstra](https://github.com/SireeKoolenWijkstra)
