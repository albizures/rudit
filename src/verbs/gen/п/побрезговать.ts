import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побрезговать: PerfectVerb = {
  name: Word('побрезговать', 4),
  singular1stPerson: Word('побрезгую', 4),
  singular2ndPerson: Word('побрезгуешь', 4),
  singular3rdPerson: Word('побрезгует', 4),
  plural1stPerson: Word('побрезгуем', 4),
  plural2ndPerson: Word('побрезгуете', 4),
  plural3rdPerson: Word('побрезгуют', 4),
  masculinePast: Word('побрезговал', 4),
  femininePast: Word('побрезговала', 4),
  neuterPast: Word('побрезговало', 4),
  pluralPast: Word('побрезговали', 4),
  imperativeInformal: Word('побрезгуй', 4),
  imperativeFormal: Word('побрезгуйте', 4),
  imperfect: [],
};

perfectVerbs.set(побрезговать.name.text, побрезговать);

export { побрезговать };