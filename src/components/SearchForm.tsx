import { setSearch } from '../stores/search'

const SearchForm = () => {
  return (
    <form class="search-form" method="get">
      <div className="search-form__input">
        <label for="search">Search</label>
        <input
          id="search"
          type="text"
          autoComplete="false"
          onInput={(e) => {
            setSearch((e.target as HTMLInputElement).value)
          }}
        />
      </div>


      <button type="submit" aria-label="Search">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.49996 23.1136L10.3749 15.2386C10.9999 15.7386 11.7187 16.1344 12.5312 16.4261C13.3437 16.7178 14.2082 16.8636 15.1249 16.8636C17.3957 16.8636 19.3174 16.0773 20.8899 14.5048C22.4632 12.9315 23.2499 11.0094 23.2499 8.73862C23.2499 6.4678 22.4632 4.54572 20.8899 2.9724C19.3174 1.3999 17.3957 0.613655 15.1249 0.613655C12.8541 0.613655 10.932 1.3999 9.35869 2.9724C7.78619 4.54572 6.99995 6.4678 6.99995 8.73862C6.99995 9.65528 7.14578 10.5199 7.43744 11.3324C7.72911 12.1449 8.12494 12.8636 8.62494 13.4886L0.749973 21.3636L2.49996 23.1136ZM15.1249 14.3636C13.5624 14.3636 12.2341 13.8169 11.1399 12.7236C10.0466 11.6294 9.49994 10.3011 9.49994 8.73862C9.49994 7.17613 10.0466 5.8478 11.1399 4.75364C12.2341 3.66031 13.5624 3.11364 15.1249 3.11364C16.6874 3.11364 18.0157 3.66031 19.1099 4.75364C20.2032 5.8478 20.7499 7.17613 20.7499 8.73862C20.7499 10.3011 20.2032 11.6294 19.1099 12.7236C18.0157 13.8169 16.6874 14.3636 15.1249 14.3636Z"
            fill="#F1F1F1"
          ></path>
        </svg>
      </button>
    </form>
  )
}

export default SearchForm
