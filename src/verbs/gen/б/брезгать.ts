import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брезгать: PerfectVerb = {
  name: Word('брезгать', 2),
  singular1stPerson: Word('брезгаю', 2),
  singular2ndPerson: Word('брезгаешь', 2),
  singular3rdPerson: Word('брезгает', 2),
  plural1stPerson: Word('брезгаем', 2),
  plural2ndPerson: Word('брезгаете', 2),
  plural3rdPerson: Word('брезгают', 2),
  masculinePast: Word('брезгал', 2),
  femininePast: Word('брезгала', 2),
  neuterPast: Word('брезгало', 2),
  pluralPast: Word('брезгали', 2),
  imperativeInformal: Word('брезгай', 2),
  imperativeFormal: Word('брезгайте', 2),
  imperfect: [],
};

perfectVerbs.set(брезгать.name.text, брезгать);

export { брезгать };