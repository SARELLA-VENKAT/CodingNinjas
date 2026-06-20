from PIL import Image

try:
    img = Image.open("c:/Users/saidu/Desktop/Coding ninjas/src/assets/hero_bg.png")
    print("Mode:", img.mode)
    print("Size:", img.size)
    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
        alpha = img.convert('RGBA').split()[-1]
        bbox = alpha.getbbox()
        print("Alpha bounding box:", bbox)
        # Check if alpha is fully opaque or has transparent parts
        extrema = alpha.getextrema()
        print("Alpha min/max:", extrema)
    else:
        print("No alpha channel / transparency detected.")
except Exception as e:
    print("Error:", e)
