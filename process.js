const Jimp = require('jimp');

async function processImage() {
    try {
        const image = await Jimp.read('Apple-iPhone-17-A19-gaming-250909.jpg.large_2x.jpg');
        
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            if (r > 235 && g > 235 && b > 235) {
                this.bitmap.data[idx + 0] = 0;
                this.bitmap.data[idx + 1] = 0;
                this.bitmap.data[idx + 2] = 0;
            }
        });

        await image.writeAsync('Apple-iPhone-17-A19-gaming-250909-black.jpg');
        console.log("Image processed successfully.");
    } catch (err) {
        console.error(err);
    }
}
processImage();
