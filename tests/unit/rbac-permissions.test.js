const test = require('node:test');
const assert = require('node:assert');

const PERMISSIONS = {
  SUPER_ADMIN: ['*'],
  SALES: [
    'leads:read_assigned',
    'leads:write_assigned',
    'tasks:manage',
    'analytics:read_basic',
  ],
  EDITOR: [
    'content:read',
    'content:write',
    'case_studies:manage',
    'resources:manage',
    'faqs:manage',
  ],
  VIEWER: [
    'leads:read_all',
    'analytics:read_all',
    'audit:read',
  ],
};

function hasPermission(role, permission) {
  if (role === 'SUPER_ADMIN') return true;
  const userPerms = PERMISSIONS[role] || [];
  return userPerms.includes(permission) || userPerms.includes('*');
}

function canAccessLead(user, lead) {
  if (user.role === 'SUPER_ADMIN' || user.role === 'VIEWER') {
    return true;
  }
  if (user.role === 'SALES') {
    if (lead.assigneeId === user.id) return true;
    if (!lead.assigneeId && user.regions.includes(lead.region)) return true;
  }
  return false;
}

test('SUPER_ADMIN has universal system permissions', () => {
  assert.strictEqual(hasPermission('SUPER_ADMIN', 'leads:read'), true);
  assert.strictEqual(hasPermission('SUPER_ADMIN', 'settings:write'), true);
  assert.strictEqual(hasPermission('SUPER_ADMIN', 'audit:read'), true);
});

test('SALES can manage assigned leads and tasks but cannot edit CMS content', () => {
  assert.strictEqual(hasPermission('SALES', 'leads:read_assigned'), true);
  assert.strictEqual(hasPermission('SALES', 'tasks:manage'), true);
  assert.strictEqual(hasPermission('SALES', 'content:write'), false);
});

test('EDITOR can manage case studies and FAQs but cannot touch leads', () => {
  assert.strictEqual(hasPermission('EDITOR', 'case_studies:manage'), true);
  assert.strictEqual(hasPermission('EDITOR', 'faqs:manage'), true);
  assert.strictEqual(hasPermission('EDITOR', 'leads:write_assigned'), false);
});

test('VIEWER has read-only visibility into leads and analytics', () => {
  assert.strictEqual(hasPermission('VIEWER', 'leads:read_all'), true);
  assert.strictEqual(hasPermission('VIEWER', 'audit:read'), true);
  assert.strictEqual(hasPermission('VIEWER', 'tasks:manage'), false);
});

test('canAccessLead restricts SALES to matching region or assigned ID', () => {
  const salesIndia = { id: 'user-sales-1', role: 'SALES', regions: ['INDIA'] };
  const leadIndiaUnassigned = { assigneeId: null, region: 'INDIA' };
  const leadIntlUnassigned = { assigneeId: null, region: 'INTERNATIONAL' };
  const leadIntlAssigned = { assigneeId: 'user-sales-1', region: 'INTERNATIONAL' };

  assert.strictEqual(canAccessLead(salesIndia, leadIndiaUnassigned), true);
  assert.strictEqual(canAccessLead(salesIndia, leadIntlUnassigned), false);
  assert.strictEqual(canAccessLead(salesIndia, leadIntlAssigned), true);
});
