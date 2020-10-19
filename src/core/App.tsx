import React, { useEffect, useState } from 'react';
import { Gallery } from '../dialogs/Gallery';
import { Loader } from '../components/Loader';
import { PicturesGrid } from '../components/PicturesGrid';
import { apiUrls } from '../constants/api-urls';
import { appConfig } from '../constants/app-config';
import { AxiosMethod } from '../constants/axios-mothod';
import { CroppedPicture } from '../models/CroppedPicture';
import { ImagesResponse } from '../models/ImagesResponse';
import { InterceptorService } from '../services/InterceptrorsService';
import { useCustomAxios } from '../utils/CustomAxiosHook/useCustomAxios';

function App() {
  const [currentlyOpenedImg, setOpenedImg] = useState<number>(null);
  const [{ data, loading }, fetch] = useCustomAxios<ImagesResponse<CroppedPicture>>({
    method: AxiosMethod.GET,
    url: apiUrls.IMAGES,
  });

  useEffect(() => {
    InterceptorService.init(appConfig);

    fetch();
  }, []);

  const fetchNewPage = (page: number) => {
    fetch({
      params: {
        page
      }
    });
  };

  const loaderRender = loading && <Loader />;
  const cicturesGridRender = !!data && (
    <PicturesGrid images={data.pictures} pages={data.pageCount} currentPage={data.page} onPageChange={fetchNewPage} onImgClick={(index) => setOpenedImg(index)} />
  );

  return (
    <div>
      { loaderRender }
      { cicturesGridRender }
      <Gallery
        current={currentlyOpenedImg}
        images={data && data.pictures}
        onClose={() => setOpenedImg(null)}
      />
    </div>
  );
}

export default App;
