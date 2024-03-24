"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { GET } from '../app/api/articles/route.js';

export function Page() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageClick(url) {
    // URLからページ番号を取得
    const newPage = url ? new URL(url).searchParams.get('page') : 1;
    setCurrentPage(newPage);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GET();
        console.log('Fetched data:', data);  // データのフェッチが成功した場合にログを出力
        setData(data); // データをセット
      } catch (error) {
        console.error('Error fetching data:', error);  // エラーが発生した場合にログを出力
      }
    }
    fetchData();
  }, [currentPage]);// currentPageの変更時に再度データを取得

  function handlePageClick(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <div>
      {data && data.data ? (
        <ul>
          {data.data.map((article) => (
            <li key={article.id}>
              <a href={`http://localhost:3000/article/${article.slug}`} className="blog_list_link">
                <div className="blog_list_container">

                  <h2>{article.title}</h2>
                  <p className="subject_style">{article.description}</p>
                  <span className="read_more">read more...</span>
                  <span className="blog_tags">tags</span>

                </div>
              </a>
            </li>

          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      <ul className="pagination">
        {data && data.links && data.links.map((link, index) => {
          // 特殊ラベル（「Next」と「Previous」）を処理
          if (link.label.includes('Next') || link.label.includes('Previous')) {
            return (
              <li key={index} className={`page-item ${link.active ? 'active' : ''}`}>
                <a
                  className="page-link"
                  href={link.url ? link.url : '#'}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageClick(link.url);
                  }}>
                  {link.label}
                </a>
              </li>
            );
          }

          // 通常のページ番号を処理
          return (
            <li key={index} className={`page-item ${link.active ? 'active' : ''}`}>
              <a
                className="page-link"
                href={link.url ? link.url : '#'}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageClick(link.label);
                }}>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
