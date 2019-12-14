import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жаловать: PerfectVerb = {
  name: Word('жаловать', 1),
  singular1stPerson: Word('жалую', 1),
  singular2ndPerson: Word('жалуешь', 1),
  singular3rdPerson: Word('жалует', 1),
  plural1stPerson: Word('жалуем', 1),
  plural2ndPerson: Word('жалуете', 1),
  plural3rdPerson: Word('жалуют', 1),
  masculinePast: Word('жаловал', 1),
  femininePast: Word('жаловала', 1),
  neuterPast: Word('жаловало', 1),
  pluralPast: Word('жаловали', 1),
  imperativeInformal: Word('жалуй', 1),
  imperativeFormal: Word('жалуйте', 1),
  imperfect: ['пожаловать'],
};

perfectVerbs.set(жаловать.name.text, жаловать);

export { жаловать };