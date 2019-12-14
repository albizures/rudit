import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дисконтировать: PerfectVerb = {
  name: Word('дисконтировать', 7),
  singular1stPerson: Word('дисконтирую', 7),
  singular2ndPerson: Word('дисконтируешь', 7),
  singular3rdPerson: Word('дисконтирует', 7),
  plural1stPerson: Word('дисконтируем', 7),
  plural2ndPerson: Word('дисконтируете', 7),
  plural3rdPerson: Word('дисконтируют', 7),
  masculinePast: Word('дисконтировал', 7),
  femininePast: Word('дисконтировала', 7),
  neuterPast: Word('дисконтировало', 7),
  pluralPast: Word('дисконтировали', 7),
  imperativeInformal: Word('дисконтируй', 7),
  imperativeFormal: Word('дисконтируйте', 7),
  imperfect: [],
};

perfectVerbs.set(дисконтировать.name.text, дисконтировать);

export { дисконтировать };