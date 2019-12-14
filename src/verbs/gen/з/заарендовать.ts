import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заарендовать: PerfectVerb = {
  name: Word('заарендовать', 9),
  singular1stPerson: Word('заарендую', 7),
  singular2ndPerson: Word('заарендуешь', 7),
  singular3rdPerson: Word('заарендует', 7),
  plural1stPerson: Word('заарендуем', 7),
  plural2ndPerson: Word('заарендуете', 7),
  plural3rdPerson: Word('заарендуют', 7),
  masculinePast: Word('заарендовал', 9),
  femininePast: Word('заарендовала', 9),
  neuterPast: Word('заарендовало', 9),
  pluralPast: Word('заарендовали', 9),
  imperativeInformal: Word('заарендуй', 7),
  imperativeFormal: Word('заарендуйте', 7),
  imperfect: [],
};

perfectVerbs.set(заарендовать.name.text, заарендовать);

export { заарендовать };