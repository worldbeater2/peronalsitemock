import React, { FC } from 'react';
import Pfp from './Pfp';

interface Props {
  relative?: boolean;
}

const MainView: FC<Props> = ({ relative }) => {
  return (
    <main className="absolute top-0 h-full flex items-center z-30 pointer-events-none">
      <div className="relative flex items-end h-8/12 ml-4 pointer-events-auto">
        <div className="w-full">
          <Pfp />

          <h1 className="monument font-black text-4xl tracking-widest uppercase mt-5 md:text-5xl">
            <span>Dennis</span>
            <br />
            Bamfo
          </h1>

          <ul>
            <li className="jetbrains-mono md:text-xl">Legal Tech</li>
            <li className="jetbrains-mono md:text-xl">Software Consulting</li>
            <li className="jetbrains-mono md:text-xl">Corporate Lawyer(sometimes😬)</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainView;
