import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорезывать: PerfectVerb = {
  name: Word('прорезывать', 4),
  singular1stPerson: Word('прорезываю', 4),
  singular2ndPerson: Word('прорезываешь', 4),
  singular3rdPerson: Word('прорезывает', 4),
  plural1stPerson: Word('прорезываем', 4),
  plural2ndPerson: Word('прорезываете', 4),
  plural3rdPerson: Word('прорезывают', 4),
  masculinePast: Word('прорезывал', 4),
  femininePast: Word('прорезывала', 4),
  neuterPast: Word('прорезывало', 4),
  pluralPast: Word('прорезывали', 4),
  imperativeInformal: Word('прорезывай', 4),
  imperativeFormal: Word('прорезывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прорезывать.name.text, прорезывать);

export { прорезывать };