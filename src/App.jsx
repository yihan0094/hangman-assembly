import React, { use } from "react";
import { languages } from "./languages";
import { useState, useEffect, useMemo } from "react";
import clsx from "clsx";
import { getFarewellText } from "./utils";
import { getRandomWord } from "./utils";
import Confetti from "react-confetti";

export default function Hangman() {
  //State values
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [guessedLetter, setGuessedLetter] = useState([]);

  //Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  //Derived values
  const numGuessesLeft = languages.length - 1;
  const wrongGuessesCount = guessedLetter.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetter.includes(letter));
  const isGameLost = wrongGuessesCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetter[guessedLetter.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  function handleGuess(letter) {
    if (!guessedLetter.includes(letter)) {
      setGuessedLetter((prevLetter) => [...prevLetter, letter]);
    }
  }

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetter([]);
  }

  // Other ways to wrtie the function
  // function handleGuess(letter) {
  //   setGuessedLetter((prevLetter) =>
  //     prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
  //   );
  // }

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function statusElement() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell">
          {getFarewellText(languages[wrongGuessesCount - 1].name)}
        </p>
      );
    }
    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    }
    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    } else {
      return null;
    }
  }

  const languageElements = languages.map((lang, index) => {
    const isLost = wrongGuessesCount > index;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    const className = clsx("chip", { lost: isLost });
    return (
      <span className={className} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const wordElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetter.includes(letter);
    const letterClassName = clsx(
      isGameLost && !guessedLetter.includes(letter) && "missed-letter"
    );

    return (
      <span className={letterClassName} key={index}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetter.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        key={letter}
        disabled={isGameOver}
        aria-disabled={guessedLetter.includes(letter)}
        aria-label={`Letter ${letter}`}
        onClick={() => handleGuess(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <header>
        <h1>Assembly : Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section aria-live="polite" role="status" className={gameStatusClass}>
        {statusElement()}
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="input-container">{wordElements}</section>

      {/* Combined visually-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetter.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>
      <section className="keyboard-container">{keyboardElements}</section>
      {isGameOver ? (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      ) : (
        ""
      )}
    </main>
  );
}
