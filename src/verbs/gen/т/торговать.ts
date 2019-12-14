import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const торговать: PerfectVerb = {
  name: Word('торговать', 6),
  singular1stPerson: Word('торгую', 4),
  singular2ndPerson: Word('торгуешь', 4),
  singular3rdPerson: Word('торгует', 4),
  plural1stPerson: Word('торгуем', 4),
  plural2ndPerson: Word('торгуете', 4),
  plural3rdPerson: Word('торгуют', 4),
  masculinePast: Word('торговал', 6),
  femininePast: Word('торговала', 6),
  neuterPast: Word('торговало', 6),
  pluralPast: Word('торговали', 6),
  imperativeInformal: Word('торгуй', 4),
  imperativeFormal: Word('торгуйте', 4),
  imperfect: [],
};

perfectVerbs.set(торговать.name.text, торговать);

export { торговать };