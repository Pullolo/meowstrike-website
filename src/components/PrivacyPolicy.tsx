import { PRIVACY_EMAIL } from "../config";
import { useLanguage } from "../i18n/LanguageContext";

const UPDATED = "13 July 2026";
const UPDATED_PL = "13 lipca 2026 r.";

function ContactLink() {
  return (
    <a className="text-stardust underline decoration-stardust/40 underline-offset-4 hover:text-ink" href={`mailto:${PRIVACY_EMAIL}`}>
      {PRIVACY_EMAIL}
    </a>
  );
}

function EnglishPolicy() {
  return (
    <>
      <p className="mt-3 text-sm text-ink-muted">Last updated: {UPDATED}</p>

      <h3>1. Who controls your data</h3>
      <p>
        Meow Strike is an independently developed game. Mikołaj, operating as Pullolo and developing
        Meow Strike, is the data controller for personal data described in this policy. For privacy
        questions or to exercise your rights, contact <ContactLink />.
      </p>

      <h3>2. Scope</h3>
      <p>
        This policy applies to the Meow Strike website, Android game, account features, cloud saves,
        friends, leaderboards, and online matches. The website can be viewed and the game can be
        played offline without creating an account. Account and online features are optional.
      </p>

      <h3>3. Data we process</h3>
      <ul>
        <li>
          <strong>Website:</strong> the site does not use advertising, analytics, or tracking
          cookies. It stores only your language preference in your browser&apos;s local storage.
          GitHub Pages may process ordinary connection data such as IP address, device/browser
          information, requested URL, and request time to deliver and secure the website.
        </li>
        <li>
          <strong>Optional account:</strong> e-mail address, authentication identifiers and session
          information are processed through Clerk. The game server stores an internal user ID,
          display name, friend code, account creation time, and last-seen time. Meow Strike does not
          receive or store your e-mail password.
        </li>
        <li>
          <strong>Game progress:</strong> your collection, settings, inventory, builds, campaign
          progress, and related save data are stored locally on your device. If you use cloud save,
          a copy and its update metadata are stored on the game server.
        </li>
        <li>
          <strong>Social and competitive features:</strong> friend requests and relationships,
          presence while connected, display name, friend code, seasonal rating, wins and losses.
          Online match state, room membership and actions are processed as needed to run a match;
          current match state is held in server memory rather than kept as a permanent match replay.
        </li>
        <li>
          <strong>Support:</strong> if you e-mail us, we process your address and the contents of your
          message to answer your request.
        </li>
      </ul>

      <h3>4. Why we process data and our legal bases</h3>
      <ul>
        <li>
          To create and authenticate an optional account, sync progress, provide friends,
          leaderboards and online play, and respond to account requests — performance of our
          contract with you (GDPR Article 6(1)(b)).
        </li>
        <li>
          To secure the service, prevent abuse, diagnose failures, and maintain reliable gameplay —
          our legitimate interests in operating and protecting Meow Strike (Article 6(1)(f)).
        </li>
        <li>
          To comply with binding legal obligations and valid requests from authorities — Article
          6(1)(c), where applicable.
        </li>
      </ul>

      <h3>5. Service providers and disclosures</h3>
      <p>We disclose only the data needed to providers that help operate the service:</p>
      <ul>
        <li>
          <strong>Clerk, Inc.</strong> provides account authentication and e-mail verification. See
          the <a href="https://clerk.com/legal/privacy" target="_blank" rel="noreferrer">Clerk privacy policy</a>.
        </li>
        <li>
          <strong>GitHub, Inc.</strong> hosts the website and game download releases. See the
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer"> GitHub Privacy Statement</a>.
        </li>
        <li>
          <strong>Hosting and database providers</strong> process game-server traffic and stored
          account/game data on our behalf.
        </li>
      </ul>
      <p>
        We may also disclose data when legally required or when necessary to protect users, the
        service, or our legal rights. We do not sell personal data and do not use it for behavioural
        advertising.
      </p>

      <h3>6. International transfers</h3>
      <p>
        Some providers may process data outside Poland or the European Economic Area. Where GDPR
        applies, transfers are protected by an adequacy decision, the EU Standard Contractual
        Clauses, or another lawful safeguard. Clerk&apos;s data-processing terms describe its transfer
        safeguards, including the EU–U.S. Data Privacy Framework and Standard Contractual Clauses.
      </p>

      <h3>7. Retention</h3>
      <p>
        Local game data remains on your device until you clear it or uninstall the game. Account,
        cloud-save, friendship and rating data is retained while your account is active and then
        deleted or anonymised when no longer needed, subject to reasonable technical backup periods
        and any legal retention requirement. Support messages are retained only as long as needed
        to resolve the request and protect legitimate legal interests. Live match and presence data
        is kept only as long as needed to operate the session unless a security incident requires
        limited retention.
      </p>

      <h3>8. Your rights and account deletion</h3>
      <p>
        Depending on applicable law, you may request access, correction, deletion, restriction,
        portability, or object to processing based on legitimate interests. You may also lodge a
        complaint with the Polish supervisory authority, the President of the Personal Data
        Protection Office (UODO), or your local authority. To exercise a right or delete your Meow
        Strike account and server-side game data, e-mail <ContactLink /> from the address connected
        to the account. We may ask for information needed to verify that the account is yours.
      </p>

      <h3>9. Children</h3>
      <p>
        Meow Strike is not directed to children below the minimum age at which they may lawfully
        consent to online data processing in their country. A younger player should use account and
        online features only with a parent or guardian&apos;s authorisation. If you believe we hold a
        child&apos;s data without valid authorisation, contact us so we can investigate and delete it.
      </p>

      <h3>10. Security and changes</h3>
      <p>
        We use reasonable technical and organisational safeguards, including encrypted network
        connections, authenticated access, server-side validation, and access controls. No service
        can guarantee absolute security. We may update this policy when the game, providers, or law
        changes; the new version and date will be published here.
      </p>
    </>
  );
}

