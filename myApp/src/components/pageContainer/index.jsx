import PageHeader from "../pageHeader";

const PageContainer = (props) => {
  return (
    <div>
      <PageHeader />
      {props.children}
    </div>
  );
};

export default PageContainer;
