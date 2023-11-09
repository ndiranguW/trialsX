interface Props {
  children: string;
}

const BreadCrumb = ({ children }: Props) => {
  return (
    // it creates the path of current page. (pwd)
    <div className="pb-4 md:pt-6">
      <span className="breadcrumbs text-sm text-green-500 pb-5">
        /{children}
      </span>
    </div>
  );
};

export default BreadCrumb;
