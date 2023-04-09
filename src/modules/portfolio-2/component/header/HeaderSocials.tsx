import { environment } from 'environment'
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href={environment.socials.linkedIn} target="_blank"><BsLinkedin /></a>
        <a href={environment.socials.github} target="_blank"><FaGithub /></a>
    </div>
  )
}
