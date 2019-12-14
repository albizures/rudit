import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пасти: PerfectVerb = {
  name: Word('пасти', 4),
  singular1stPerson: Word('пасу', 3),
  singular2ndPerson: Word('пасёшь', 1),
  singular3rdPerson: Word('пасёт', 1),
  plural1stPerson: Word('пасём', 1),
  plural2ndPerson: Word('пасёте', 1),
  plural3rdPerson: Word('пасут', 3),
  masculinePast: Word('пас', 1),
  femininePast: Word('пасла', 4),
  neuterPast: Word('пасло', 4),
  pluralPast: Word('пасли', 4),
  imperativeInformal: Word('паси', 3),
  imperativeFormal: Word('пасите', 3),
  imperfect: [],
};

perfectVerbs.set(пасти.name.text, пасти);

export { пасти };