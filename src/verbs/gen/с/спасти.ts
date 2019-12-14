import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спасти: PerfectVerb = {
  name: Word('спасти', 5),
  singular1stPerson: Word('спасу', 4),
  singular2ndPerson: Word('спасёшь', 4),
  singular3rdPerson: Word('спасёт', 4),
  plural1stPerson: Word('спасём', 4),
  plural2ndPerson: Word('спасёте', 4),
  plural3rdPerson: Word('спасут', 4),
  masculinePast: Word('спас', 2),
  femininePast: Word('спасла', 5),
  neuterPast: Word('спасло', 5),
  pluralPast: Word('спасли', 5),
  imperativeInformal: Word('спаси', 4),
  imperativeFormal: Word('спасите', 4),
  imperfect: ['спасать'],
};

perfectVerbs.set(спасти.name.text, спасти);

export { спасти };