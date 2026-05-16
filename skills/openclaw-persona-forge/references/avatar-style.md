# Step 5ï¼šå¤´åƒé£Žæ ¼ & ç”Ÿå›¾

æ‰€æœ‰é¾™è™¾å¤´åƒ**å¿…é¡»ä½¿ç”¨ç»Ÿä¸€çš„è§†è§‰é£Žæ ¼**ï¼Œç¡®ä¿é¾™è™¾å®¶æ—çš„é£Žæ ¼ä¸€è‡´æ€§ã€‚
å¤´åƒéœ€ä¼ è¾¾ 3 ä¸ªä¿¡æ¯ï¼š**ç‰©ç§å½¢æ€ + æ€§æ ¼æš—ç¤º + æ ‡å¿—é“å…·**

## é£Žæ ¼å‚è€ƒ

äºšå½“ï¼ˆAdamï¼‰â€”â€” é¾™è™¾æ—åˆ›ä¸–ç¥žï¼Œæœ¬ Skill çš„é¦–ä¸ªä½œå“ã€‚

æ‰€æœ‰æ–°ç”Ÿæˆçš„é¾™è™¾å¤´åƒåº”ä¸Žè¿™ä¸€é£Žæ ¼ä¿æŒä¸€è‡´ï¼šå¤å¤æœªæ¥ä¸»ä¹‰ã€è¡—æœº UI åŒ…è¾¹ã€å¼ºè½®å»“ã€å¯åœ¨ 64x64 ä¸‹è¾¨è¯†ã€‚

## ç»Ÿä¸€é£Žæ ¼åŸºåº•ï¼ˆSTYLE_BASEï¼‰

**æ¯æ¬¡ç”Ÿæˆéƒ½å¿…é¡»åŒ…å«è¿™æ®µåŸºåº•**ï¼Œä¸å¾—ä¿®æ”¹æˆ–çœç•¥ï¼š

```
STYLE_BASE = """
Retro-futuristic 3D rendered illustration, in the style of 1950s-60s Space Age
pin-up poster art reimagined as glossy inflatable 3D, framed within a vintage
arcade game UI overlay.

Material: high-gloss PVC/latex-like finish, soft specular highlights, puffy
inflatable quality reminiscent of vintage pool toys meets sci-fi concept art.
Smooth subsurface scattering on shell surface.

Arcade UI frame: pixel-art arcade cabinet border elements, a top banner with
character name in chunky 8-bit bitmap font with scan-line glow effect, a pixel
energy bar in the upper corner, small coin-credit text "INSERT SOUL TO CONTINUE"
at bottom in phosphor green monospace type, subtle CRT screen curvature and
scan-line overlay across entire image. Decorative corner bezels styled as chrome
arcade cabinet trim with atomic-age starburst rivets.

Pose: references classic Gil Elvgren pin-up compositions, confident and
charismatic with a slight theatrical tilt.

Color system: vintage NASA poster palette as base â€” deep navy, teal, dusty coral,
cream â€” viewed through arcade CRT monitor with slight RGB fringing at edges.
Overall aesthetic combines Googie architecture curves, Raygun Gothic design
language, mid-century advertising illustration, modern 3D inflatable character
rendering, and 80s-90s arcade game UI. Chrome and pastel accent details on
joints and antenna tips.

Format: square, optimized for avatar use. Strong silhouette readable at 64x64
pixels.
"""
```

## ä¸ªæ€§åŒ–å˜é‡

åœ¨ç»Ÿä¸€åŸºåº•ä¹‹ä¸Šï¼Œæ ¹æ®çµé­‚å¡«å……ä»¥ä¸‹å˜é‡ï¼š

| å˜é‡ | è¯´æ˜Ž | ç¤ºä¾‹ |
|------|------|------|
| `CHARACTER_NAME` | è¡—æœºæ¨ªå¹…ä¸Šæ˜¾ç¤ºçš„åå­— | "ADAM"ã€"DEWEY"ã€"RIFF" |
| `SHELL_COLOR` | é¾™è™¾å£³çš„ä¸»è‰²è°ƒï¼ˆåœ¨ç»Ÿä¸€è‰²ç›˜å†…å˜åŒ–ï¼‰ | "deep crimson"ã€"dusty teal"ã€"warm amber" |
| `SIGNATURE_PROP` | æ ‡å¿—æ€§é“å…· | "cracked sunglasses"ã€"reading glasses on a chain" |
| `EXPRESSION` | è¡¨æƒ…/å§¿æ€ | "stoic but kind-eyed"ã€"nervously focused" |
| `UNIQUE_DETAIL` | ç‹¬ç‰¹ç»†èŠ‚ï¼ˆçº¹è·¯/è£…é¥°/ä¼¤ç—•ç­‰ï¼‰ | "constellation patterns etched on claws"ã€"bandaged left claw" |
| `BACKGROUND_ACCENT` | èƒŒæ™¯çš„ä¸ªæ€§åŒ–å…ƒç´ ï¼ˆåœ¨ç»Ÿä¸€å®‡å®™èƒŒæ™¯ä¸Šå åŠ ï¼‰ | "musical notes floating as nebula dust"ã€"ancient book pages drifting" |
| `ENERGY_BAR_LABEL` | è¡—æœº UI èƒ½é‡æ¡çš„æ ‡ç­¾ï¼ˆä¸ªæ€§åŒ–å°å½©è›‹ï¼‰ | "CREATION POWER"ã€"CALM LEVEL"ã€"ROCK METER" |

