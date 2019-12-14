import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посасывать: PerfectVerb = {
  name: Word('посасывать', 3),
  singular1stPerson: Word('посасываю', 3),
  singular2ndPerson: Word('посасываешь', 3),
  singular3rdPerson: Word('посасывает', 3),
  plural1stPerson: Word('посасываем', 3),
  plural2ndPerson: Word('посасываете', 3),
  plural3rdPerson: Word('посасывают', 3),
  masculinePast: Word('посасывал', 3),
  femininePast: Word('посасывала', 3),
  neuterPast: Word('посасывало', 3),
  pluralPast: Word('посасывали', 3),
  imperativeInformal: Word('посасывай', 3),
  imperativeFormal: Word('посасывайте', 3),
  imperfect: [],
};

perfectVerbs.set(посасывать.name.text, посасывать);

export { посасывать };