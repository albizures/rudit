import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дегазировать: PerfectVerb = {
  name: Word('дегазировать', 5),
  singular1stPerson: Word('дегазирую', 5),
  singular2ndPerson: Word('дегазируешь', 5),
  singular3rdPerson: Word('дегазирует', 5),
  plural1stPerson: Word('дегазируем', 5),
  plural2ndPerson: Word('дегазируете', 5),
  plural3rdPerson: Word('дегазируют', 5),
  masculinePast: Word('дегазировал', 5),
  femininePast: Word('дегазировала', 5),
  neuterPast: Word('дегазировало', 5),
  pluralPast: Word('дегазировали', 5),
  imperativeInformal: Word('дегазируй', 5),
  imperativeFormal: Word('дегазируйте', 5),
  imperfect: [],
};

perfectVerbs.set(дегазировать.name.text, дегазировать);

export { дегазировать };