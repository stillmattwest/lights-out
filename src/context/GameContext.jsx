import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPuzzleModal, setShowPuzzleModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [selectedPuzzle, setSelectedPuzzle] = useState("Center Three");

  const setStartCallback = useCallback((value) => setStart(value), []);
  const setResetCallback = useCallback((value) => setReset(value), []);
  const setShowModalCallback = useCallback((value) => setShowModal(value), []);
  const setShowPuzzleModalCallback = useCallback(
    (value) => setShowPuzzleModal(value),
    []
  );
  const setModalMessageCallback = useCallback(
    (value) => setModalMessage(value),
    []
  );
  const setSelectedPuzzleCallback = useCallback(
    (value) => setSelectedPuzzle(value),
    []
  );

  const value = useMemo(
    () => ({
      start,
      setStart: setStartCallback,
      reset,
      setReset: setResetCallback,
      showModal,
      setShowModal: setShowModalCallback,
      modalMessage,
      setModalMessage: setModalMessageCallback,
      selectedPuzzle,
      setSelectedPuzzle: setSelectedPuzzleCallback,
      showPuzzleModal,
      setShowPuzzleModal: setShowPuzzleModalCallback,
    }),
    [
      start,
      setStartCallback,
      reset,
      setResetCallback,
      showModal,
      setShowModalCallback,
      modalMessage,
      setModalMessageCallback,
      selectedPuzzle,
      setSelectedPuzzleCallback,
      showPuzzleModal,
      setShowPuzzleModalCallback,
    ]
  );
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
