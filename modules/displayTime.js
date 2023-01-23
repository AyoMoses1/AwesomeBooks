import { DateTime } from './luxon.min.js';

const dt = DateTime.fromObject({ day: 22, hour: 12 }, { zone: 'America/Los_Angeles', numberingSystem: 'beng' });

const f = { month: 'long', day: 'numeric' };

export { dt, f };
