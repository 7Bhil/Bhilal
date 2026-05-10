import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Trophy, Terminal as TerminalIcon } from 'lucide-react';
import './EasterEgg.css';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 12 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const SPEED = 150;

const EasterEgg = ({ onClose }) => {
  const { t } = useLanguage();
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('snake-high-score');
    return saved ? parseInt(saved, 10) : 0;
  });

  const gameLoopRef = useRef();

  const generateFood = useCallback((currentSnake) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      const isOnSnake = currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      if (!isOnSnake) break;
    }
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setScore(0);
    setFood(generateFood(INITIAL_SNAKE));
    setIsStarted(true);
  };

  const moveSnake = useCallback(() => {
    if (isGameOver || !isStarted) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      const newHead = {
        x: (head.x + direction.x + GRID_SIZE) % GRID_SIZE,
        y: (head.y + direction.y + GRID_SIZE) % GRID_SIZE,
      };

      // Check collision with self
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setIsGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check collision with food
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(prev => {
          const newScore = prev + 10;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem('snake-high-score', newScore.toString());
          }
          return newScore;
        });
        setFood(generateFood(newSnake));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, isGameOver, isStarted, generateFood, highScore]);

  useEffect(() => {
    if (isStarted && !isGameOver) {
      gameLoopRef.current = setInterval(moveSnake, SPEED);
    } else {
      clearInterval(gameLoopRef.current);
    }
    return () => clearInterval(gameLoopRef.current);
  }, [isStarted, isGameOver, moveSnake]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, onClose]);

  const renderCell = (x, y) => {
    const isSnake = snake.some(segment => segment.x === x && segment.y === y);
    const isHead = snake[0].x === x && snake[0].y === y;
    const isFood = food.x === x && food.y === y;

    let className = 'grid-cell';
    if (isSnake) className += ' snake-cell';
    if (isHead) className += ' snake-head';
    if (isFood) className += ' food-cell';

    return <div key={`${x}-${y}`} className={className}></div>;
  };

  return (
    <div className="easter-egg-overlay">
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-title">
            <TerminalIcon size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            {t('game.title')}
          </div>
          <button className="close-button" onClick={onClose} aria-label={t('game.close')}>
            <X size={18} />
          </button>
        </div>

        <div className="game-board">
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = i % GRID_SIZE;
            const y = Math.floor(i / GRID_SIZE);
            return renderCell(x, y);
          })}
        </div>

        {(!isStarted || isGameOver) && (
          <div className="game-overlay">
            {isGameOver ? (
              <>
                <h2>{t('game.gameOver')}</h2>
                <p>{t('game.score')}: {score}</p>
                <button className="start-btn" onClick={resetGame}>{t('game.restart')}</button>
              </>
            ) : (
              <>
                <TerminalIcon size={48} color="#00ff41" />
                <h2>{t('game.start')}</h2>
                <p className="instructions">{t('game.instructions')}</p>
                <button className="start-btn" onClick={() => setIsStarted(true)}>START</button>
              </>
            )}
          </div>
        )}

        <div className="game-info">
          <div>{t('game.score')}: {score}</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Trophy size={14} style={{ marginRight: '5px' }} />
            {t('game.highScore')}: {highScore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;