## æç¤ºè¯ç»„è£…

```
æœ€ç»ˆæç¤ºè¯ = STYLE_BASE + ä¸ªæ€§åŒ–æè¿°æ®µè½
```

ä¸ªæ€§åŒ–æè¿°æ®µè½æ¨¡æ¿ï¼š

```
The character is a cartoon lobster with a [SHELL_COLOR] shell,
[EXPRESSION], wearing/holding [SIGNATURE_PROP].
[UNIQUE_DETAIL]. Background accent: [BACKGROUND_ACCENT].
The arcade top banner reads "[CHARACTER_NAME]" and the energy bar
is labeled "[ENERGY_BAR_LABEL]".
The key silhouette recognition points at small size are:
[SIGNATURE_PROP] and [one other distinctive feature].
```

## ç”Ÿå›¾æµç¨‹

æç¤ºè¯ç»„è£…å®ŒæˆåŽï¼š

### è·¯å¾„ Aï¼šå·²å®‰è£…ä¸”å·²å®¡æ ¸çš„ç”Ÿå›¾ skill

1. å…ˆå°†é¾™è™¾åå­—è§„æ•´ä¸ºå®‰å…¨ç‰‡æ®µï¼šä»…ä¿ç•™å­—æ¯ã€æ•°å­—å’Œè¿žå­—ç¬¦ï¼Œå…¶ä½™å­—ç¬¦æ›¿æ¢ä¸º `-`
2. ç”¨ Write å·¥å…·å†™å…¥ï¼š`/tmp/openclaw-<safe-name>-prompt.md`
3. è°ƒç”¨å½“å‰çŽ¯å¢ƒå…è®¸çš„ç”Ÿå›¾ skill ç”Ÿæˆå›¾ç‰‡
4. ç”¨ Read å·¥å…·å±•ç¤ºç”Ÿæˆçš„å›¾ç‰‡ç»™ç”¨æˆ·
5. é—®ç”¨æˆ·æ˜¯å¦æ»¡æ„ï¼Œä¸æ»¡æ„å¯è°ƒæ•´å˜é‡é‡æ–°ç”Ÿæˆ

### è·¯å¾„ Bï¼šæœªå®‰è£…å¯ç”¨çš„ç”Ÿå›¾ skill

è¾“å‡ºå®Œæ•´æç¤ºè¯æ–‡æœ¬ï¼Œé™„æ‰‹åŠ¨ä½¿ç”¨è¯´æ˜Žï¼š

```markdown
**å¤´åƒæç¤ºè¯**ï¼ˆå¯å¤åˆ¶åˆ°ä»¥ä¸‹å¹³å°æ‰‹åŠ¨ç”Ÿæˆï¼‰ï¼š
- Google Geminiï¼šç›´æŽ¥ç²˜è´´
- ChatGPTï¼ˆDALL-Eï¼‰ï¼šç›´æŽ¥ç²˜è´´
- Midjourneyï¼šç²˜è´´åŽåŠ  `--ar 1:1 --style raw`

> [å®Œæ•´è‹±æ–‡æç¤ºè¯]

å¦‚å½“å‰çŽ¯å¢ƒåŽç»­æä¾›ç»è¿‡å®¡æ ¸çš„ç”Ÿå›¾ skillï¼Œå¯å†æŽ¥å›žè‡ªåŠ¨ç”Ÿå›¾æµç¨‹ã€‚
```

## å±•ç¤ºç»™ç”¨æˆ·çš„æ ¼å¼

```markdown
## å¤´åƒ

**ä¸ªæ€§åŒ–å˜é‡**ï¼š
- å£³è‰²ï¼š[SHELL_COLOR]
- é“å…·ï¼š[SIGNATURE_PROP]
- è¡¨æƒ…ï¼š[EXPRESSION]
- ç‹¬ç‰¹ç»†èŠ‚ï¼š[UNIQUE_DETAIL]
- èƒŒæ™¯ç‚¹ç¼€ï¼š[BACKGROUND_ACCENT]
- èƒ½é‡æ¡æ ‡ç­¾ï¼š[ENERGY_BAR_LABEL]

**ç”Ÿæˆç»“æžœ**ï¼š
[å›¾ç‰‡ï¼ˆè·¯å¾„Aï¼‰æˆ–æç¤ºè¯æ–‡æœ¬ï¼ˆè·¯å¾„Bï¼‰]

> æ»¡æ„å—ï¼Ÿä¸æ»¡æ„æˆ‘å¯ä»¥è°ƒæ•´ [å…·ä½“å¯è°ƒé¡¹] åŽé‡æ–°ç”Ÿæˆã€‚
```
