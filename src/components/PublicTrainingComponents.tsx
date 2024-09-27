import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { apiConfig } from "../config/api";
import { textParams } from "../store/HomeStore";
import Loading from "./Loading.tsx";
import Pagination from "./Pagination.tsx";
import { TrainingCard } from "./TrainingCard";
import type { TrainingItem } from "./TrainingList.astro";

interface PublicTrainingProps{
  data: any,
  query: string,
  page: number
}

export const PublicTrainingComponents : React.FC<PublicTrainingProps> = ({ data, query, page }) => {
  const [allTrainingList, setAllTrainingList] = useState<TrainingItem[]>(data)
  const [queryParams, setQueryParams] = useStore(textParams);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    length: 1,
    currPage: 1,
    totalPage: 1,
    currentUrl: '',
    prevUrl: '',
    nextUrl: '',
    firstUrl: '',
    lastUrl: '',
    baseUrl: '',
  })

  useEffect(() => {
    if (window.location.search.length === 0) {
      textParams.set("");
    }
  }, [window.location.search])

  useEffect(() => {
    async function get({
      params,
    }: {
      params: { page: string; query: string };
      }) {
      console.log(page)
      const extraParams =
        typeof params.query === 'string' ? params.query?.includes("public-training")
          ? ""
          : `&filters[title][$containsi]=${params.query}` : ''
      
      const windowParams = params.query.length > 0 ? `?query=${params.query}` : ''
      const response = await fetch(
        `${apiConfig.reactBaseUrl}/trainings?populate=image&pagination[page]=${page}&pagination[pageSize]=10${extraParams}`,
        {
          headers: {
            Authorization: `Bearer ${apiConfig.reactApiToken}`,
            "Content-Type": "application/json",
          },
          method: "GET",
        },
      );

      const json = await response.json();

      const meta = json.meta;
      const currPage = meta.pagination.page;
      const totalPage = meta.pagination.pageCount;

      const currentUrl = `${currPage}`;
      const prevUrl =
        currPage - 1 === 0 ? "" : `${currPage - 1}${windowParams}`;
      const nextUrl =
        currPage + 1 > totalPage ? "" : `${currPage + 1}${windowParams}`;
      const firstUrl = `1${windowParams}`;
      const length = totalPage;
      const lastUrl = `${totalPage}${windowParams}`;
      const baseUrl = ``;

      console.log('json data ada apa aka' + json.data)
      console.log("response" + JSON.stringify(response));

      const jsonTrainingList = json.data.map((value: any) => {
        const attr = value.attributes;
        const imgUrl = attr.image.data.attributes.formats.small.url;
        return {
          id: value.id,
          title: attr.title,
          description: attr.description,
          category: attr.category,
          image: imgUrl,
          is_online: true,
          date_list: attr.date.all,
          price: {
            price_online: attr.price?.online ?? 0,
            price_offline: attr.price?.offline ?? 0,
            discount: 0,
          },
        };
      });

      return {
        props: {
          jsonTrainingList,
          length,
          currPage,
          totalPage,
          currentUrl,
          prevUrl,
          nextUrl,
          firstUrl,
          lastUrl,
          baseUrl,
        },
      };
    }

    var datas = get({
      params: {
        page: page.toString(),
        query: textParams.get()
      }
    })

    datas.then((value: any) => {
      console.log(typeof value.props.currPage)
      setPagination({
        length: value.props.totalPage,
        currPage: page !== 1 ? page : value.props.currPage,
        totalPage: value.props.totalPage,
        currentUrl: value.props.currentUrl,
        prevUrl: value.props.prevUrl,
        nextUrl: value.props.nextUrl,
        firstUrl: value.props.firstUrl,
        lastUrl: value.props.lastUrl,
        baseUrl: value.props.baseUrl,
      });

      setAllTrainingList(value.props.jsonTrainingList)
      setIsLoading(false);
    })
  }, [textParams])

  var { currPage, totalPage, currentUrl, prevUrl, nextUrl, firstUrl, lastUrl, baseUrl } = pagination

  return (
    <div>
      {allTrainingList.length > 0 ? (
        <div className="flex flex-col gap-4 h-full">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 grid-rows-1 grid-flow-row min-h-[900px] w-auto">
          {allTrainingList.map((training: any) => (
            <div className="m-2 h-full">
              <TrainingCard
                title={training.title}
                bgColor="bg-bgCardAlt w-auto"
                body={training.description}
                href=""
                image={training.image}
                category={training.category}
                id={training.id}
                onlinePrice={training.price.price_online}
                offlinePrice={training.price.price_offline}
                isOnline={training.is_online}
                date_list={training.date_list}
              />
            </div>
          ))}
          </div>
          <Pagination 
              length={pagination.totalPage} 
              currentUrl={pagination.currentUrl} 
              currentPage={pagination.currPage.toString()} 
              firstUrl={pagination.firstUrl} 
              prevUrl={pagination.prevUrl} 
              nextUrl={pagination.nextUrl} 
              lastUrl={pagination.lastUrl}
              baseUrl={pagination.baseUrl}
              query={textParams.get()}
          />
          </div>
      ) : isLoading ? (
        <Loading />
      ) : (
        <div className="text-center mt-8">
          <p>Tidak ada pelatihan yang tersedia saat ini.</p>
        </div>
      )}
    </div>
  );
}