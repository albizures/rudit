import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посвистывать: PerfectVerb = {
  name: Word('посвистывать', 4),
  singular1stPerson: Word('посвистываю', 4),
  singular2ndPerson: Word('посвистываешь', 4),
  singular3rdPerson: Word('посвистывает', 4),
  plural1stPerson: Word('посвистываем', 4),
  plural2ndPerson: Word('посвистываете', 4),
  plural3rdPerson: Word('посвистывают', 4),
  masculinePast: Word('посвистывал', 4),
  femininePast: Word('посвистывала', 4),
  neuterPast: Word('посвистывало', 4),
  pluralPast: Word('посвистывали', 4),
  imperativeInformal: Word('посвистывай', 4),
  imperativeFormal: Word('посвистывайте', 4),
  imperfect: [],
};

perfectVerbs.set(посвистывать.name.text, посвистывать);

export { посвистывать };