import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запастись: PerfectVerb = {
  name: Word('запастись', 6),
  singular1stPerson: Word('запасусь', 5),
  singular2ndPerson: Word('запасёшься', 1),
  singular3rdPerson: Word('запасётся', 1),
  plural1stPerson: Word('запасёмся', 1),
  plural2ndPerson: Word('запасётесь', 1),
  plural3rdPerson: Word('запасутся', 5),
  masculinePast: Word('запасся', 3),
  femininePast: Word('запаслась', 6),
  neuterPast: Word('запаслось', 6),
  pluralPast: Word('запаслись', 6),
  imperativeInformal: Word('запасись', 5),
  imperativeFormal: Word('запаситесь', 5),
  imperfect: [],
};

perfectVerbs.set(запастись.name.text, запастись);

export { запастись };