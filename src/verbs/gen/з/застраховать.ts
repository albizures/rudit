import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застраховать: PerfectVerb = {
  name: Word('застраховать', 9),
  singular1stPerson: Word('застрахую', 7),
  singular2ndPerson: Word('застрахуешь', 7),
  singular3rdPerson: Word('застрахует', 7),
  plural1stPerson: Word('застрахуем', 7),
  plural2ndPerson: Word('застрахуете', 7),
  plural3rdPerson: Word('застрахуют', 7),
  masculinePast: Word('застраховал', 9),
  femininePast: Word('застраховала', 9),
  neuterPast: Word('застраховало', 9),
  pluralPast: Word('застраховали', 9),
  imperativeInformal: Word('застрахуй', 7),
  imperativeFormal: Word('застрахуйте', 7),
  imperfect: [],
};

perfectVerbs.set(застраховать.name.text, застраховать);

export { застраховать };