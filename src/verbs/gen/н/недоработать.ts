import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоработать: PerfectVerb = {
  name: Word('недоработать', 7),
  singular1stPerson: Word('недоработаю', 7),
  singular2ndPerson: Word('недоработаешь', 7),
  singular3rdPerson: Word('недоработает', 7),
  plural1stPerson: Word('недоработаем', 7),
  plural2ndPerson: Word('недоработаете', 7),
  plural3rdPerson: Word('недоработают', 7),
  masculinePast: Word('недоработал', 7),
  femininePast: Word('недоработала', 7),
  neuterPast: Word('недоработало', 7),
  pluralPast: Word('недоработали', 7),
  imperativeInformal: Word('недоработай', 7),
  imperativeFormal: Word('недоработайте', 7),
  imperfect: [],
};

perfectVerbs.set(недоработать.name.text, недоработать);

export { недоработать };