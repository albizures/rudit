import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понтировать: PerfectVerb = {
  name: Word('понтировать', 4),
  singular1stPerson: Word('понтирую', 4),
  singular2ndPerson: Word('понтируешь', 4),
  singular3rdPerson: Word('понтирует', 4),
  plural1stPerson: Word('понтируем', 4),
  plural2ndPerson: Word('понтируете', 4),
  plural3rdPerson: Word('понтируют', 4),
  masculinePast: Word('понтировал', 4),
  femininePast: Word('понтировала', 4),
  neuterPast: Word('понтировало', 4),
  pluralPast: Word('понтировали', 4),
  imperativeInformal: Word('понтируй', 4),
  imperativeFormal: Word('понтируйте', 4),
  imperfect: [],
};

perfectVerbs.set(понтировать.name.text, понтировать);

export { понтировать };