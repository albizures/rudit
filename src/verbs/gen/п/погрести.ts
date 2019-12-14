import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погрести: PerfectVerb = {
  name: Word('погрести', 7),
  singular1stPerson: Word('погребу', 6),
  singular2ndPerson: Word('погребёшь', 4),
  singular3rdPerson: Word('погребёт', 4),
  plural1stPerson: Word('погребём', 4),
  plural2ndPerson: Word('погребёте', 4),
  plural3rdPerson: Word('погребут', 6),
  masculinePast: Word('погрёб', 1),
  femininePast: Word('погребла', 7),
  neuterPast: Word('погребло', 7),
  pluralPast: Word('погребли', 7),
  imperativeInformal: Word('погреби', 6),
  imperativeFormal: Word('погребите', 6),
  imperfect: ['грести'],
};

perfectVerbs.set(погрести.name.text, погрести);

export { погрести };