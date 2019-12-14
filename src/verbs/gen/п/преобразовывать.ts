import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преобразовывать: PerfectVerb = {
  name: Word('преобразовывать', 8),
  singular1stPerson: Word('преобразовываю', 8),
  singular2ndPerson: Word('преобразовываешь', 8),
  singular3rdPerson: Word('преобразовывает', 8),
  plural1stPerson: Word('преобразовываем', 8),
  plural2ndPerson: Word('преобразовываете', 8),
  plural3rdPerson: Word('преобразовывают', 8),
  masculinePast: Word('преобразовывал', 8),
  femininePast: Word('преобразовывала', 8),
  neuterPast: Word('преобразовывало', 8),
  pluralPast: Word('преобразовывали', 8),
  imperativeInformal: Word('преобразовывай', 8),
  imperativeFormal: Word('преобразовывайте', 8),
  imperfect: [],
};

perfectVerbs.set(преобразовывать.name.text, преобразовывать);

export { преобразовывать };