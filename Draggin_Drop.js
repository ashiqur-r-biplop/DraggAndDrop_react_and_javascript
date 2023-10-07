const [habits, setHabits] = useState(["problem Solving", "English", "work_daily", "Gym"])
const dragItem = useRef(null);
const dragOverItem = useRef(null);
const handleSort = () => {
  // duplicate items
  let _habitItems = [...habits];
  // remove and save the dragged item content
  const draggedItemContent = _habitItems.splice(dragItem.current, 1)[0];
  // switch the position
  _habitItems.splice(dragOverItem.current, 0, draggedItemContent);
  // reset the position ref
  dragItem.current = null;
  dragOverItem.current = null;

  // update the actual array
  setHabits(_habitItems);
};

// draggable
// onDragStart={(e) => (dragItem.current = i)}
// onDragEnter={(e) => (dragOverItem.current = i)}
// onDragEnd={handleSort}
// onDragOver={(e) => e.preventDefault()}