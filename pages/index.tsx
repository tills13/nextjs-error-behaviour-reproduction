import { Http404Error } from "../errors";

export default function IndexPage() {
  return "should always 404";
}

IndexPage.getInitialProps = () => {
  throw Http404Error;
};
