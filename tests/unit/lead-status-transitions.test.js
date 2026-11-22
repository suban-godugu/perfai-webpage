const test = require('node:test');
const assert = require('node:assert');

const ALLOWED_STATUS_TRANSITIONS = {
  NEW: ['CONTACTED', 'QUALIFIED', 'LOST'],
  CONTACTED: ['QUALIFIED', 'MEETING_SCHEDULED', 'LOST'],
  QUALIFIED: ['MEETING_SCHEDULED', 'PROPOSAL_SENT', 'LOST'],
  MEETING_SCHEDULED: ['PROPOSAL_SENT', 'NEGOTIATION', 'LOST'],
  PROPOSAL_SENT: ['NEGOTIATION', 'WON', 'LOST'],
  NEGOTIATION: ['WON', 'LOST'],
  WON: [],
  LOST: ['NEW'], // Can be revived
};

function canTransition(currentStatus, targetStatus) {
  if (currentStatus === targetStatus) return true;
  const allowed = ALLOWED_STATUS_TRANSITIONS[currentStatus] || [];
  return allowed.includes(targetStatus);
}

test('Status transitions correctly from NEW to QUALIFIED', () => {
  assert.strictEqual(canTransition('NEW', 'QUALIFIED'), true);
  assert.strictEqual(canTransition('NEW', 'CONTACTED'), true);
});

test('Status cannot jump from NEW directly to WON without negotiation', () => {
  assert.strictEqual(canTransition('NEW', 'WON'), false);
});

test('Status transitions from NEGOTIATION to WON or LOST', () => {
  assert.strictEqual(canTransition('NEGOTIATION', 'WON'), true);
  assert.strictEqual(canTransition('NEGOTIATION', 'LOST'), true);
});
