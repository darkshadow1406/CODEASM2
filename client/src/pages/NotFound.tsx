import {
  HiBookOpen,
  HiBookmarkSquare,
  HiMiniQueueList,
  HiRss,
} from "react-icons/hi2";
import { LuChevronRight } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import Container from "../ui/Container";
import LinkButton from "../ui/LinkButton";
// import LinkButton from "../ui/LinkButton";

const links = [
  {
    name: "Sản phẩm",
    href: "/product",
    description: "Bạn sẽ tìm thấy tất cả các sản phẩm có sẵn ở đây.",
    icon: HiBookOpen,
  },
  {
    name: "Cửa hàng",
    href: "/shop",
    description: "Bộ sưu tập sản phẩm mua sắm tối đa.",
    icon: HiMiniQueueList,
  },
  {
    name: "Tài khoản của bạn",
    href: "/profile",
    description: "Tìm thông tin của bạn ở đây.",
    icon: HiBookmarkSquare,
  },
  {
    name: "Blog",
    href: "/blog",
    description: "Đọc tin tức và bài viết mới nhất của chúng tôi về mua sắm.",
    icon: HiRss,
  },
];
const NotFound = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter(Boolean).pop();

  return (
    <Container>
      <div className="bg-white">
        <main className="px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
          <div className="text-center">
            <p className="text-4xl font-bold leading-8 text-skyText">404</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-darkText">
              <span className="text-redText underline underline-offset-2 decoration-[1px] capitalize">
                {path}
              </span>{" "}
              Không tồn tại
            </h1>
            <p className="mt-2 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Xin lỗi, chúng tôi không thể tìm thấy {path} trang bạn đang tìm kiếm.
            </p>
          </div>
          <div className="mx-auto mt-6 flow-root max-w-lg">
            <h2 className="sr-only">Các trang phổ biến</h2>
            <ul
              role="list"
              className="divide-y divide-gray-900/5 border-b border-gray-900/5 flex flex-col"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative flex gap-x-6 py-4 hover:bg-skyText/20 px-4 rounded-md"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                    <link.icon
                      className="h-6 w-6 text-skyText"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">
                      <a href={link.href}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {link.name}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-none self-center">
                    <LuChevronRight
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex justify-center">
              <LinkButton showButton={true} link={"/"} />
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default NotFound;
