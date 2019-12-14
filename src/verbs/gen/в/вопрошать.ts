import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вопрошать: PerfectVerb = {
  name: Word('вопрошать', 6),
  singular1stPerson: Word('вопрошаю', 6),
  singular2ndPerson: Word('вопрошаешь', 6),
  singular3rdPerson: Word('вопрошает', 6),
  plural1stPerson: Word('вопрошаем', 6),
  plural2ndPerson: Word('вопрошаете', 6),
  plural3rdPerson: Word('вопрошают', 6),
  masculinePast: Word('вопрошал', 6),
  femininePast: Word('вопрошала', 6),
  neuterPast: Word('вопрошало', 6),
  pluralPast: Word('вопрошали', 6),
  imperativeInformal: Word('вопрошай', 6),
  imperativeFormal: Word('вопрошайте', 6),
  imperfect: [],
};

perfectVerbs.set(вопрошать.name.text, вопрошать);

export { вопрошать };