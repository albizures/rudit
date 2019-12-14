import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сработать: PerfectVerb = {
  name: Word('сработать', 4),
  singular1stPerson: Word('сработаю', 4),
  singular2ndPerson: Word('сработаешь', 4),
  singular3rdPerson: Word('сработает', 4),
  plural1stPerson: Word('сработаем', 4),
  plural2ndPerson: Word('сработаете', 4),
  plural3rdPerson: Word('сработают', 4),
  masculinePast: Word('сработал', 4),
  femininePast: Word('сработала', 4),
  neuterPast: Word('сработало', 4),
  pluralPast: Word('сработали', 4),
  imperativeInformal: Word('сработай', 4),
  imperativeFormal: Word('сработайте', 4),
  imperfect: [],
};

perfectVerbs.set(сработать.name.text, сработать);

export { сработать };