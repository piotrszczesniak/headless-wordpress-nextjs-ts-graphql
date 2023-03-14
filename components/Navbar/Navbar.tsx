import { MainMenuQuery } from '../../generated/graphql';

type NavbarProps = {
  menu: MainMenuQuery;
};

export const Navbar = ({ menu }: NavbarProps) => {
  console.log(menu);
  return <div>Navbar</div>;
};
