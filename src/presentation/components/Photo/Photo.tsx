import { format } from "date-fns";
import {
  PhotoContainer,
  PhotoFooter,
  PhotoFooterDescription,
  PhotoFooterTag,
  PhotoFooterTags,
} from "./Photo.styled";
import { enUS, es, pt } from "date-fns/locale";
import { useContext } from "react";
import { LangContext } from "../../tools/contexts/LangContext";
import { ELang } from "../../tools/utils/intl/lang.enum";
import { FormattedMessage } from "react-intl";
import { Skeleton } from "primereact/skeleton";
import { Link } from "react-router-dom";
interface IPhotoProps {
  id: string;
  author: string;
  imgSrc: string;
  createdAt: Date;
  tags: string[];
  loadingTags: boolean;
}

function Photo({ imgSrc, author, createdAt, tags, loadingTags }: IPhotoProps) {
  const { lang } = useContext(LangContext);

  /* Compute date according to language */
  let dateStr = "";
  switch (lang) {
    case ELang.ES:
      dateStr = format(createdAt, "d MMMM, yyyy", { locale: es });
      break;
    case ELang.EN:
      dateStr = format(createdAt, "MMMM d, yyyy", { locale: enUS });
      break;
    case ELang.PT:
      dateStr = format(createdAt, "d MMMM, yyyy", { locale: pt });
      break;
  }
  return (
    <PhotoContainer>
      {/* TODO: show image according to the screen's width */}
      <img src={imgSrc} />
      <PhotoFooter>
        {/* Description (author and creation date on the left) */}
        <PhotoFooterDescription>
          <p>
            <FormattedMessage id="card.by" /> <span title={author}>{author}</span>
          </p>
          <p>
            <FormattedMessage id="card.takenOn" /> {dateStr}
          </p>
        </PhotoFooterDescription>
        <PhotoFooterTags>
          {/* Tags on the right */}
          {!loadingTags &&
            tags.slice(0, 3).map(tag => (
              <Link key={tag} to={`/tag/${tag}`} title={tag}>
                <PhotoFooterTag>{tag}</PhotoFooterTag>
              </Link>
            ))}
          {loadingTags &&
            Array.from({ length: 3 }, (_, idx) => (
              <Skeleton key={idx} height="1.6rem" width="3rem" />
            ))}
        </PhotoFooterTags>
      </PhotoFooter>
    </PhotoContainer>
  );
}
export default Photo;
