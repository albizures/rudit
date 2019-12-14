import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интонировать: PerfectVerb = {
  name: Word('интонировать', 5),
  singular1stPerson: Word('интонирую', 5),
  singular2ndPerson: Word('интонируешь', 5),
  singular3rdPerson: Word('интонирует', 5),
  plural1stPerson: Word('интонируем', 5),
  plural2ndPerson: Word('интонируете', 5),
  plural3rdPerson: Word('интонируют', 5),
  masculinePast: Word('интонировал', 5),
  femininePast: Word('интонировала', 5),
  neuterPast: Word('интонировало', 5),
  pluralPast: Word('интонировали', 5),
  imperativeInformal: Word('интонируй', 5),
  imperativeFormal: Word('интонируйте', 5),
  imperfect: [],
};

perfectVerbs.set(интонировать.name.text, интонировать);

export { интонировать };