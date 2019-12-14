import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрыгать: PerfectVerb = {
  name: Word('запрыгать', 4),
  singular1stPerson: Word('запрыгаю', 4),
  singular2ndPerson: Word('запрыгаешь', 4),
  singular3rdPerson: Word('запрыгает', 4),
  plural1stPerson: Word('запрыгаем', 4),
  plural2ndPerson: Word('запрыгаете', 4),
  plural3rdPerson: Word('запрыгают', 4),
  masculinePast: Word('запрыгал', 4),
  femininePast: Word('запрыгала', 4),
  neuterPast: Word('запрыгало', 4),
  pluralPast: Word('запрыгали', 4),
  imperativeInformal: Word('запрыгай', 4),
  imperativeFormal: Word('запрыгайте', 4),
  imperfect: [],
};

perfectVerbs.set(запрыгать.name.text, запрыгать);

export { запрыгать };