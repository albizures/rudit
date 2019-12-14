import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пастись: PerfectVerb = {
  name: Word('пастись', 4),
  singular1stPerson: Word('пасусь', 3),
  singular2ndPerson: Word('пасёшься', 1),
  singular3rdPerson: Word('пасётся', 1),
  plural1stPerson: Word('пасёмся', 1),
  plural2ndPerson: Word('пасётесь', 1),
  plural3rdPerson: Word('пасутся', 3),
  masculinePast: Word('пасся', 1),
  femininePast: Word('паслась', 4),
  neuterPast: Word('паслось', 4),
  pluralPast: Word('паслись', 4),
  imperativeInformal: Word('пасись', 3),
  imperativeFormal: Word('паситесь', 3),
  imperfect: [],
};

perfectVerbs.set(пастись.name.text, пастись);

export { пастись };