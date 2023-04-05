import { Http404Error } from "../errors";

export default function SubPage() {
  return "sub page, should always 404";
}

SubPage.getInitialProps = () => {
  throw Http404Error;
};
