import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const архивировать: PerfectVerb = {
  name: Word('архивировать', 5),
  singular1stPerson: Word('архивирую', 5),
  singular2ndPerson: Word('архивируешь', 5),
  singular3rdPerson: Word('архивирует', 5),
  plural1stPerson: Word('архивируем', 5),
  plural2ndPerson: Word('архивируете', 5),
  plural3rdPerson: Word('архивируют', 5),
  masculinePast: Word('архивировал', 5),
  femininePast: Word('архивировала', 5),
  neuterPast: Word('архивировало', 5),
  pluralPast: Word('архивировали', 5),
  imperativeInformal: Word('архивируй', 5),
  imperativeFormal: Word('архивируйте', 5),
  imperfect: ['заархивировать'],
};

perfectVerbs.set(архивировать.name.text, архивировать);

export { архивировать };