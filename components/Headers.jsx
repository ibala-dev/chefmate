import chefClaudeLogo from "/assests/chef-claude-icon.png";
import { Main } from "./main";
export function Header() {
  return (
    <>
      <div className="header-style">
        <img src={chefClaudeLogo} />
        <h1>Chef Mate</h1>
      </div>
      <Main />
    </>
  );
}
