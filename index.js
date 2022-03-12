"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var instagram_private_api_1 = require("instagram-private-api");
var fs_1 = require("fs");
var luxon_1 = require("luxon");
var sticker_builder_1 = require("instagram-private-api/dist/sticker-builder");
var util_1 = require("util");
var readFileAsync = (0, util_1.promisify)(fs_1.readFile);
var ig = new instagram_private_api_1.IgApiClient();
function login() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ig.state.generateDevice(process.env.IG_USERNAME);
                    // ig.state.proxyUrl = process.env.IG_PROXY;
                    return [4 /*yield*/, ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD)];
                case 1:
                    // ig.state.proxyUrl = process.env.IG_PROXY;
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var path, file, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var _q, _r;
    return __generator(this, function (_s) {
        switch (_s.label) {
            case 0: return [4 /*yield*/, login()];
            case 1:
                _s.sent();
                path = './test.jpg';
                return [4 /*yield*/, readFileAsync(path)];
            case 2:
                file = _s.sent();
                _b = (_a = ig.publish).story;
                _q = {
                    file: file
                };
                _f = (_e = new sticker_builder_1.StickerBuilder()
                    // these are all supported stickers
                    .add(sticker_builder_1.StickerBuilder.hashtag({
                    tagName: 'insta'
                }).center())
                    .add(sticker_builder_1.StickerBuilder.mention({
                    userId: ig.state.cookieUserId
                }).center())
                    .add(sticker_builder_1.StickerBuilder.question({
                    question: 'My Question'
                }).scale(0.5))
                    .add(sticker_builder_1.StickerBuilder.question({
                    question: 'Music?',
                    questionType: 'music'
                }))
                    .add(sticker_builder_1.StickerBuilder.countdown({
                    text: 'My Countdown',
                    // @ts-ignore
                    endTs: luxon_1.DateTime.local().plus(luxon_1.Duration.fromObject({ hours: 1 }))
                }))
                    .add(sticker_builder_1.StickerBuilder.chat({
                    text: 'Chat name'
                })))
                    .add;
                _h = (_g = sticker_builder_1.StickerBuilder).location;
                _r = {};
                return [4 /*yield*/, ig.locationSearch.index(13, 37)];
            case 3:
                _j = (_d = _f.apply(_e, [_h.apply(_g, [(_r.locationId = (_s.sent()).venues[0].external_id,
                            _r)])])
                    .add(sticker_builder_1.StickerBuilder.poll({
                    question: 'Question',
                    tallies: [{ text: 'Left' }, { text: 'Right' }]
                }))
                    .add(sticker_builder_1.StickerBuilder.quiz({
                    question: 'Question',
                    options: ['0', '1', '2', '3'],
                    correctAnswer: 1
                }))
                    .add(sticker_builder_1.StickerBuilder.slider({
                    question: 'Question',
                    emoji: '❤'
                })))
                    .add;
                _l = (_k = sticker_builder_1.StickerBuilder).mentionReel;
                return [4 /*yield*/, ig.feed.userStory('username').items()];
            case 4:
                _m = (_c = _j.apply(_d, [_l.apply(_k, [(_s.sent())[0]]).center()]))
                    .add;
                _p = (_o = sticker_builder_1.StickerBuilder).attachmentFromMedia;
                return [4 /*yield*/, ig.feed.timeline().items()];
            case 5: 
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
            return [4 /*yield*/, _b.apply(_a, [(
                    // this creates a new config
                    _q.stickerConfig = _m.apply(_c, [_p.apply(_o, [(_s.sent())[0]]).center()])
                        // you can also set different values for the position and dimensions
                        .add(sticker_builder_1.StickerBuilder.hashtag({
                        tagName: 'insta',
                        width: 0.5,
                        height: 0.5,
                        x: 0.5,
                        y: 0.5
                    }))
                        .build(),
                        _q)])];
            case 6:
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
                _s.sent();
                return [2 /*return*/];
        }
    });
}); })();
