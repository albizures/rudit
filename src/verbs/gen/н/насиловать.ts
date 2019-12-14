import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насиловать: PerfectVerb = {
  name: Word('насиловать', 3),
  singular1stPerson: Word('насилую', 3),
  singular2ndPerson: Word('насилуешь', 3),
  singular3rdPerson: Word('насилует', 3),
  plural1stPerson: Word('насилуем', 3),
  plural2ndPerson: Word('насилуете', 3),
  plural3rdPerson: Word('насилуют', 3),
  masculinePast: Word('насиловал', 3),
  femininePast: Word('насиловала', 3),
  neuterPast: Word('насиловало', 3),
  pluralPast: Word('насиловали', 3),
  imperativeInformal: Word('насилуй', 3),
  imperativeFormal: Word('насилуйте', 3),
  imperfect: ['изнасиловать'],
};

perfectVerbs.set(насиловать.name.text, насиловать);

export { насиловать };