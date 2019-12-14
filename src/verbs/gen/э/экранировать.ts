import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const экранировать: PerfectVerb = {
  name: Word('экранировать', 5),
  singular1stPerson: Word('экранирую', 5),
  singular2ndPerson: Word('экранируешь', 5),
  singular3rdPerson: Word('экранирует', 5),
  plural1stPerson: Word('экранируем', 5),
  plural2ndPerson: Word('экранируете', 5),
  plural3rdPerson: Word('экранируют', 5),
  masculinePast: Word('экранировал', 5),
  femininePast: Word('экранировала', 5),
  neuterPast: Word('экранировало', 5),
  pluralPast: Word('экранировали', 5),
  imperativeInformal: Word('экранируй', 5),
  imperativeFormal: Word('экранируйте', 5),
  imperfect: [],
};

perfectVerbs.set(экранировать.name.text, экранировать);

export { экранировать };