// FilterBar - the toggle "Show only active members" + the "List" / "Grid" switch.
// It has no state of its own: App owns the state and passes it down as props.
import styles from './FilterBar.module.css'

/**
 * @param {object} props
 * @param {boolean} props.showOnlyActive - is the checkbox checked?
 * @param {() => void} props.onToggleActive - call it when the checkbox is clicked
 * @param {"list" | "grid"} props.layout - the current layout. Its button gets the class styles.active
 * @param {(layout: "list" | "grid") => void} props.onLayoutChange - call it with "list" or "grid"
 */
export default function FilterBar({
  showOnlyActive,
  onToggleActive,
  layout,
  onLayoutChange,
}) {
  // functions
  function handleClickList() {
    onLayoutChange('list')
  }
  function handleClickGrid() {
    onLayoutChange('grid')
  }

  return (
    <div className={styles.filterBar}>
      <label htmlFor="onlyActive" className={styles.toggle}>
        <input
          type="checkbox"
          id="onlyActive"
          checked={showOnlyActive}
          onChange={onToggleActive}
        />
        Show only active members
      </label>

      <label htmlFor="search" className={styles.search}>
        Search member...
        {/* <input type="text" id="search" /> */}
      </label>

      <div className={styles.layoutSwitch}>
        <button
          className={layout === 'list' ? styles.active : ''}
          onClick={handleClickList}
        >
          List
        </button>
        <button
          className={layout === 'grid' ? styles.active : ''}
          onClick={handleClickGrid}
        >
          Grid
        </button>
      </div>
    </div>
  )
}
