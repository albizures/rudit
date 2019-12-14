import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запасти: PerfectVerb = {
  name: Word('запасти', 6),
  singular1stPerson: Word('запасу', 5),
  singular2ndPerson: Word('запасёшь', 1),
  singular3rdPerson: Word('запасёт', 1),
  plural1stPerson: Word('запасём', 1),
  plural2ndPerson: Word('запасёте', 1),
  plural3rdPerson: Word('запасут', 5),
  masculinePast: Word('запас', 3),
  femininePast: Word('запасла', 6),
  neuterPast: Word('запасло', 6),
  pluralPast: Word('запасли', 3),
  imperativeInformal: Word('запаси', 5),
  imperativeFormal: Word('запасите', 5),
  imperfect: ['запасать'],
};

perfectVerbs.set(запасти.name.text, запасти);

export { запасти };