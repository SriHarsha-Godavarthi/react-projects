import React from "react";
import "./skeleton.css";

export function CardItemSkeleton(props) {
  return <div className="skeleton" {...props} />;
}

export function ProductCardSkeleton() {
  return (
    <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 12 }}>
      <CardItemSkeleton style={{ height: 180 }} />
      <CardItemSkeleton style={{ height: 16, width: '70%', marginTop: 12 }} />
      <CardItemSkeleton style={{ height: 16, width: '70%', marginTop: 12 }} />
      <div style={{display: 'flex',justifyContent:'space-between'}}>
      <CardItemSkeleton style={{ height: 16, width: '20%', marginTop: 8 }} />
      <CardItemSkeleton style={{ height: 16, width: '15%', marginTop: 8 }} />
      </div>
    </div>
  );
}

export default function Skeleton({ count = 8 }) {
  return (<> 
    <div className="header_skeleton">
          <CardItemSkeleton style={{ height: '2.4rem',width: '100vw'}}/>
          <div className="nav_list_skeleton">
          <CardItemSkeleton style={{ height: 16}}/>
          <CardItemSkeleton style={{ height: 16}}/>
          <CardItemSkeleton style={{ height: 16}}/>
          <CardItemSkeleton style={{ height: 16}}/>

          </div>
    </div>   
    <div style={{
      display: 'grid',
      gap: 16,
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
    }}>
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
    </>
  );
}
