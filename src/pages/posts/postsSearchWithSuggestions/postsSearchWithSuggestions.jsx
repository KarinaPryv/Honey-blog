import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';

import { usePostsSuggestions } from '../../../common/_hooks/usePostsSuggestions';
import { useToggle } from '../../../common/_hooks/useToggle';
import { selectQuery, setQuery } from '../../../redux/posts/postsSlice';
import { useTranslation } from '../../../common/_hooks/useTranslation';
import { SearchPostsSuggestionsItem } from '../searchPostsSuggestionItem/searchPostsSuggestionItem';
import './postsSearchWithSuggestions.scss';

const { Search } = Input;

const PostsSearchWithSuggestions = () => {
    const dispatch = useDispatch();
    const query = useSelector(selectQuery);

    const { searchValue, setSearchValue, postSuggestions } = usePostsSuggestions(query);
    const { visible, setVisibleValue } = useToggle();
    const translate = useTranslation();

    const onSearch = (value) => {
        dispatch(setQuery(value));
        setSearchValue(value);
        setVisibleValue(false);
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        setVisibleValue(true);
    }

    return (
        <div className='search-block'>
            <Search
                value={searchValue}
                placeholder={translate('search')}
                allowClear={true}
                onSearch={onSearch}
                onChange={handleChange}
            />
            {
                searchValue && visible &&
                <ul className="posts-suggestions-block">
                    {
                        postSuggestions.map((postsSuggestion) => {
                            return (
                                <SearchPostsSuggestionsItem key={postsSuggestion.id} 
                                                            postsSuggestion={postsSuggestion} 
                                                            onSearch={onSearch} />
                            )
                        })
                    }

                    {postSuggestions.length < 1 && <span className="text-muted">{translate('noSearchedPosts')}</span>}
                </ul>
            }
        </div>
    )
};

export default PostsSearchWithSuggestions;