import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoggedIn from "../../Utilities/auth/Auth";
import HomePage from "./homePage";

export default function Home() {
  return (
    <LoggedIn>
      <HomePage />
    </LoggedIn>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
