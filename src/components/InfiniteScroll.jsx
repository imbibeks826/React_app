import React, { useEffect, useRef, useState } from 'react'
import { FixedSizeList as List } from 'react-window';

const InfiniteScroll = () => {
    let listRef = useRef(null);
    const [data, setData] = useState(Array.from({length: 20}).map((_,i)=> `Item ${i}`));
    const [isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     // const loader = loaderRef;
    //     console.log('Loader Ref', loaderRef.current);
    //     if(!loaderRef.current) return;
    //     let observer = new IntersectionObserver((entries,observer)=>{
    //         entries.forEach(entry=>{
    //             console.log('Entry', entry);
    //             if(entry.isIntersecting){
    //             setData(prev => [...prev, ...Array.from({length: 20}).map((_,i)=> `Item ${prev.length + i}`)]);
    //             }
    //         })
    //     },{
    //         threshold: 0.5,
    //     });
    //     observer.observe(loaderRef.current);

    //     return ()=> observer.disconnect();
    // },[]);

    const handleScroll = ({ scrollOffset, scrollUpdateWasRequested }) => {
        // Get the List component's internal scroll height
        if(listRef.current && scrollUpdateWasRequested === false) {
            const listHeight = 500; // Container height
            const itemSize = 60;
            const itemCount = data.length;
            const totalHeight = itemCount * itemSize;
            
            // If scrolled near bottom (within 200px)
            if(scrollOffset + listHeight > totalHeight - 200 && !isLoading) {
                setIsLoading(true);
                setTimeout(() => {
                    setData(prev => {
                        const newItems = Array.from({length: 20}).map((_,i)=> `Item ${prev.length + i}`);
                        return [...prev, ...newItems];
                    });
                    setIsLoading(false);
                }, 500);
            }
        }
    };

    const Row = ({index, style})=>{
        const isLoadingRow = index === data.length;
        return (
            <div
                style={{
                    ...style,
                    boxSizing: 'border-box',
                    padding: '10px 20px',
                    borderBottom: '1px solid #ddd',
                    backgroundColor: isLoadingRow ? '#f5f5f5' : (index % 2 === 0 ? '#fff' : '#fafafa'),
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                {isLoadingRow ? (
                    <span>⏳ Loading...</span>
                ) : (
                    <>
                        <span style={{fontWeight: 'bold', marginRight: '10px'}}>#{index + 1}</span>
                        {data[index]}
                    </>
                )}
            </div>
        );
    };
  return (
    <div style={{height: '500px', width: '300px', border: '1px solid black', overflow: 'auto', alignItems: 'center', margin: '20px auto'}}>
        <List
            ref={listRef}
            height={500}
            itemCount={isLoading ? data.length + 1 : data.length}
            itemSize={60}
            width={'100%'}
            onScroll={handleScroll}
        >
            {Row}
        </List>
    </div>
  )
}

export default InfiniteScroll