function PolishPolicy() {
  return (
    <>
      <p className="mt-3 text-sm text-ink-muted">Ostatnia aktualizacja: {UPDATED_PL}</p>

      <h3>1. Administrator danych</h3>
      <p>
        Meow Strike jest grą rozwijaną niezależnie. Mikołaj, działający jako Pullolo i rozwijający
        Meow Strike, jest administratorem danych osobowych opisanych w tej polityce. W sprawach
        prywatności lub realizacji swoich praw napisz na adres <ContactLink />.
      </p>

      <h3>2. Zakres polityki</h3>
      <p>
        Polityka dotyczy strony internetowej Meow Strike, gry na Androida, funkcji konta, zapisów w
        chmurze, znajomych, rankingów i rozgrywek online. Stronę można przeglądać, a w grę offline
        można grać bez zakładania konta. Konto i funkcje online są opcjonalne.
      </p>

      <h3>3. Jakie dane przetwarzamy</h3>
      <ul>
        <li>
          <strong>Strona:</strong> nie korzysta z reklam, analityki ani śledzących plików cookie.
          W pamięci lokalnej przeglądarki zapisuje wyłącznie wybór języka. GitHub Pages może
          przetwarzać zwykłe dane połączenia, takie jak adres IP, informacje o urządzeniu i
          przeglądarce, żądany adres URL oraz czas żądania, aby dostarczać i zabezpieczać stronę.
        </li>
        <li>
          <strong>Opcjonalne konto:</strong> adres e-mail, identyfikatory uwierzytelniania i dane
          sesji są przetwarzane przez Clerk. Serwer gry zapisuje wewnętrzny identyfikator gracza,
          nazwę wyświetlaną, kod znajomego, czas utworzenia konta i ostatniej aktywności. Meow Strike
          nie otrzymuje ani nie przechowuje hasła do Twojej poczty.
        </li>
        <li>
          <strong>Postęp gry:</strong> kolekcja, ustawienia, ekwipunek, buildy, postęp kampanii i
          powiązane dane zapisu są przechowywane lokalnie na urządzeniu. Jeśli używasz zapisu w
          chmurze, jego kopia wraz z metadanymi aktualizacji jest przechowywana na serwerze gry.
        </li>
        <li>
          <strong>Funkcje społecznościowe i rankingowe:</strong> zaproszenia i relacje znajomych,
          obecność podczas połączenia, nazwa, kod znajomego, ranking sezonowy, zwycięstwa i porażki.
          Stan meczu online, uczestnictwo w pokoju i wykonywane akcje są przetwarzane w celu
          przeprowadzenia rozgrywki; bieżący stan meczu znajduje się w pamięci serwera, a nie w
          trwałym archiwum powtórek.
        </li>
        <li>
          <strong>Kontakt:</strong> gdy wysyłasz wiadomość e-mail, przetwarzamy adres nadawcy i treść
          wiadomości, aby odpowiedzieć.
        </li>
      </ul>

      <h3>4. Cele i podstawy prawne</h3>
      <ul>
        <li>
          Utworzenie i uwierzytelnianie opcjonalnego konta, synchronizacja postępu, znajomi,
          rankingi, gra online i obsługa żądań dotyczących konta — wykonanie umowy (art. 6 ust. 1
          lit. b RODO).
        </li>
        <li>
          Ochrona usługi, zapobieganie nadużyciom, diagnozowanie awarii i zapewnienie niezawodnej
          rozgrywki — prawnie uzasadniony interes polegający na prowadzeniu i zabezpieczeniu Meow
          Strike (art. 6 ust. 1 lit. f RODO).
        </li>
        <li>
          Wypełnienie wiążących obowiązków prawnych i prawidłowych żądań organów — art. 6 ust. 1
          lit. c RODO, gdy ma zastosowanie.
        </li>
      </ul>

      <h3>5. Dostawcy i udostępnianie danych</h3>
      <p>Przekazujemy jedynie dane potrzebne dostawcom pomagającym utrzymać usługę:</p>
      <ul>
        <li>
          <strong>Clerk, Inc.</strong> zapewnia logowanie do konta i weryfikację adresu e-mail. Zobacz
          <a href="https://clerk.com/legal/privacy" target="_blank" rel="noreferrer"> politykę prywatności Clerk</a>.
        </li>
        <li>
          <strong>GitHub, Inc.</strong> hostuje stronę i wydania gry do pobrania. Zobacz
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer"> oświadczenie GitHub dotyczące prywatności</a>.
        </li>
        <li>
          <strong>Dostawcy hostingu i bazy danych</strong> przetwarzają ruch serwera gry oraz
          przechowywane dane konta i gry w naszym imieniu.
        </li>
      </ul>
      <p>
        Dane możemy ujawnić również wtedy, gdy wymaga tego prawo lub gdy jest to konieczne do
        ochrony użytkowników, usługi albo naszych praw. Nie sprzedajemy danych osobowych i nie
        wykorzystujemy ich do reklamy behawioralnej.
      </p>

      <h3>6. Przekazywanie danych poza EOG</h3>
      <p>
        Niektórzy dostawcy mogą przetwarzać dane poza Polską lub Europejskim Obszarem Gospodarczym.
        Gdy stosuje się RODO, transfer opiera się na decyzji stwierdzającej odpowiedni stopień
        ochrony, standardowych klauzulach umownych UE albo innym legalnym zabezpieczeniu. Warunki
        przetwarzania Clerk opisują stosowane zabezpieczenia, w tym Ramy Ochrony Danych UE–USA i
        standardowe klauzule umowne.
      </p>

      <h3>7. Okres przechowywania</h3>
      <p>
        Lokalny zapis gry pozostaje na urządzeniu do chwili jego usunięcia lub odinstalowania gry.
        Dane konta, zapisu w chmurze, znajomych i rankingu przechowujemy, dopóki konto jest aktywne,
        a następnie usuwamy lub anonimizujemy, gdy nie są już potrzebne, z uwzględnieniem rozsądnych
        okresów kopii technicznych i obowiązków prawnych. Wiadomości przechowujemy tylko tak długo,
        jak wymaga tego obsługa sprawy i ochrona uzasadnionych interesów prawnych. Dane obecności i
        aktywnego meczu istnieją tylko przez czas potrzebny do obsługi sesji, chyba że ograniczone
        zachowanie danych jest konieczne w związku z incydentem bezpieczeństwa.
      </p>

      <h3>8. Twoje prawa i usunięcie konta</h3>
      <p>
        W zależności od właściwego prawa możesz żądać dostępu, sprostowania, usunięcia, ograniczenia
        przetwarzania i przeniesienia danych oraz sprzeciwić się przetwarzaniu opartemu na prawnie
        uzasadnionym interesie. Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych
        (UODO) lub właściwego lokalnego organu. Aby skorzystać z prawa albo usunąć konto Meow Strike
        wraz z danymi gry na serwerze, napisz na <ContactLink /> z adresu połączonego z kontem. Możemy
        poprosić o informacje potrzebne do potwierdzenia, że konto należy do Ciebie.
      </p>

      <h3>9. Dzieci</h3>
      <p>
        Meow Strike nie jest kierowane do dzieci poniżej wieku, w którym mogą samodzielnie wyrazić
        ważną zgodę na przetwarzanie danych online w swoim kraju. Młodszy gracz powinien korzystać z
        konta i funkcji online wyłącznie za zgodą rodzica lub opiekuna. Jeśli uważasz, że
        przechowujemy dane dziecka bez ważnej zgody, skontaktuj się z nami, abyśmy mogli to sprawdzić
        i usunąć dane.
      </p>

      <h3>10. Bezpieczeństwo i zmiany polityki</h3>
      <p>
        Stosujemy rozsądne zabezpieczenia techniczne i organizacyjne, w tym szyfrowane połączenia,
        uwierzytelnianie, walidację po stronie serwera i kontrolę dostępu. Żadna usługa nie może
        zagwarantować pełnego bezpieczeństwa. Możemy aktualizować tę politykę wraz ze zmianami gry,
        dostawców lub prawa; nowa wersja i data zostaną opublikowane tutaj.
      </p>
    </>
  );
}

export function PrivacyPolicy() {
  const { lang } = useLanguage();

  return (
    <section id="privacy" className="px-5 pt-28 pb-24 sm:px-8 sm:pt-36 sm:pb-32">
      <article className="privacy-copy mx-auto max-w-4xl rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-2xl shadow-black/20 sm:p-10 lg:p-14">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-stardust">
          {lang === "pl" ? "Prywatność" : "Privacy"}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {lang === "pl" ? "Polityka prywatności Meow Strike" : "Meow Strike Privacy Policy"}
        </h2>
        {lang === "pl" ? <PolishPolicy /> : <EnglishPolicy />}
      </article>
    </section>
  );
}
