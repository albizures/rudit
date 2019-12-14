import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изнасиловать: PerfectVerb = {
  name: Word('изнасиловать', 5),
  singular1stPerson: Word('изнасилую', 5),
  singular2ndPerson: Word('изнасилуешь', 5),
  singular3rdPerson: Word('изнасилует', 5),
  plural1stPerson: Word('изнасилуем', 5),
  plural2ndPerson: Word('изнасилуете', 5),
  plural3rdPerson: Word('изнасилуют', 5),
  masculinePast: Word('изнасиловал', 5),
  femininePast: Word('изнасиловала', 5),
  neuterPast: Word('изнасиловало', 5),
  pluralPast: Word('изнасиловали', 5),
  imperativeInformal: Word('изнасилуй', 5),
  imperativeFormal: Word('изнасилуйте', 5),
  imperfect: ['насиловать'],
};

perfectVerbs.set(изнасиловать.name.text, изнасиловать);

export { изнасиловать };