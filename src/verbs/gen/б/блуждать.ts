import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блуждать: PerfectVerb = {
  name: Word('блуждать', 5),
  singular1stPerson: Word('блуждаю', 5),
  singular2ndPerson: Word('блуждаешь', 5),
  singular3rdPerson: Word('блуждает', 5),
  plural1stPerson: Word('блуждаем', 5),
  plural2ndPerson: Word('блуждаете', 5),
  plural3rdPerson: Word('блуждают', 5),
  masculinePast: Word('блуждал', 5),
  femininePast: Word('блуждала', 5),
  neuterPast: Word('блуждало', 5),
  pluralPast: Word('блуждали', 5),
  imperativeInformal: Word('блуждай', 5),
  imperativeFormal: Word('блуждайте', 5),
  imperfect: [],
};

perfectVerbs.set(блуждать.name.text, блуждать);

export { блуждать };