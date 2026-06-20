from PIL import Image

def create_thumbnail(src_path, dest_path):
    try:
        img = Image.open(src_path)
        img.thumbnail((400, 400))
        img.save(dest_path)
        print(f"Saved thumbnail of {src_path} to {dest_path}")
    except Exception as e:
        print(f"Error: {e}")

create_thumbnail("c:/Users/saidu/Desktop/Coding ninjas/hero_live.png", "c:/Users/saidu/Desktop/Coding ninjas/hero_live_thumb.png")
create_thumbnail("c:/Users/saidu/Desktop/Coding ninjas/src/assets/hero_bg.png", "c:/Users/saidu/Desktop/Coding ninjas/hero_bg_thumb.png")
