export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const APPLY_FILTERS = 'APPLY_FILTERS';

export const toggleFavourite = (id) =>{
    return { type: TOGGLE_FAVOURITE, bookId: id};

};

export const toggleComplete = (id) =>{
    return { type:TOGGLE_COMPLETE, bookId:id};
};

export const applyFilters = (appliedFilters) =>{
    return { type:APPLY_FILTERS, filters: appliedFilters};
};
