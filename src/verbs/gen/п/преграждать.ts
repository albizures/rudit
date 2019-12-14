import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преграждать: PerfectVerb = {
  name: Word('преграждать', 8),
  singular1stPerson: Word('преграждаю', 8),
  singular2ndPerson: Word('преграждаешь', 8),
  singular3rdPerson: Word('преграждает', 8),
  plural1stPerson: Word('преграждаем', 8),
  plural2ndPerson: Word('преграждаете', 8),
  plural3rdPerson: Word('преграждают', 8),
  masculinePast: Word('преграждал', 8),
  femininePast: Word('преграждала', 8),
  neuterPast: Word('преграждало', 8),
  pluralPast: Word('преграждали', 8),
  imperativeInformal: Word('преграждай', 8),
  imperativeFormal: Word('преграждайте', 8),
  imperfect: [],
};

perfectVerbs.set(преграждать.name.text, преграждать);

export { преграждать };