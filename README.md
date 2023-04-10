<h1>useCountdown</h1>
<p>A React hook to create and manage countdown timers with ease.</p>
<h2>Table of Contents</h2>
<ul>
<li><a href="#motivation" target="_new">Into</a></li>
<li><a href="#motivation" target="_new">Motivation</a></li>
<li><a href="#installation" target="_new">Installation</a></li>
<li><a href="#usage" target="_new">Usage</a></li>
<li><a href="#api" target="_new">API</a></li>
<li><a href="#example" target="_new">Example</a></li>
</ul>

## Intro

<p>Introducing useCountdown, a dead simple yet powerful countdown hook for React applications. This hook is designed to provide an efficient and easy-to-use solution for managing countdown timers. By leveraging the power of requestAnimationFrame and cancelAnimationFrame, it offers better performance and smoother updates compared to other countdown libraries. This approach ensures optimal performance and a smooth user experience in your applications while minimizing overhead. Embrace the simplicity and effectiveness of useCountdown to manage countdown timers in your projects with ease.</p>

## Motivation

<p>The inspiration for creating this hook came while working on a personal project. Realizing the usefulness and versatility of this simple yet powerful tool, it made perfect sense to share it with the developer community, allowing others to benefit from it in their own projects.</p>

## Installation

Using npm:

```sh
$ npm install --save react-native-use-countdown
```

Using yarn:

```sh
$ yarn add react-native-use-countdown
```

## Usage

Import the useCountdown hook:

```javascript
import { useCountdown } from "use-countdown-hook";
```

Use the useCountdown hook in your component, passing the initial time in seconds:

```javascript
const INITIAL_TIME = 60;

const { countdown, isCountdownActive, formattedTime, start, stop, reset } =
  useCountdown(INITIAL_TIME);
```

## API

The useCountdown hook returns an object with the following properties and methods:

- countdown (number): The current remaining time in seconds.
- isCountdownActive (boolean): Indicates if the countdown is currently active.
- formattedTime (string): The current remaining time formatted as hh:mm:ss using the formatTime utility function.
- start (function): Starts the countdown timer.
- stop (function): Stops the countdown timer.
- reset (function): Resets the countdown timer to its initial time.

## Example

Here's an example of how to use the useCountdown hook in a simple timer component:

```javascript
import React from "react";
import { useCountdown } from "use-countdown-hook";

const Timer = () => {
  const initialTime = 60;
  const { countdown, isCountdownActive, formattedTime, start, stop, reset } =
    useCountdown(initialTime);

  return (
    <div>
      <div>Time remaining: {formattedTime}</div>
      <button onClick={start} disabled={isCountdownActive}>
        Start
      </button>
      <button onClick={stop} disabled={!isCountdownActive}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
```

<p>In this example, the Timer component displays the remaining time in a formatted string and provides buttons to start, stop, and reset the countdown timer.</p>
