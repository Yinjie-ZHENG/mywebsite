import React from 'react';

function IssueRow({ issue }) {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.name}</td>
      <td>{issue.phone}</td>
      <td>{issue.timestamp.toLocaleString('en-GB',{timeZone:'UTC'})}</td>
    </tr>
  );
}

export default function IssueTable({ issues }) {
  const issueRows = issues.map(issue => (
    <IssueRow key={issue.id} issue={issue} />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID/Serial No.</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Timestamp</th>

        </tr>
      </thead>
      <tbody>
        {issueRows}
      </tbody>
    </table>
  );
}
