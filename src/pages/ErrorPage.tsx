import { Link, useRouteError } from 'react-router-dom';
import React from 'react';
import { Button, Result } from 'antd';

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div id="error-page">
      <Result
        status="404"
        title="404"
        subTitle={error.statusText || error.message}
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
      {/*<h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>*/}
    </div>
  );
}
