import React, { useState, createRef } from "react";
import Game, { Round } from "../classes/Game";
import RoundSummary from "./RoundSummary";
import RoundPlayerInput from "./RoundPlayerInput";

interface Props {
  game: Game;
  applyRound: Function;
  exitRound: Function;
}

const ScoreRound = ({ game, applyRound, exitRound }: Props) => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [score, setScore] = useState("");
  const [round, setRound] = useState(new Round([]));
  const [isShowingSummary, setIsShowingSummary] = useState(false);

  const textField = createRef<HTMLDivElement>();

  const onNextPlayer = (isNegative = false) => {
    // add an item to the history
    setRound((prevRound) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let newScore = "0";

      if (isNegative) {
        if (score !== "") {
          newScore = "-" + score;
        } else {
          newScore = "0";
        }
      } else {
        if (score !== "") {
          newScore = score;
        } else {
          newScore = "0";
        }
      }

      prevRound.setValue(currentTeamIndex, newScore);

      // Increase the current team index
      setCurrentTeamIndex((prevIndex) => {
        if (prevIndex === game.teams.length - 1) {
          return prevIndex;
        }

        // fix the score
        setScore(() => {
          if (prevRound.teams[prevIndex + 1]) {
            console.log("We have an item", prevRound.teams[prevIndex + 1])
            return String(Number(prevRound.teams[prevIndex + 1]));
          }

          return "";
        });

        return prevIndex + 1;
      });
      return prevRound;
    });

    textField.current?.focus();
  };

  const onPreviousPlayer = (isNegative = false) => {
    // add item to history
    setRound((prevRound) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let newScore = "0";

      if (isNegative) {
        if (score !== "") {
          newScore = "-" + score;
        } else {
          newScore = "0";
        }
      } else {
        if (score !== "") {
          newScore = score;
        } else {
          newScore = "0";
        }
      }

      prevRound.setValue(currentTeamIndex, newScore);



      // decrease the currentTeamIndex
    setCurrentTeamIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return prevIndex;
      }

      setScore(() => {
        if (prevRound.teams[prevIndex - 1]) {
          console.log("We have an item", prevRound.teams[prevIndex - 1])
          return prevRound.teams[prevIndex - 1];
        }

        return "";
      });

      return prevIndex - 1;
    });

    

      return prevRound;
    });

    

    textField.current?.focus();
  };

  const showSummary = (isNegative = false) => {
    setRound((prevRound) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let newScore = "0";

      if (isNegative) {
        if (score !== "") {
          newScore = "-" + score;
        } else {
          newScore = "0";
        }
      } else {
        if (score !== "") {
          newScore = score;
        } else {
          newScore = "0";
        }
      }

      prevRound.setValue(currentTeamIndex, newScore);
      return prevRound;
    });

    setIsShowingSummary(() => true);
  };

  const backToEdit = () => {
    setIsShowingSummary(() => false);
  };

  return (
    <div
      style={{
        paddingLeft: "0",
        paddingRight: "0",
        marginLeft: "0",
        marginRight: "0",
      }}
    >
      {isShowingSummary ? (
        <RoundSummary
          round={round}
          game={game}
          backToEdit={backToEdit}
          confirmRound={applyRound}
        />
      ) : (
        <RoundPlayerInput
          currentTeamIndex={currentTeamIndex}
          game={game}
          score={score}
          textField={textField}
          onPreviousPlayer={onPreviousPlayer}
          onNextPlayer={onNextPlayer}
          showSummary={showSummary}
          setScore={setScore}
          exitRound={exitRound}
        />
      )}
    </div>
  );
};

export default ScoreRound;

/**
 * const onNextPlayer = () => {
    saveToRound();
    if (round.teams[currentTeamIndex + 1]) {
      setScore(String(Number(round.teams[currentTeamIndex + 1])));
    }

    setCurrentTeamIndex(currentTeamIndex + 1);
    textField.current?.focus();
  };

  const onPreviousPlayer = () => {
    saveToRound();
    if (round.teams[currentTeamIndex - 1]) {
      setScore(String(Number(round.teams[currentTeamIndex - 1])));
    }
    setCurrentTeamIndex(currentTeamIndex - 1);

    const node = textField.current;
    if (node) {
      node.focus();
    }
  };

  const getScoreString = () => {
    const value = Number(score);

    if (value > 0) {
      return "+" + value;
    }

    return score;
  };

  const saveToRound = () => {
    const scoreString = getScoreString();

    const newRound = new Round(round.teams);
    newRound.setValue(currentTeamIndex, scoreString);

    setScore("");
  };

  const onSetScoreInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setScore(event.target.value);
  };

  const showSummary = () => {
    saveToRound();
    console.log(round);
    setIsShowingSummary(true);
  };

  const backToEdit = () => {
    setIsShowingSummary(false);

    if (round.teams[currentTeamIndex]) {
      setScore(String(Number(round.teams[currentTeamIndex])));
    }
  };

  const makeNegative = () => {
    setScore("-" + score);

    if (currentTeamIndex + 1 === game.teams.length) {
      console.log("last one");
      showSummary();
      return;
    }

    console.log("in make negative", score);

    onNextPlayer();
  };
 */
