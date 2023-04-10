"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCountdown = void 0;
const react_1 = require("react");
const helpers_1 = require("./utils/helpers");
const useCountdown = (time) => {
    const [countdown, setCountdown] = (0, react_1.useState)(time);
    const [isCountdownActive, setIsCountdownActive] = (0, react_1.useState)(false);
    const intervalRef = (0, react_1.useRef)(null);
    const start = (0, react_1.useCallback)(() => {
        if (intervalRef.current !== null)
            return;
        const startTime = Date.now();
        setIsCountdownActive(true);
        const tick = () => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            const remainingTime = time - elapsedTime;
            setCountdown(remainingTime);
            if (remainingTime > 0) {
                intervalRef.current = requestAnimationFrame(tick);
            }
            else {
                stop();
            }
        };
        intervalRef.current = requestAnimationFrame(tick);
    }, [time]);
    const stop = (0, react_1.useCallback)(() => {
        if (intervalRef.current !== null) {
            cancelAnimationFrame(intervalRef.current);
            intervalRef.current = null;
            setIsCountdownActive(false);
        }
    }, []);
    const reset = (0, react_1.useCallback)(() => {
        stop();
        setCountdown(time);
    }, [stop, time]);
    (0, react_1.useEffect)(() => {
        return () => stop();
    }, [stop]);
    return {
        countdown,
        isCountdownActive,
        formattedTime: (0, helpers_1.formatTime)(countdown),
        start,
        stop,
        reset,
    };
};
exports.useCountdown = useCountdown;
//# sourceMappingURL=index.js.map