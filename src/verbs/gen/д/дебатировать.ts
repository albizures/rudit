import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дебатировать: PerfectVerb = {
  name: Word('дебатировать', 5),
  singular1stPerson: Word('дебатирую', 5),
  singular2ndPerson: Word('дебатируешь', 5),
  singular3rdPerson: Word('дебатирует', 5),
  plural1stPerson: Word('дебатируем', 5),
  plural2ndPerson: Word('дебатируете', 5),
  plural3rdPerson: Word('дебатируют', 5),
  masculinePast: Word('дебатировал', 5),
  femininePast: Word('дебатировала', 5),
  neuterPast: Word('дебатировало', 5),
  pluralPast: Word('дебатировали', 5),
  imperativeInformal: Word('дебатируй', 5),
  imperativeFormal: Word('дебатируйте', 5),
  imperfect: [],
};

perfectVerbs.set(дебатировать.name.text, дебатировать);

export { дебатировать };