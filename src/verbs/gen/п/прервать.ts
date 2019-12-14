import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прервать: PerfectVerb = {
  name: Word('прервать', 5),
  singular1stPerson: Word('прерву', 5),
  singular2ndPerson: Word('прервёшь', 5),
  singular3rdPerson: Word('прервёт', 5),
  plural1stPerson: Word('прервём', 5),
  plural2ndPerson: Word('прервёте', 5),
  plural3rdPerson: Word('прервут', 5),
  masculinePast: Word('прервал', 5),
  femininePast: Word('прервала', 5),
  neuterPast: Word('прервало', 5),
  pluralPast: Word('прервали', 5),
  imperativeInformal: Word('прерви', 5),
  imperativeFormal: Word('прервите', 5),
  imperfect: ['прерывать'],
};

perfectVerbs.set(прервать.name.text, прервать);

export { прервать };