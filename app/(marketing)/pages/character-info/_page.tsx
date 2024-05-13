'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Black_Han_Sans, Lobster, Yeon_Sung } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Background } from './_components/background'
import { CharacterSelectSideBar } from './_components/character-select-side-bar'
import { CharacterName } from './_components/character-name'
import { Character } from './_components/character'
import { TransformName } from './_components/transform-name'
import { TransformIcons } from './_components/transform-icons'
import { CharacterComment } from './_components/character-comment'

const blackHanSans = Black_Han_Sans({ weight: '400', subsets: ['latin'] })
const yeonSung = Yeon_Sung({ weight: '400', subsets: ['latin'] })
const lobster = Lobster({ weight: '400', subsets: ['latin'] })

export enum CharacterType {
  S,
  V,
}

enum VegetaTransformType {
  SAI,
  GOD,
  BLUE,
}

enum SonGokuTransformType {
  SAI,
  GOD,
  BLUE,
}

export const CharacterInfoPage = ({ isCurrentPage }: any) => {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>(
    CharacterType.S,
  )
  const [selectedVegetaTransformType, setSelectedVegetaTransformType] =
    useState<VegetaTransformType>(VegetaTransformType.GOD)
  const [selectedSonGokuTransformType, setSelectedSonGokuTransformType] =
    useState<SonGokuTransformType>(SonGokuTransformType.SAI)

  const characters = [
    {
      name: '손오공',
      icon: '/s.png',
      engName: 'songoku',
      type: CharacterType.S,
      onCharacterIconClick: () => setSelectedCharacter(CharacterType.S),
      selectedTransformType: selectedSonGokuTransformType,
      characterInfo: [
        {
          transformType: SonGokuTransformType.SAI,
          transformName: '초사이어인',
          imgSrc: '/s2.webp',
          width: 650,
          comment: '"움직이지 못하는 사이어인은 필요없다!"',
          iconSrc: '/v-sai-icon.png',
          onIconClick: () =>
            setSelectedSonGokuTransformType(SonGokuTransformType.SAI),
        },
        {
          transformType: SonGokuTransformType.GOD,
          transformName: '초사이어인 갓',
          imgSrc: '/s3.webp',
          width: 550,
          comment: '"노력해도 절대 넘어설 수 없는 벽이 있다는 것을 보여주마."',
          iconSrc: '/v-god-icon.png',
          onIconClick: () =>
            setSelectedSonGokuTransformType(SonGokuTransformType.GOD),
        },
        {
          transformType: SonGokuTransformType.BLUE,
          transformName: '초사이어인 블루',
          imgSrc: '/s4.webp',
          width: 350,
          comment: '"파괴할 수조차 없는 기술을 먹여주지."',
          iconSrc: '/v-blue-icon.png',
          onIconClick: () =>
            setSelectedSonGokuTransformType(SonGokuTransformType.BLUE),
        },
      ],
    },
    {
      name: '배지터',
      icon: '/v.png',
      engName: 'vegeta',
      type: CharacterType.V,
      onCharacterIconClick: () => setSelectedCharacter(CharacterType.V),
      selectedTransformType: selectedVegetaTransformType,
      characterInfo: [
        {
          transformType: VegetaTransformType.SAI,
          transformName: '초사이어인',
          imgSrc: '/v2.webp',
          width: 650,
          comment: '"움직이지 못하는 사이어인은 필요없다!"',
          iconSrc: '/v-sai-icon.png',
          onIconClick: () =>
            setSelectedVegetaTransformType(VegetaTransformType.SAI),
        },
        {
          transformType: VegetaTransformType.GOD,
          transformName: '초사이어인 갓',
          imgSrc: '/v3.webp',
          width: 550,
          comment: '"노력해도 절대 넘어설 수 없는 벽이 있다는 것을 보여주마."',
          iconSrc: '/v-god-icon.png',
          onIconClick: () =>
            setSelectedVegetaTransformType(VegetaTransformType.GOD),
        },
        {
          transformType: VegetaTransformType.BLUE,
          transformName: '초사이어인 블루',
          imgSrc: '/v4.webp',
          width: 350,
          comment: '"파괴할 수조차 없는 기술을 먹여주지."',
          iconSrc: '/v-blue-icon.png',
          onIconClick: () =>
            setSelectedVegetaTransformType(VegetaTransformType.BLUE),
        },
      ],
    },
  ]

  return (
    <div className='relative h-full w-full'>
      <Background />
      {isCurrentPage &&
        characters.map((character) => (
          <div
            key={character.name}
            className='relative h-full flex flex-col text-white'
          >
            {/* selecting character side bar */}
            <div className='pt-3 absolute top-0 left-0 flex flex-col'>
              <CharacterSelectSideBar
                iconSrc={character.icon}
                alt={character.engName}
                isSelected={character.type === selectedCharacter}
                onIconClick={character.onCharacterIconClick}
                font={lobster.className}
              />
            </div>
            {/* lander character */}
            {selectedCharacter === character.type && (
              <section className='w-[650px] h-full mx-auto  relative  flex justify-center'>
                <CharacterName
                  font={blackHanSans.className}
                  name={character.name}
                  engName={character.engName}
                />
                <div className='absolute top-96 -left-40 '>
                  {character.characterInfo.map((info) => (
                    <TransformName
                      key={info.transformName}
                      isSelected={
                        info.transformType === character.selectedTransformType
                      }
                      font={blackHanSans.className}
                      name={info.transformName}
                    />
                  ))}

                  <div className='flex'>
                    {character.characterInfo.map((info) => (
                      <TransformIcons
                        key={info.iconSrc}
                        iconSrc={info.iconSrc}
                        alt={info.transformName}
                        isSelected={
                          info.transformType === character.selectedTransformType
                        }
                        onIconClick={info.onIconClick}
                      />
                    ))}
                  </div>
                </div>
                {character.characterInfo.map((info) => (
                  <Character
                    key={info.imgSrc}
                    isSelected={
                      info.transformType === character.selectedTransformType
                    }
                    imgSrc={info.imgSrc}
                    alt={info.transformName}
                    width={info.width}
                  />
                ))}

                <div className='absolute top-80 left-0 transform translate-x-[500px] flex flex-col'>
                  {character.characterInfo.map((info) => (
                    <CharacterComment
                      key={info.transformName}
                      isSelected={
                        info.transformType === character.selectedTransformType
                      }
                      font={yeonSung.className}
                      comment={info.comment}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        ))}
    </div>
  )
}
