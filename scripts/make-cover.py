"""Generate a branded UGS typographic cover image (1920x1080 JPG).

Usage: python3 scripts/make-cover.py <out.jpg> <category> "<headline>"
Used as a placeholder when no licensed photo is available; swap in a real
photo later by replacing the file (keep the same path).
"""
import sys
import textwrap
from PIL import Image, ImageDraw, ImageFont

CATEGORY_HEX = {
    "Environment": "#2C9B66",
    "Economy": "#6E7A87",
    "Politics": "#F2C94C",
    "Hype/Trend": "#8B5CF6",
    "Technology/AI": "#3B82F6",
    "Health": "#E63946",
}
INK = "#1E2A38"
W, H = 1920, 1080
SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"


def hex_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))


def main(out, category, headline):
    accent = hex_rgb(CATEGORY_HEX[category])
    img = Image.new("RGB", (W, H), hex_rgb(INK))
    d = ImageDraw.Draw(img)

    # Soft diagonal stripes in the category colour, bottom-right.
    for i in range(14):
        x = W - 900 + i * 70
        shade = tuple(int(c * 0.18 + b * 0.82) for c, b in zip(accent, hex_rgb(INK)))
        d.polygon([(x, H), (x + 34, H), (x + 34 + 700, H - 700), (x + 700, H - 700)], fill=shade)

    d.rectangle([0, 0, 24, H], fill=accent)
    label = ImageFont.truetype(SANS_BOLD, 40)
    d.text((120, 120), "UGS NEWSROOM", font=label, fill=(255, 255, 255))
    d.rectangle([120, 190, 120 + 90, 198], fill=accent)
    d.text((120, 230), category.upper(), font=label, fill=accent)

    size = 96
    while size > 48:
        font = ImageFont.truetype(SERIF, size)
        chars = max(10, int(1500 / (size * 0.58)))
        lines = textwrap.wrap(headline, chars)
        line_h = int(size * 1.22)
        if len(lines) * line_h < 560:
            break
        size -= 6
    y = H - 140 - len(lines) * line_h
    for line in lines:
        d.text((120, y), line, font=font, fill=(255, 255, 255))
        y += line_h

    img.save(out, "JPEG", quality=88, optimize=True, progressive=True)


if __name__ == "__main__":
    main(*sys.argv[1:4])
