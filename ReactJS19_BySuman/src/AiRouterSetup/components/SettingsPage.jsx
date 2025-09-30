import React from 'react';

function SettingsPage() {
  return (
    <div className="page">
      <h1>Settings</h1>
      <p>Manage your dashboard settings here.</p>
      <form>
        <label>
          Theme:
          <select>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default SettingsPage;
