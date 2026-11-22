const test = require('node:test');
const assert = require('node:assert');

const ROLE_PERMISSIONS = {
  SUPER_ADMIN: ['*'],
  ADMIN: ['leads:read', 'leads:write', 'products:write', 'content:write', 'settings:read', 'audit:read'],
  SALES_MANAGER: ['leads:read', 'leads:write', 'leads:assign', 'leads:export', 'reports:read'],
  SALES_EXECUTIVE: ['leads:read', 'leads:write_assigned'],
  CONTENT_MANAGER: ['content:read', 'content:write', 'products:read', 'products:write'],
};

function hasPermission(role, permission) {
  if (role === 'SUPER_ADMIN') return true;
  const userPerms = ROLE_PERMISSIONS[role] || [];
  return userPerms.includes(permission) || userPerms.includes('*');
}

test('SUPER_ADMIN has universal system permissions', () => {
  assert.strictEqual(hasPermission('SUPER_ADMIN', 'leads:read'), true);
  assert.strictEqual(hasPermission('SUPER_ADMIN', 'settings:write'), true);
  assert.strictEqual(hasPermission('SUPER_ADMIN', 'random:nuclear_code'), true);
});

test('SALES_EXECUTIVE cannot export all leads', () => {
  assert.strictEqual(hasPermission('SALES_EXECUTIVE', 'leads:read'), true);
  assert.strictEqual(hasPermission('SALES_EXECUTIVE', 'leads:export'), false);
});

test('SALES_MANAGER can export leads and assign representatives', () => {
  assert.strictEqual(hasPermission('SALES_MANAGER', 'leads:export'), true);
  assert.strictEqual(hasPermission('SALES_MANAGER', 'leads:assign'), true);
  assert.strictEqual(hasPermission('SALES_MANAGER', 'settings:write'), false);
});

test('CONTENT_MANAGER can modify CMS and products but cannot manage leads', () => {
  assert.strictEqual(hasPermission('CONTENT_MANAGER', 'content:write'), true);
  assert.strictEqual(hasPermission('CONTENT_MANAGER', 'products:write'), true);
  assert.strictEqual(hasPermission('CONTENT_MANAGER', 'leads:write'), false);
});
