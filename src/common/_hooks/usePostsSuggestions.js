import { useMemo, useState } from "react"
import { useSelector } from "react-redux"

import { selectPosts } from "../../redux/posts/postsSlice"

export const usePostsSuggestions = (initialSearchValue) => {
    const { data } = useSelector(selectPosts);
    const [searchValue, setSearchValue] = useState(initialSearchValue);

    const postSuggestions = useMemo(() => {
        if (searchValue) {
            return data.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()));
        }

        return data;
    }, [searchValue]);

    return { searchValue, setSearchValue, postSuggestions };
}