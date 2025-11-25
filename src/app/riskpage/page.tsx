import Footer from "../components/Footer";
import AppNavbar from "../components/Navbar";

export default function RiskDisclaimer() {
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

        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">
            Risk and Disclaimer
          </h1>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <p className="text-gray-700 leading-relaxed text-base sm:text-[17px] space-y-4">
          The information given on the website regarding the company, past experiences, projects etc.
          except the legal documents, is purely indicative and representational and does not
          constitute a promise by the company nor does it create any contractual obligation on part of the company.
          <br /><br />
  The artistic work contained in this web site like 360 degree view, elevations, walkthrough, E- Brochures, other similar material, etc are for representation purpose only and do not form part of any agreement or legal binding on part of Pinnacle Property. Expressed views are not a part of the actual deliverables. These are artistic representations only. Soft furnishing/furniture, gadgets are not part of the offering. The product and technology displayed if any, or referred to is for representation purposes only and the company does not guarantee the use of all of them. Specifications are indicative and are subject to change as decided by the company or the competent authority. Marginal variation may be necessary during construction. The extent/number/variety of the equipment/appliances and their brand thereof is tentative and liable to change at the sole discretion of the company. Applicant/allottee or any person shall not have any right to raise objection in this regard. Further, the Company/ Architects reserve the right to add/delete any details/specifications/elevations mentioned, if so warranted by the circumstances subject to the applicable laws.


          <br />
          <br />
          Locations and distances between the places are indicative only and for informational and reference purposes only and are subject to variations and does not from part of sales offering. No representation is made as to the accuracy thereof.
          <br />
          <br />
          It is your responsibility to evaluate the accuracy, completeness and usefulness of any opinion, advice, services or other information provided. All information contained on any page is distributed with the understanding that the authors, publishers, and distributors are not rendering legal or other professional advice or opinions on specific facts or matters, and accordingly assume no liability whatsoever in connection with its use. Consult your own legal or tax advisor with respect to your personal situation.

In no event shall Pinnacle Property and its related, affiliated and subsidiary companies be liable for any direct, indirect, special, incidental, or consequential damages arising out of the use of the information herein.
<br />
<br />
By using or accessing the Website you agree with the Disclaimer without any qualification or limitation. The Company reserves the right to terminate, revoke, modify, alter, add and delete any one or more of the terms and conditions of the website. The Company shall be under no obligation to notify the visitor of the amendment to the terms and conditions and the visitor shall be bound by such amended terms and conditions.
<br />
<br />
The visuals and information contained herein marked as “artistic impression” are artistic impressions being indicative in nature and are for general information purposes only. The visuals contained marked as “generic image” and other visuals /image /photographs are general images and do not have any correlation with the project, unless specifically claimed to be actual photographs.
<br />
<br />
The imagery used on the website may not represent actuals or may be indicative of style only. Photographs of interiors, surrounding views and location may not represent actuals or may have been digitally enhanced or altered. These photographs may not represent actuals or may be indicative only. Computer generated images, walkthroughs and render images are the artist's impression and are an indicative of the actual designs.
<br />
<br />
No information given on this Website creates a warranty or expand the scope of any warranty that cannot be disclaimed under the applicable laws. The information on this website is presented as general information and no representation or warranty is expressly or impliedly given as to its accuracy. Any interested party should verify all the information including designs, plans, specifications, facilities, features, payment schedules, terms of sales etc. independently with the Company prior to concluding any decision for buying in any of the project
<br />
<br />
While enough care is taken by the Company to ensure that information in the website are up to date, accurate and correct, the readers/ users are requested to make an independent enquiry with the Company before relying upon the same. Nothing on the website should be misconstrued as advertising, marketing, booking, selling or an offer for sale or invitation to purchase a unit in any project by the Company. The Company is not responsible for the consequences of any action taken by the viewer relying on such material/ information on this website without independently verifying with the Company.
<br />
<br />
The Promoter reserves the right to develop any project in phases and as and when a phase is conceived the same is being registered with RERA and the remaining land parcels shall be considered as the part of future expansion.
          {/* You can paste all your remaining long text here exactly as provided. */}
        </p>
      </div>
    </section>
    <Footer/>
    </>
  );
}
