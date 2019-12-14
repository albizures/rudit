import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дискутировать: PerfectVerb = {
  name: Word('дискутировать', 6),
  singular1stPerson: Word('дискутирую', 6),
  singular2ndPerson: Word('дискутируешь', 6),
  singular3rdPerson: Word('дискутирует', 6),
  plural1stPerson: Word('дискутируем', 6),
  plural2ndPerson: Word('дискутируете', 6),
  plural3rdPerson: Word('дискутируют', 6),
  masculinePast: Word('дискутировал', 6),
  femininePast: Word('дискутировала', 6),
  neuterPast: Word('дискутировало', 6),
  pluralPast: Word('дискутировали', 6),
  imperativeInformal: Word('дискутируй', 6),
  imperativeFormal: Word('дискутируйте', 6),
  imperfect: [],
};

perfectVerbs.set(дискутировать.name.text, дискутировать);

export { дискутировать };