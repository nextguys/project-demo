import { part } from 'lively.morphic/components/core.js';
import { depComponent } from 'nextguys--private-dependency-project/ui/components.cp.js';

export async function main () {
  console.log('hello world');
  part(depComponent).openInWorld();
}
