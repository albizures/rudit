import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const котировать: PerfectVerb = {
  name: Word('котировать', 3),
  singular1stPerson: Word('котирую', 3),
  singular2ndPerson: Word('котируешь', 3),
  singular3rdPerson: Word('котирует', 3),
  plural1stPerson: Word('котируем', 3),
  plural2ndPerson: Word('котируете', 3),
  plural3rdPerson: Word('котируют', 3),
  masculinePast: Word('котировал', 3),
  femininePast: Word('котировала', 3),
  neuterPast: Word('котировало', 3),
  pluralPast: Word('котировали', 3),
  imperativeInformal: Word('котируй', 3),
  imperativeFormal: Word('котируйте', 3),
  imperfect: [],
};

perfectVerbs.set(котировать.name.text, котировать);

export { котировать };