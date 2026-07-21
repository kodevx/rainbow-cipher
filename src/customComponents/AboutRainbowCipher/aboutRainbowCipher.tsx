import React from 'react';
import { RAINBOW_COLORS } from '../../constants/constants';

import INFO_ICON from './icon/info_icon.png';

const SEQUENCE_KEY = [1,2,3,4]

const rainbowColorStyles = {
    'V': 'text-violet-500',
    'I': 'text-indigo-600',
    'B': 'text-blue-400',
    'G': 'text-emerald-500',
    'Y': 'text-yellow-400',
    'O': 'text-orange-500',
    'R': 'text-red-600'
}

const getRainbowColorToAsciiCodeMappings = () => {

    const tableElements: React.ReactNode[] = [];

    const initialUppercaseAsciiCode: number = 65;
    const initialLowercaseAsciiCode: number = 97;

    let alphabetUppercaseAsciiCode: number = initialUppercaseAsciiCode;
    let alphabetLowercaseAsciiCode: number = initialLowercaseAsciiCode;

    for(const sequenceNumber of SEQUENCE_KEY) {

        const seriesElements = (
            <div className={'self-start'}>
                <div className={'text-2xl flex justify-center items-center mb-5'}>
                    <span>{`S E Q U E N C E`}</span>
                    <span className={'ml-4'}>{sequenceNumber}</span>
                </div>
                <table key={sequenceNumber} className={'border-2'}>
                    <thead>
                        <tr className={'text-2xl'}>
                            <th className={'flex justify-center items-center border-b-2 px-7 py-4'}>
                                <span>
                                    Rainbow Colors
                                </span>
                                <sup>*</sup> 
                            </th>
                            <th className={'border-2 px-7 py-4'}>ASCII Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RAINBOW_COLORS.map((rainbowColor, index) => {

                            if(alphabetUppercaseAsciiCode + index <= 90) {
                                return (
                                    <tr key={`${rainbowColor}${index}`} className={'text-3xl'}>
                                        <td className={'border-r-2'}>
                                            <div className={'flex justify-center'}>
                                                <div className={`${rainbowColorStyles[rainbowColor]}`}>
                                                    <span>
                                                        {rainbowColor}
                                                    </span>
                                                    <sub>{sequenceNumber}</sub>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={'px-6 py-6'}>
                                            <div className={'flex justify-center items-center'}>
                                                <div className={'mr-4'}>
                                                    <span className={'mr-2'}>{String.fromCharCode(alphabetUppercaseAsciiCode + index)}</span>
                                                    /<span className={'ml-2'}>{String.fromCharCode(alphabetLowercaseAsciiCode + index)}</span>
                                                </div>
                                                <div>
                                                    ({alphabetUppercaseAsciiCode + index} / {alphabetLowercaseAsciiCode + index})
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            } else {
                                return null
                            }
                        })}
                    </tbody>
                </table>
                <div className={'flex justify-center mt-16 text-2xl'}>
                    <div className={'border-4 border-blue-500 border-dashed flex justify-center py-2 px-5 rounded-full'}>
                        {sequenceNumber}
                    </div>
                </div>
            </div>
        )

        tableElements.push(seriesElements);

        alphabetUppercaseAsciiCode = alphabetUppercaseAsciiCode + 7;
        alphabetLowercaseAsciiCode = alphabetLowercaseAsciiCode + 7;
    }

    return tableElements;
}

const AboutRainbowCipher = () => {

    const tableElements = getRainbowColorToAsciiCodeMappings();

    return (
        <div className={'font-louis p-10'}>
            <div className={'flex justify-between items-center mb-10 mt-16'}>
                {tableElements}
            </div>
            <div className={'flex justify-around items-center px-56 py-52'}>
                <div className={'text-3xl tracking-widest flex-col justify-center items-center'}>
                    <div className={'flex justify-center'}>
                        <div>J O H N  D O E</div>
                    </div>
                    <div className={'mt-3'}>
                        <div className={'flex justify-center'}>
                            (P L A I N T E X T)
                        </div>
                    </div>
                </div>
                <div className={'text-4xl flex flex-col items-center'}> 
                    <span className={'flex items-center justify-center'}>
                        <span className={'mr-7 tracking-widest'}>SQK* :</span>
                        <span className={'border-4 border-blue-500 border-dashed flex justify-center py-2 px-5 rounded-full mr-3'}>
                            {SEQUENCE_KEY[0]}
                        </span>, 
                        <span className={'border-4 border-blue-500 border-dashed flex justify-center py-2 px-5 rounded-full ml-3 mr-3'}>
                            {SEQUENCE_KEY[1]}
                        </span>, 
                        <span className={'border-4 border-blue-500 border-dashed flex justify-center py-2 px-5 rounded-full ml-3 mr-3'}>
                            {SEQUENCE_KEY[2]}
                        </span>, 
                        <span className={'border-4 border-blue-500 border-dashed flex justify-center py-2 px-5 rounded-full ml-3'}>
                            {SEQUENCE_KEY[3]}
                        </span>
                    </span>
                    <span>
                        ⟺ 
                    </span>
                </div>
                <div className={'text-4xl flex-col'}>
                    <div className={'flex justify-center'}>
                        <div className={'flex'}>
                            <div className={'mr-2'}>
                                <span>B</span>
                                <sub>2</sub>
                            </div>
                            <div className={'mr-2'}>
                                <span>V</span>
                                <sub>3</sub>
                            </div>
                            <div className={'mr-2'}>
                                <span>Y</span>
                                <sub>1</sub>
                            </div>
                            <div className={'mr-2'}>
                                <span>G</span>
                                <sub>1</sub>
                            </div>
                            <div className={'mr-2'}>
                                <span>V</span>
                                <sub>3</sub>
                            </div>
                            <div className={'mr-2'}>
                                <span>Y</span>
                                <sub>1</sub>
                            </div>
                        </div>
                    </div>
                    <div className={'text-3xl mt-5'}>
                        <div className={'flex justify-center tracking-widest'}>
                            (C I P H E R T E X T)
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col text-lg'}>
                <div>Rainbow Colors*: The initial letters of rainbow colors</div>
                <div>SQK*: The sequence key for each series in any order as per our choice</div>
            </div>
        </div>
    )
}

export default AboutRainbowCipher;