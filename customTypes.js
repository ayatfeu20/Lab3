// customTypes.js
/**
 * @typedef {Object} Exercises
 * @property {string[]} bodyParts
 * @property {string} bodyPart
 * @property {string} equipment
 * @property {string} gifUrl
 * @property {string} id
 * @property {string} name
 * @property {string} target
 */

/**
 * @typedef {Object} ExerciseDetail
 * @property {string} bodyPart
 * @property {string} equipment
 * @property {string} gifUrl
 * @property {string} id
 * @property {string} name
 * @property {string} target
 * @property {string[]} instructions
 */

/**
 * @typedef {Object} YoutubeDetail
 * @property {Video} video
 */

/**
 * @typedef {Object} Video
 * @property {string} channelId
 * @property {string} channelName
 * @property {string} description
 * @property {string} lengthText
 * @property {string} publishedTimeText
 * @property {string} title
 * @property {string} videoId
 * @property {string} viewCountText
 * @property {Thumbnails[]} thumbnails
 */

/**
 * @typedef {Object} Thumbnails
 * @property {number} height
 * @property {string} url
 * @property {number} width
 */
