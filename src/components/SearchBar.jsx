import Icon from './Icon.jsx';

// Simple controlled search input with an icon and a clear button.
export default function SearchBar({ value, onChange, placeholder = 'Search…' }) {
  return (
    <div className="searchbar">
      <span className="s-ico"><Icon name="search" size={18} /></span>
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        autoCapitalize="none"
      />
      {value && (
        <button className="s-clear" onClick={() => onChange('')} aria-label="Clear search">
          <Icon name="x" size={18} />
        </button>
      )}
    </div>
  );
}
