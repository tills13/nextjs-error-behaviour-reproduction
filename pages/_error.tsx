export default function ErrorPage({ errorText }) {
  // uncomment me to see how a long-running getInitialProps affects
  // client-side javascript execution
  // React.useEffect(() => console.log("client-side effect run"), []);
  return <>{errorText}</>;
}

ErrorPage.getInitialProps = async (ctx) => {
  // uncomment me to see how a long-running getInitialProps affects
  // client-side javascript execution
  // if (typeof window !== "undefined") {
  //   await new Promise((r) => setTimeout(r, 10 * 1000));
  // }

  if (ctx.res) {
    ctx.res.statusCode = ctx.err?.statusCode ?? 500;
  }

  return {
    errorText: ctx.err?.message || "an unknown error occured",
  };
};
