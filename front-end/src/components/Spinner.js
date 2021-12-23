import React from 'react';



const Spinner = () => {
    return (
        <div class="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
        <span class="sr-only">검색중...</span>
        </div>
    );
};

export default Spinner;