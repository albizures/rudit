import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помереть: PerfectVerb = {
  name: Word('помереть', 5),
  singular1stPerson: Word('помру', 4),
  singular2ndPerson: Word('помрёшь', 1),
  singular3rdPerson: Word('помрёт', 1),
  plural1stPerson: Word('помрём', 1),
  plural2ndPerson: Word('помрёте', 6),
  plural3rdPerson: Word('помрут', 4),
  masculinePast: Word('помер', 1),
  femininePast: Word('померла', 1),
  neuterPast: Word('померло', 1),
  pluralPast: Word('померли', 1),
  imperativeInformal: Word('помри', 4),
  imperativeFormal: Word('помрите', 4),
  imperfect: ['помирать'],
};

perfectVerbs.set(помереть.name.text, помереть);

export { помереть };