import Footer from "../components/Footer";
import AppNavbar from "../components/Navbar";

export default function Privacy() {
  return (
    <>
    <AppNavbar/>
    <section className="w-full">
      
      {/* TOP BANNER */}
      <div className="relative w-full h-[280px] md:h-[360px]">
        <img
          src="https://res.cloudinary.com/dbv77rbsv/image/upload/v1763741923/privacy-policy_cwmjvw.jpg"
          alt="Risk & Disclaimer Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
      
        <p className="text-gray-700 leading-relaxed text-base sm:text-[16px] space-y-4">
            Protecting your private information is our priority. This Privacy Policy governs data collection and usage of the products, services, software, platform and websites (collectively, “Services”) provided by Pinnacle Property and any of our affiliates (collectively, “Option Insights”). By using the Services, you consent to the data practices described in this policy as well as our Terms of Service. If you do not agree to any part of this Privacy Policy, then you should stop accessing the Services.
    <h1 className="font-bold text-[18px] my-4">
COLLECTION OF PERSONAL INFORMATION
        </h1>
        Pinnacle Property may collect personally identifiable information, depending on your level of activity and interaction with this site. Pinnacle Property may also collect anonymous demographic information, which is not unique to you. Information about your computer hardware and software also may be automatically collected by Pinnacle Property. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used by Option Insights for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Services.

<br />
<br />
Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through the Services, this information may be collected and used by others. Pinnacle Property encourages you to review the privacy statements of websites you choose to link to from our website so that you can understand how those websites collect, use and share your information. Pinnacle Property is not responsible for the privacy statements or other content on websites outside of the websites we operate.

    <h1 className="font-bold text-[18px] my-4">
USE OF PERSONAL INFORMATION
        </h1>

        Pinnacle Property may collect and use your personal information to operate our website and deliver the Services we offer. Option Insights may also use your personally identifiable information to inform you of other products or services available from Pinnacle Property and its affiliates. Pinnacle Property may also contact you to participate in surveys to conduct research about your opinion of current services or of potential new services that may be offered.
        <br />
        <br />
        Pinnacle Property does not sell, rent or lease its customer lists to third parties. Pinnacle Property may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party without your express consent. In addition, Pinnacle Property may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. Pinnacle Property may share your information with third parties who perform tasks required to complete a purchase transaction. All such third parties are prohibited from using your personal information except to provide these Services, and they are obligated to maintain the confidentiality of your information.
            <h1 className="font-bold text-[18px] my-4">
SECURITY OF YOUR PERSONAL INFORMATION
        </h1>
        Pinnacle Property keeps track of the pages visited within our website in order to determine what Services are the most popular. This data is used to deliver customized content and advertising within the website we operate to users whose behavior indicates that they are interested in a particular subject area. Pinnacle Property uses tracking tools to collect information that helps us provide our Service to you. Please note that any “do not track” signals sent by your web browser or other mechanism have no effect on the collection of personally identifiable information by Pinnacle Property. In addition, other parties who perform data analytics for Pinnacle Property may collect personally identifiable information about your online activities when you use our Services. Third party affiliates of Pinnacle Property may have different policies with respect to “do not track” signals and Pinnacle Property makes no representations with respect to such policies.
        <br />
        <br />
        Pinnacle Property only shares browser-level data through third party vendor tracking such as Google Analytics. Users can opt out of these advertising features by visiting Google or resources like the NAI consumer opt-out page.

Pinnacle Property may disclose personal information when we are required to or we believe it is appropriate to comply with the law (e.g., a lawful subpoena, warrant or court order); to enforce or apply this Privacy Policy or our other policies or agreements; to initiate, render, bill, and collect for amounts owed to us; to protect our or our users’ rights, property or safety; to protect our users from fraudulent, abusive, or unlawful use of the Services; or if we believe that an emergency involving the danger of death or serious physical injury to any person requires or justifies disclosure of personal information. Information about our customers, including personal information, may be disclosed as part of any merger, acquisition, debt financing, sale of company assets, as well as in the event of an insolvency, bankruptcy or receivership in which personal information could be transferred to third parties as one of Pinnacle Property’s business assets. In such an event, we will attempt to notify you before your personal information is transferred, but you may not have the right to opt out of any such transfer.
<br />
<br />
You are responsible for safeguarding and preventing unauthorized access to the user information and password that you may use to access our Services. You agree not to disclose your password to any third party and you are responsible for any activity using your account, whether or not you authorized that activity. Please immediately notify Pinnacle Property of any unauthorized use of your account.
<br />
<br />
Pinnacle Property secures your personal information from unauthorized access, use or disclosure. In addition, Option Insights secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure.

<br />
<br />
   <h1 className="font-bold text-[18px] my-4">
CHANGES TO PRIVACY POLICY
        </h1>
        Pinnacle Property may change the provisions of this Privacy Policy at any time, and will always post the most up-to-date version on our website.
        
        
        
        </p>
      </div>
    </section>
    <Footer/>
    </>
  );
}
