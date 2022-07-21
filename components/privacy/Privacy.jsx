import Link from "next/link"

const Privacy = () => {
    return (
        <div className="relative" id="layout-conntainer">
            <div className="max-w-[85.5%] px-4 mx-auto py-[2rem]">
                <div className="prose" style={{ maxWidth: "none" }}>
                    <h1 className="text-[2.25em] font-extrabold mb-[0.8888889em] leading-[1.1111111]">Privacy Policy</h1>
                    <p className="my-[1.25em] leading-[28px]">Academire (academire, we or us) is committed to protecting your privacy. Our Privacy Policy explains how we collect, use, disclose, and protect information about you or associated with you (“personal information”), and your choices about the collection and use of your information. This Privacy Policy applies to the online services offered by academire at academire.com.</p>
                    <p className="my-[1.25em] leading-[28px]">For the purposes of EU data protection laws (&quot;Data Protection Law&quot;), academire is data controller (i.e., the company who is responsible for, and controls the processing of, your personal data).</p>
                    <p className="my-[1.25em] leading-[28px]">We collect the following types of information about you:</p>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] leading-[1.1111111] uppercase">INFORMATION WE COLLECT FROM YOU DIRECTLY</h2>
                    <p className="my-[1.25em] leading-[28px]">Account information: You can browse our site without providing personal information, but you must register in order to access most of the features of Service. We ask for certain information such as your username, email address and password when you create a academire account, or if you correspond with us.</p>
                    <p className="my-[1.25em] leading-[28px]">Data collected through the use of the Service: After you set up your account, academire members may also choose to provide additional information which may be shared through public profiles, such as your name, location, website, links to your social media profiles, and other information. You control how much personally identifying information you wish to provide in your public profile.</p>
                    <p className="my-[1.25em] leading-[28px]">Messages and User Content: We may retain any messages you send through the Service, and may collect information you provide in User Content you post to the Service such as comments.</p>
                    <p className="my-[1.25em] leading-[28px]">We use this information to operate, maintain, and provide to you the features and functionality of the Service, as well as to communicate directly with you, such as to send you email messages. You can control your receipt of email messages by visiting Settings within your Dashboard once you&apos;re logged in. We may also send you Service-related emails (e.g. account verification, change or updates to features of the Service, technical and security notices). You may not opt-out of Service-related e-mails. For more information about your communication preferences, see “Your Choices Regarding Your Information” below.</p>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] leading-[1.1111111] uppercase">INFORMATION WE MAY RECEIVE FROM SOCIAL NETWORKING SITES</h2>
                    <p className="my-[1.25em] leading-[28px]">If you create an account on our website through a third-party connection or log-in, for example through Facebook, Google+ or Twitter, or by “following,” or “liking” academire on a third party social media site, etc., that third party may pass certain information about your use of its service to academire. This information could include the user ID associated with your account (for example, your Facebook UID), an access token necessary to access that service, any information that you have permitted the third party to share with us, and any information you have made public in connection with that service. If you allow us access to your friends list, your friends’ user IDs, and your connection to those friends, may be used and stored to make your experience more social, and to allow you to invite your friends to use our Service as well as provide you with updates if and when your friends join academire. The data we receive is dependent upon your privacy settings with the social network. You should always review, and if necessary, adjust your privacy settings on third-party websites and services before linking or connecting them to the academire Service.</p>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] leading-[1.1111111] uppercase">INFORMATION AUTOMATICALLY COLLECTED</h2>
                    <p className="my-[1.25em] leading-[28px]">We automatically collect certain types of usage information when you visit our website or use our Service. When you visit the Site, we may send one or more cookies — a small text file containing a string of alphanumeric characters — to your computer that uniquely identifies your browser and lets us help you log in faster and enhance your navigation through the site. A cookie may also convey information to us about how you use the Service (e.g. the pages you view, the links you click and other actions you take on the Service), and allow us to track your usage of the Service over time. We may also collect how you use our services with external scripts and tools. We may collect log file information from your browser or mobile device each time you access the Service. Log file information may include anonymous information such as your web request, Internet Protocol (“IP”) address, browser type, information about your mobile device, referring / exit pages and URLs, number of clicks and how you interact with links on the Service, domain names, landing pages, pages viewed, and other such information. We may employ clear gifs (also known as web beacons) which are used to anonymously track the online usage patterns of our Users. In addition, we may also use clear gifs in HTML-based emails sent to our users to track which emails are opened and which links are clicked by recipients. The information allows for more accurate reporting and improvement of the Service. We may also collect analytics data, or use third-party analytics tools, to help us measure traffic and usage trends for the Service. These tools collect information sent by your browser or mobile device, including the pages you visit, your use of third party applications, and other information that assists us in analyzing and improving the Service.</p>
                    <p className="my-[1.25em] leading-[28px]">When you access our Services by or through a mobile device, we may receive or collect and store a unique identification numbers associated with your device (“Device ID”), mobile carrier, device type and manufacturer, phone number, and, depending on your mobile device settings, your geographical location data, including GPS coordinates (e.g. latitude and/or longitude) or similar information regarding the location of your mobile device.</p>
                    <p className="my-[1.25em] leading-[28px]">We use or may use the data collected through cookies, log file, device identifiers, location data and clear gifs information to: (a) remember information so that you will not have to re-enter it during your visit or the next time you visit the site; (b) provide custom, personalized content and information; (c) provide and monitor the effectiveness of our Service; (d) monitor aggregate metrics such as total number of visitors, traffic, usage, and demographic patterns on our website and our Service; (e) diagnose or fix technology problems; and (f) otherwise to plan for and enhance our service. We may associate information we automatically collect with your other information.</p>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] leading-[1.1111111] uppercase">Legal basis for processing in the EU</h2>
                    <p className="my-[1.25em] leading-[28px]">In the EU, the purposes for which we process your personal data are:</p>
                    <ul>
                        <li className="ml-[22px] list-disc my-[.5em]">where we need to perform the contract we are about to enter into or have entered into with you for the Service;</li>
                        <li className="ml-[22px] list-disc my-[.5em]">Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests</li>
                        <li className="ml-[22px] list-disc my-[.5em]">Where we need to comply with a legal or regulatory obligation in the EU.</li>
                    </ul>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] mt-[0.8888889em] leading-[1.1111111] uppercase">Sharing of Your Information</h2>
                    <p className="my-[1.25em] leading-[28px]">We may share your personal information in the instances described below. For further information on your choices regarding your information, see the “Your Choices Regarding Your Information” section below.</p>
                    <p className="my-[1.25em] leading-[28px]">We may share your personal information with:</p>
                    <ul>
                        <li  className="ml-[22px] list-disc my-[.5em]">Other companies owned by or under common ownership as academire, which includes our subsidiaries (i.e., any organization we own or control) or our ultimate holding company (i.e., any organization that owns or controls us) and any subsidiaries it owns. These companies will use your personal information in the same way as we can under this Policy;</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Third party vendors, consultants, contractors and other service providers that perform services on our behalf, in order to carry out their work for us, which may include content or service fulfilment, accounting, or providing analytics services;</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Third parties at your request. Any information or content that you voluntarily disclose for posting to the Service, such as User Content, becomes available to the public and/or to other academire members, as controlled by any applicable privacy settings. Additionally, you may have the option to share your activities on our Services with your friends through social media. academire does not have control over your information shared with third party social networks and you should review the policies of those networks before consenting to share information;</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Other parties in connection with any company transaction, such as a merger, sale of company assets or shares, reorganization, financing, change of control or the acquisition of all or a portion of our business by another company or third party or in the event of bankruptcy or related or similar proceedings. Your information, such as user names and email addresses, User Content and other user information may be among the items sold or otherwise transferred in these types of transactions</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Third parties as reasonably necessary to (i) satisfy any applicable law, regulation, subpoena/court order, legal process or other government request, (ii) enforce our Terms of Service, including the investigation of potential violations thereof, and/or (iii) investigate and defend ourselves against any third party claims or allegations, (iv) to exercise or protect the rights, property, or personal safety of academire, our Users or others.</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">We may also share information with others in an aggregated and anonymous form that does not reasonably identify you directly as an individual.</li>
                    </ul>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] mt-[0.8888889em] leading-[1.1111111] uppercase">Your Choices about Your Information</h2>
                    <ul>
                        <li  className="ml-[22px] list-disc my-[.5em]">Profile data. You can change your profile settings by visiting “Edit Account” to control whether your profile can be seen by academire members or by the general public.</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Communications. You can control your communication preferences by visiting &quot;Mail Settings” in the &quot;My Account” section of our website. You can also click the “unsubscribe” button on promotional email communications. Note that you are not permitted to unsubscribe or opt-out of non-promotional messages regarding your account, such as account verification, password requests, change or updates to features of the Service, or technical and security notices.</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Data Retention. We will retain your information for as long as your account is active or as needed to provide you services. If your account becomes inactive, we will maintain your personal information in the event you wish to re-engage in our Service. You may delete your account by visiting the “My Account” page.</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">If you have any questions about reviewing or modifying your account information, you can contact us directly at support@academire.com.</li>
                    </ul>
                    <h3>Your rights in respect of your personal data if you are located in the EU or Switzerland</h3>
                    <p className="my-[1.25em] leading-[28px]">If you are located in the EU or Switzerland, you have the following rights in respect of your personal data that we hold:</p>
                    <ul>
                        <li  className="ml-[22px] list-disc my-[.5em]">Right of access. The right to obtain access to your personal data.</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Right to rectification. The right to obtain rectification of your personal data without undue delay where that personal data is inaccurate or incomplete.</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Right to erasure. The right to obtain the erasure of your personal data without undue delay in certain circumstances, such as where the personal data is no longer necessary in relation to the purposes for which it was collected or processed.</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Right to restriction. The right to obtain the restriction of the processing undertaken by us on your personal data in certain circumstances, such as where the accuracy of the personal data is contested by you, for a period enabling us to verify the accuracy of that personal data.</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Right to portability. The right to portability allows you to move, copy or transfer personal data easily from one organization to another.</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">Right to object. You have a right to object to processing based on legitimate interests and direct marketing.</li>
                        <li  className="ml-[22px] list-disc my-[.5em]">If you wish to exercise one of these rights, please contact us using the contact details at the end of this Privacy Policy.</li>
                    </ul>
                    <p className="my-[1.25em] leading-[28px]">You also have the right to lodge a complaint to your local data protection authority. Further information about how to contact your local data protection authority is available at http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</p>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] leading-[1.1111111] uppercase">How We Store and Protect Your Information</h2>
                    <p className="my-[1.25em] leading-[28px]">Storage and Processing: Your information collected through the Service may be stored and processed in the United States or any other country in which academire or its subsidiaries, affiliates or service providers maintain facilities. academire may transfer information that we collect about you, including personal information, to affiliated entities, or to other third parties across borders and from your country or jurisdiction to other countries or jurisdictions around the world. If you are located in the European Union or other regions with laws governing data collection and use that may differ from U.S. law, please note that we may transfer information, including personal information, to a country and jurisdiction that does not have the same data protection laws as your jurisdiction, and you we will take all steps reasonably necessary to ensure that any personal data are treated securely and in accordance with this Privacy Policy. Such transfers are made pursuant to appropriate safeguards. If you wish to enquire further about these transfers, please contact us at support@academire.com.</p>
                    <p className="my-[1.25em] leading-[28px]">Keeping your information safe: academire cares about the security of your information and uses commercially reasonable safeguards to preserve the integrity and security of all information collected through the Service. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event that any information under our control is compromised as a result of a breach of security, we will take reasonable steps to investigate the situation and where appropriate, notify those individuals whose information may have been compromised and take other steps, in accordance with any applicable laws and regulations. Your privacy settings may also be affected by changes to the functionality of third party sites and services that you add to the academire Service, such as social networks. academire is not responsible for the functionality or security measures of any third party.</p>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] leading-[1.1111111] uppercase">Children&apos;s Privacy</h2>
                    <p className="my-[1.25em] leading-[28px]">Our Service is not directed at children under the age of 13 and we do not knowingly collect or solicit information from anyone under the age of 13. In the event that we learn that we have collected personal information from a child under age 13 without parental consent, we will delete that information as quickly as possible. If you believe that we might have any information collected from a child under 13, please contact us at support@academire.com.</p>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] leading-[1.1111111] uppercase">School Privacy</h2>
                    <p className="my-[1.25em] leading-[28px]">In some circumstances, we may permit a School to register Students to our service for the purpose of providing educational services. Because academire provides the Service to School to benefit and enhance the School’s curriculum, academire relies on the school to obtain and provide appropriate consent, if needed, to collect personal information of students.</p>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] leading-[1.1111111] uppercase">Links to Other Websites and Services</h2>
                    <p className="my-[1.25em] leading-[28px]">The Services may, from time to time, contain links to and from third party websites. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for their policies. Please check the individual policies before you submit any information to those websites.</p>
                    <h3>May I opt out of academire Communications?</h3>
                    <p className="my-[1.25em] leading-[28px]">Yes. We retain basic user contact information to communicate with our customers and their users about product and security updates, relevant marketing, training and events. academire users may opt-out of communications here.</p>
                    <h3>Where does academire host customer data?</h3>
                    <p className="my-[1.25em] leading-[28px]">Looker-hosted instances are hosted in the Google Cloud.</p>
                    <h3>How Can I Edit my academire Data?</h3>
                    <p className="my-[1.25em] leading-[28px]">You can edit your data at any time from your profile page here.</p>
                    <h3>How long does academire retain Customer Data? Will academire delete customer data when requests?</h3>
                    <p className="my-[1.25em] leading-[28px]">academire maintains all customer data until we mark users as &quot;non-active&quot; or a customer deletes their own account. User can delete their own accounts and data <Link href="#"><a className="black-color underline-offset-2 font-medium decoration-2 new-color">here</a></Link>.</p>
                    <h3>How Can I download my academire Data?</h3><p className="my-[1.25em] leading-[28px]">Our customer support team will be happy to help you here. You can reach them via support@academire.com</p>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] leading-[1.1111111] uppercase">How to Contact Us</h2>
                    <p className="my-[1.25em] leading-[28px]">If you have any questions about this Privacy Policy or the Service, please contact us at support@academire.com or at <Link href="/contact"><a className="black-color underline-offset-2 font-medium decoration-2 new-color">https://academire.com/contact</a></Link></p>
                    <h2 className="text-[24px] font-bold mb-[0.8888889em] leading-[1.1111111] uppercase">Changes to Our Privacy Policy</h2>
                    <p className="my-[1.25em] leading-[28px]">academire may modify or update this Privacy Policy from time to time to reflect the changes in our business and practices, and so you should review this page periodically. When we change the policy in a material manner we will let you know and update the ‘last modified’ date at the bottom of this page. This Privacy Policy was last modified on June 19th, 2021.</p>
                </div>
            </div>
        </div>
    )
}

export default Privacy