import { SearchProps } from "./Search.props"
import styles from './Search.module.css'

export const Search: React.FC<SearchProps> = ({ onFilterChange }) => {
    return(
        <input 
            className={styles.searchInput} 
            type="text" 
            placeholder="Digite aqui ..."
            onChange={(e) => onFilterChange(e.target.value)}
        />
    )
}