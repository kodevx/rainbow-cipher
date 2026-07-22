import React from 'react';

import { 
    RAINBOW_COLORS, 
    RAINBOW_COLOR_STYLES, 
    SEQUENCE_KEY 
} from '../../constants/constants';


const getRainbowColorToAsciiCodeMappings = () => {

    const tableElements: React.ReactNode[] = [];

    const initialUppercaseAsciiCode: number = 65;
    const initialLowercaseAsciiCode: number = 97;

    let alphabetUppercaseAsciiCode: number = initialUppercaseAsciiCode;
    let alphabetLowercaseAsciiCode: number = initialLowercaseAsciiCode;

    for(const sequenceNumber of SEQUENCE_KEY) {

        const seriesElements = (
            <div key={sequenceNumber} className={'self-start mb-20 sm:mb-24 xl:mb-0'}>
                <div className={'text-2xl flex justify-center items-center mb-8'}>
                    <span>{`S E Q U E N C E`}</span>
                    <span className={'ml-4'}>{sequenceNumber}</span>
                </div>
                <table key={sequenceNumber} className={'border-2 border-gray-300'}>
                    <thead>
                        <tr className={'text-2xl'}>
                            <th className={'flex justify-center items-center border-b-2 border-gray-300 px-7 py-4'}>
                                <span>
                                    Rainbow Colors
                                </span>
                                <sup>*</sup> 
                            </th>
                            <th className={'border-2 border-gray-300 px-7 py-4'}>ASCII Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RAINBOW_COLORS.map((rainbowColor, index) => {

                            if(alphabetUppercaseAsciiCode + index <= 90) {
                                return (
                                    <tr key={`${rainbowColor}${index}`} className={'text-3xl'}>
                                        <td className={'border-r-2 border-gray-300'}>
                                            <div className={'flex justify-center'}>
                                                <div className={`${RAINBOW_COLOR_STYLES[rainbowColor]}`}>
                                                    <span>
                                                        {rainbowColor}
                                                    </span>
                                                    <sub>{sequenceNumber}</sub>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={'px-6 py-6 text-[28px] tracking-wide'}>
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
                                return null;
                            }
                        })}
                    </tbody>
                </table>
                <div className={'flex justify-center mt-16 text-2xl'}>
                    <div className={'border-4 border-blue-500 border-dashed flex justify-center py-2 px-5 rounded-full transition-transform duration-500 hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-150'}>
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
        <div className={'font-louis p-10 flex xl:flex-none flex-col justify-center xl:justify-between items-center'}>
            <div className={'flex flex-col sm:flex-col md:flex-col xl:flex-row justify-between items-center mb-10 mt-16 gap-11'}>
                {tableElements}
            </div>
            <div className={'flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-around items-center px-0 xl:px-56 py-10 xl:py-52 xl:gap-25'}>
                <div className={'tracking-widest flex-col justify-center items-center mb-10 sm:mb-10 lg:mb-10 xl:mb-0'}>
                    <div className={'flex justify-center text-4xl lg:text-4xl xl:text-4xl'}>
                        <div>J O H N  D O E</div>
                    </div>
                    <div className={'mt-3'}>
                        <div className={'flex justify-center text-2xl lg:text-2xl xl:text-3xl'}>
                            (P L A I N T E X T)
                        </div>
                    </div>
                </div>
                <div className={'text-4xl flex flex-col items-center'}> 
                    <div className={'flex flex-col sm:flex-col md:flex-row items-center justify-center'}>
                        <div className={'mr-7 flex tracking-widest mb-6 sm:mb-6 md:mb-0 lg:mb-0 xl:mb-0'}>
                            <span>SQK<sup>*</sup></span>
                            <span className={'hidden ml-0 md:block md:ml-2'}>:</span>
                        </div>
                        <div className={'flex flex-row'}>
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
                        </div>
                    </div>
                    <div className={'text-5xl lg:text-4xl xl:text-5xl rotate-90 md:rotate-90 lg:rotate-90 xl:rotate-0 my-20 md:my-10 lg:my-15 xl:mt-10 xl:mb-30'}>
                        ⟺ 
                    </div>
                </div>
                <div className={'flex-col'}>
                    <div className={'flex justify-center text-4xl lg:text-4xl xl:text-3xl'}>
                        <div className={'flex'}>
                            <div className={`mr-2 ${RAINBOW_COLOR_STYLES['B']}`}>
                                <span>B</span>
                                <sub>2</sub>
                            </div>
                            <div className={`mr-2 ${RAINBOW_COLOR_STYLES['V']}`}>
                                <span>V</span>
                                <sub>3</sub>
                            </div>
                            <div className={`mr-2 ${RAINBOW_COLOR_STYLES['V']}`}>
                                <span>V</span>
                                <sub>2</sub>
                            </div>
                            <div className={`mr-2 ${RAINBOW_COLOR_STYLES['R']}`}>
                                <span>R</span>
                                <sub>2</sub>
                            </div>
                            <div className={`mr-2 ${RAINBOW_COLOR_STYLES['G']}`}>
                                <span>G</span>
                                <sub>1</sub>
                            </div>
                            <div className={`mr-2 ${RAINBOW_COLOR_STYLES['V']}`}>
                                <span>V</span>
                                <sub>3</sub>
                            </div>
                            <div className={`mr-2 ${RAINBOW_COLOR_STYLES['Y']}`}>
                                <span>Y</span>
                                <sub>1</sub>
                            </div>
                        </div>
                    </div>
                    <div className={'mt-5 text-2xl lg:text-2xl xl:text-3xl'}>
                        <div className={'flex justify-center tracking-widest'}>
                            (C I P H E R T E X T)
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col text-lg mt-20 md:mt-10'}>
                <div>Rainbow Colors*: The initial letters of rainbow colors</div>
                <div>SQK*: The sequence number for each series in any order</div>
            </div>
        </div>
    )
}

export default AboutRainbowCipher;
