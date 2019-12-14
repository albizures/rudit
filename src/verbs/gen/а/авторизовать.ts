import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const авторизовать: PerfectVerb = {
  name: Word('авторизовать', 9),
  singular1stPerson: Word('авторизую', 7),
  singular2ndPerson: Word('авторизуешь', 7),
  singular3rdPerson: Word('авторизует', 7),
  plural1stPerson: Word('авторизуем', 7),
  plural2ndPerson: Word('авторизуете', 7),
  plural3rdPerson: Word('авторизуют', 7),
  masculinePast: Word('авторизовал', 9),
  femininePast: Word('авторизовала', 9),
  neuterPast: Word('авторизовало', 9),
  pluralPast: Word('авторизовали', 9),
  imperativeInformal: Word('авторизуй', 7),
  imperativeFormal: Word('авторизуйте', 7),
  imperfect: [],
};

perfectVerbs.set(авторизовать.name.text, авторизовать);

export { авторизовать };