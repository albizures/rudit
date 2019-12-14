import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помиловать: PerfectVerb = {
  name: Word('помиловать', 3),
  singular1stPerson: Word('помилую', 3),
  singular2ndPerson: Word('помилуешь', 3),
  singular3rdPerson: Word('помилует', 3),
  plural1stPerson: Word('помилуем', 3),
  plural2ndPerson: Word('помилуете', 3),
  plural3rdPerson: Word('помилуют', 3),
  masculinePast: Word('помиловал', 3),
  femininePast: Word('помиловала', 3),
  neuterPast: Word('помиловало', 3),
  pluralPast: Word('помиловали', 3),
  imperativeInformal: Word('помилуй', 3),
  imperativeFormal: Word('помилуйте', 3),
  imperfect: [],
};

perfectVerbs.set(помиловать.name.text, помиловать);

export { помиловать };