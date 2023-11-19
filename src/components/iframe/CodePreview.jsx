import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco, darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { code1 } from './data';

export default function CodePreview() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap">
        
        <div className="w-full px-2">
          <div className="w-1/3">
            <ul className="flex mb-0 list-none gap-2 flex-wrap  pb-4 flex-row cursor-pointer" role="tablist">
              <li className="flex justify-center ">
                <a
                  className={'text-xs border-2 border-black uppercase px-4 py-2  rounded block leading-normal ' + (openTab === 1 ? 'bg-[#111827] text-white ' : ' bg-white text-black ')}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  role="tablist"
                >
                  code
                </a>
              </li>
              <li className="flex justify-center ">
                <a
                  className={'text-xs border-2 border-black uppercase px-4 py-2 rounded block leading-normal ' + (openTab === 2 ? 'bg-[#111827] text-white' : 'bg-white text-black ')}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  role="tablist"
                >
                  preview
                </a>
              </li>
            </ul>
          </div>

          <div className="relative border-2 border-black flex flex-col min-w-screen break-words bg-white w-full mb-6 rounded">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block max-w-2xl overflow-hidden min-w-full' : 'hidden'}>
                  <SyntaxHighlighter language="javascript" style={docco} customStyle={{ padding: '25px' }}>
                    {code1}
                  </SyntaxHighlighter>
                </div>
                <pre className={openTab === 2 ? 'flex  ' : 'hidden'}>
                  <iframe src="./hero.html" className=" w-full  h-[600px] min-h-full overflow-hidden" />
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


