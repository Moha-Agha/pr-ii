import React from "react";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import '../../i18n';

const ArticleMotivator = ({ image, tags, title, share, likes, views, youtube, spotify, small }) => {

  const { t } = useTranslation();

  let articalClassName

  if (small == "false") {
    articalClassName = "article-motivator"
  } else {
    articalClassName = "article-motivator-small"
  }

  return (
    <div className={articalClassName}>

      <div className="social-media">
        <a href="1" ><i className="aicon-youtube"></i></a>
        <a href="1-2" ><i className="aicon-spotify"></i></a>
      </div>

      <div >
        <div className="tags">
          <span className="tag">الأكثر مشاهدة</span>
          <span className="tag">الأخلاق</span>
        </div>

        <a href="artical" className="title">كيف تحقق المكاسب السياسية العدالة التي تصنع هي التي تكرس بالدين؟</a>

        <div className="article-footer">
          <a href="shaer" className="article-footer_item"><i className="aicon-share"></i> {t('ArticleMotivator.share')} </a>
          <div className="article-footer_item">200K <i className="aicon-heart"></i></div>
          <div className="article-footer_item">200K <i className="aicon-eye"></i> </div>
        </div>
      </div>



      <a href="artical" className="article-image">
        <div className="gradient-dark"></div>
        <img src={image} alt="inislam.net logo" />
      </a>
    </div>
  );
};

export default ArticleMotivator;
