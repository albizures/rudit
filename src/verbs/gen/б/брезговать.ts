import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брезговать: PerfectVerb = {
  name: Word('брезговать', 2),
  singular1stPerson: Word('брезгую', 2),
  singular2ndPerson: Word('брезгуешь', 2),
  singular3rdPerson: Word('брезгует', 2),
  plural1stPerson: Word('брезгуем', 2),
  plural2ndPerson: Word('брезгуете', 2),
  plural3rdPerson: Word('брезгуют', 2),
  masculinePast: Word('брезговал', 2),
  femininePast: Word('брезговала', 2),
  neuterPast: Word('брезговало', 2),
  pluralPast: Word('брезговали', 2),
  imperativeInformal: Word('брезгуй', 2),
  imperativeFormal: Word('брезгуйте', 2),
  imperfect: [],
};

perfectVerbs.set(брезговать.name.text, брезговать);

export { брезговать };