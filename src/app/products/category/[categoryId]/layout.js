export const metadata = {
    title: "Products By Category",
  };
  
  export default function CategoryLayout({ children }) {
    return (
      <div className="dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto min-h-svh">{children}</div>
      </div>
    );
  }
  