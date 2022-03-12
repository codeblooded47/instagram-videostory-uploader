require("dotenv").config();
import { IgApiClient } from "instagram-private-api";
import { readFile } from "fs";
import { DateTime, Duration } from "luxon";

import { StickerBuilder } from "instagram-private-api/dist/sticker-builder/sticker-builder";
import { promisify } from "util";

const readFileAsync = promisify(readFile);

const ig = new IgApiClient();
// console.log(process.env);
async function login() {
  ig.state.generateDevice(process.env.IG_USERNAME);
  // ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}

(async () => {
  await login();
  const path = "./test-video.mp4";
  const file = await readFileAsync(path);
  const image = await readFileAsync("./k2.jpg");
  /**
   *  You can move and rotate stickers by using one of these methods:
   *  center()
   *  rotateDeg(180) rotates 180°
   *  scale(0.5) scales the sticker to 1/2 of it's size
   *  moveForward() moves the sticker in front
   *  moveBackwards() moves the sticker in the background
   *  right() aligns the sticker to the right
   *  left() aligns the sticker to the left
   *  top() aligns the sticker to the top
   *  bottom() aligns the sticker to the bottom
   *
   *  All of these are chainable e.g.:
   *  StickerBuilder.hashtag({ tagName: 'tag' }).scale(0.5).rotateDeg(90).center().left()
   *  You can also set the position and size like this:
   *  StickerBuilder.hashtag({
   *     tagName: 'insta',
   *     width: 0.5,
   *     height: 0.5,
   *     x: 0.5,
   *     y: 0.5,
   *   })
   */

  // these stickers are 'invisible' and not 're-rendered' in the app
  // for (let index = 0; index < 10; index++) {
  await ig.publish.story({
    video: file,
    coverImage: image,
  });
  // }
})();
