import React from "react";

export default function UserJourneyTable() {
  const borderClass = "border border-gray-300 dark:border-gray-600 p-3 text-left align-top text-sm sm:text-base";
  const headerClass = "border border-gray-300 dark:border-gray-600 p-3 text-left text-sm sm:text-base font-semibold bg-gray-100 dark:bg-neutral-800";

  return (
    <div className="overflow-x-auto -mx-4 px-4">
      <table className="w-full min-w-[600px] border-collapse border border-gray-300 dark:border-gray-600 text-blackish dark:text-whitish">
        <thead>
          <tr>
            <th className={headerClass}>Phase</th>
            <th className={headerClass}>Actions</th>
            <th className={headerClass}>Thoughts</th>
            <th className={headerClass}>Opportunities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${borderClass} font-bold`}>Discover</td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Ask their friends about the flower purchase</li>
                <li>Through social media</li>
                <li>Search for customization</li>
              </ul>
            </td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Curious</li>
                <li>Interested</li>
                <li>Unsure if it meets the needs</li>
              </ul>
            </td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Highlight the app&apos;s unique features</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className={`${borderClass} font-bold`}>Uses</td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Create an account</li>
                <li>Browse flower arrangement</li>
                <li>Understand the meaning of different flowers</li>
                <li>Design a bouquet that they need</li>
              </ul>
            </td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Overwhelmed by choice</li>
                <li>Eager to explore options</li>
                <li>Enjoy the freedom to personalize</li>
              </ul>
            </td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Offers filters, recommendations</li>
                <li>Guides exploration</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className={`${borderClass} font-bold`}>Decision</td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Review and finalize the bouquet</li>
                <li>Adds bouquet to cart &amp; completes the purchase</li>
              </ul>
            </td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Confident but needs reassurance on the choice</li>
                <li>Satisfaction from a seamless process</li>
              </ul>
            </td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Ensures a secure, smooth checkout</li>
                <li>Clear delivery options</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className={`${borderClass} font-bold`}>Goal</td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Receives confirmation</li>
                <li>Tracks delivery</li>
                <li>Receives the bouquet &amp; evaluates the final product</li>
                <li>Provides feedback</li>
              </ul>
            </td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Anticipation excitement about the delivery</li>
                <li>Happiness if expectations are met</li>
                <li>Loyal if satisfied</li>
              </ul>
            </td>
            <td className={borderClass}>
              <ul className="list-disc list-inside space-y-1">
                <li>Provide excellent customer feedback</li>
                <li>Offer a satisfaction guarantee</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
