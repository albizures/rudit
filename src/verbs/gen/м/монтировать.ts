import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const монтировать: PerfectVerb = {
  name: Word('монтировать', 4),
  singular1stPerson: Word('монтирую', 4),
  singular2ndPerson: Word('монтируешь', 4),
  singular3rdPerson: Word('монтирует', 4),
  plural1stPerson: Word('монтируем', 4),
  plural2ndPerson: Word('монтируете', 4),
  plural3rdPerson: Word('монтируют', 4),
  masculinePast: Word('монтировал', 4),
  femininePast: Word('монтировала', 4),
  neuterPast: Word('монтировало', 4),
  pluralPast: Word('монтировали', 4),
  imperativeInformal: Word('монтируй', 4),
  imperativeFormal: Word('монтируйте', 4),
  imperfect: ['смонтировать'],
};

perfectVerbs.set(монтировать.name.text, монтировать);

export { монтировать };