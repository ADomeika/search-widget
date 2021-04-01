import { useRef, useState } from 'react';
import { debounce } from 'lodash';

const URL = 'https://www.rentalcars.com';
const NUMBER_OF_RESULTS = 6;

const useApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useRef(debounce(async (term) => {
    setLoading(true);
    try {
      const res = await fetch(`${URL}/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${NUMBER_OF_RESULTS}&solrTerm=${term}`);
      const json = await res.json();
      setData(json.results.docs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, 300)).current;

  return { fetchData, data, loading, setData };
};

export default useApi;
