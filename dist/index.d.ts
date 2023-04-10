export declare const useCountdown: (time: number) => {
    countdown: number;
    isCountdownActive: boolean;
    formattedTime: string;
    start: () => void;
    stop: () => void;
    reset: () => void;
};
