import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ковать: PerfectVerb = {
  name: Word('ковать', 3),
  singular1stPerson: Word('кую', 2),
  singular2ndPerson: Word('куёшь', 2),
  singular3rdPerson: Word('куёт', 2),
  plural1stPerson: Word('куём', 2),
  plural2ndPerson: Word('куёте', 2),
  plural3rdPerson: Word('куют', 2),
  masculinePast: Word('ковал', 3),
  femininePast: Word('ковала', 3),
  neuterPast: Word('ковало', 3),
  pluralPast: Word('ковали', 3),
  imperativeInformal: Word('куй', 1),
  imperativeFormal: Word('куйте', 1),
  imperfect: ['выковать','подковать'],
};

perfectVerbs.set(ковать.name.text, ковать);

export { ковать };