"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = void 0;
/**
 * Formats a given time in seconds to a MM:SS string representation.
 *
 * @function
 * @param {number} time - The time in seconds to be formatted.
 * @returns {string} The formatted time string in MM:SS format.
 * @example
 * Returns "02:30"
 * formatTime(150);
 */
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};
exports.formatTime = formatTime;
//# sourceMappingURL=helpers.js.map