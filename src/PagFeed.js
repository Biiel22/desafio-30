
import React from 'react';
import Feed from './components/Feed/Feed';
import Header from './Header';
import Sidebar from './Siderbar';

export default function PagFeed() {
  return (
    <div>
        <Header/>
        <div className="appBody">
            <Sidebar />
            <Feed />
        </div>
    </div>
  )
}
