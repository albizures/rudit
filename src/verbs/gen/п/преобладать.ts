import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преобладать: PerfectVerb = {
  name: Word('преобладать', 8),
  singular1stPerson: Word('преобладаю', 8),
  singular2ndPerson: Word('преобладаешь', 8),
  singular3rdPerson: Word('преобладает', 8),
  plural1stPerson: Word('преобладаем', 8),
  plural2ndPerson: Word('преобладаете', 8),
  plural3rdPerson: Word('преобладают', 8),
  masculinePast: Word('преобладал', 8),
  femininePast: Word('преобладала', 8),
  neuterPast: Word('преобладало', 8),
  pluralPast: Word('преобладали', 8),
  imperativeInformal: Word('преобладай', 8),
  imperativeFormal: Word('преобладайте', 8),
  imperfect: [],
};

perfectVerbs.set(преобладать.name.text, преобладать);

export { преобладать };