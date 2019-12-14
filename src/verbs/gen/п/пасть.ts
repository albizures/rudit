import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пасть: PerfectVerb = {
  name: Word('пасть', 1),
  singular1stPerson: Word('паду', 3),
  singular2ndPerson: Word('падёшь', 3),
  singular3rdPerson: Word('падёт', 3),
  plural1stPerson: Word('падём', 3),
  plural2ndPerson: Word('падёте', 3),
  plural3rdPerson: Word('падут', 3),
  masculinePast: Word('пал', 1),
  femininePast: Word('пала', 1),
  neuterPast: Word('пало', 1),
  pluralPast: Word('пали', 1),
  imperativeInformal: Word('пади', 3),
  imperativeFormal: Word('падите', 3),
  imperfect: ['падать'],
};

perfectVerbs.set(пасть.name.text, пасть);

export { пасть };