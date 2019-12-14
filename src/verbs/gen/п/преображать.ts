import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преображать: PerfectVerb = {
  name: Word('преображать', 8),
  singular1stPerson: Word('преображаю', 8),
  singular2ndPerson: Word('преображаешь', 8),
  singular3rdPerson: Word('преображает', 8),
  plural1stPerson: Word('преображаем', 8),
  plural2ndPerson: Word('преображаете', 8),
  plural3rdPerson: Word('преображают', 8),
  masculinePast: Word('преображал', 8),
  femininePast: Word('преображала', 8),
  neuterPast: Word('преображало', 8),
  pluralPast: Word('преображали', 8),
  imperativeInformal: Word('преображай', 8),
  imperativeFormal: Word('преображайте', 8),
  imperfect: [],
};

perfectVerbs.set(преображать.name.text, преображать);

export { преображать };