import { Badge } from '@material-ui/core'
import React from 'react'
import {img_300, unavailable} from '../Config/Config'
import './singleContent.css'
import ContentModel from '../ContentModel/ContentModel'

function SingleContent({id,title,date,poster,media_type,vote_average}) {
    return (
        <ContentModel media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average>6?'primary':'secondary'}/>
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt="" />
            <b className="title">{  title}</b>
            <span className="subTitle">
                {media_type === 'tv' ? "TV Series" : "Movie"}
                <span className="subTitle">{date}</span>
            </span>
           
        </ContentModel>
    )
}

export default SingleContent
