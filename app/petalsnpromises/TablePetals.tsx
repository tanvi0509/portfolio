import React from "react";

export default function UserJourneyTable() {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "center",
        border: "2px solid black",
      }}
    >
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>Phase</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Actions</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>
            Thoughts
          </th>
          <th style={{ border: "1px solid black", padding: "8px" }}>
            Opportunities
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{ border: "1px solid black", padding: "8px" }}
            className="font-bold"
          >
            Discover
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Ask their friends about the flower purchase</li>
              <li>Through social media</li>
              <li>Search for customization</li>
            </ul>
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Curious</li>
              <li>Interested</li>
              <li>Unsure if it meets the needs</li>
            </ul>
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Highlight the app&apos;s unique features</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td
            style={{ border: "1px solid black", padding: "8px" }}
            className="font-bold"
          >
            Uses
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Create an account</li>
              <li>Browse flower arrangement</li>
              <li>Understand the meaning of different flowers</li>
              <li>Design a bouquet that they need</li>
            </ul>
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Overwhelmed by choice</li>
              <li>Eager to explore options</li>
              <li>Enjoy the freedom to personalize</li>
            </ul>
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Offers filters, recommendations</li>
              <li>Guides exploration</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td
            style={{ border: "1px solid black", padding: "8px" }}
            className="font-bold"
          >
            Decision
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Review and finalize the bouquet</li>
              <li>Adds bouquet to cart & completes the purchase</li>
            </ul>
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Confident but needs reassurance on the choice</li>
              <li>Satisfaction from a seamless process</li>
            </ul>
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Ensures a secure, smooth checkout</li>
              <li>Clear delivery options</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td
            style={{ border: "1px solid black", padding: "8px" }}
            className="font-bold"
          >
            Goal
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Receives confirmation</li>
              <li>Tracks delivery</li>
              <li>Receives the bouquet & evaluates the final product</li>
              <li>Provides feedback</li>
            </ul>
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Anticipation excitement about the delivery</li>
              <li>Happiness if expectations are met</li>
              <li>Loyal if satisfied</li>
            </ul>
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            <ul>
              <li>Provide excellent customer feedback</li>
              <li>Offer a satisfaction guarantee</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
