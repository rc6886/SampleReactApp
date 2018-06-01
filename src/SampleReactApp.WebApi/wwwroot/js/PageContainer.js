import React from 'react'

const PageContainer = (props) => {
  return (
    <div className="ui text container" style={{ marginTop: '7em' }}>
      {props.children}
    </div>
  );
}

export default PageContainer;
