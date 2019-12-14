import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дренировать: PerfectVerb = {
  name: Word('дренировать', 4),
  singular1stPerson: Word('дренирую', 4),
  singular2ndPerson: Word('дренируешь', 4),
  singular3rdPerson: Word('дренирует', 4),
  plural1stPerson: Word('дренируем', 4),
  plural2ndPerson: Word('дренируете', 4),
  plural3rdPerson: Word('дренируют', 4),
  masculinePast: Word('дренировал', 4),
  femininePast: Word('дренировала', 4),
  neuterPast: Word('дренировало', 4),
  pluralPast: Word('дренировали', 4),
  imperativeInformal: Word('дренируй', 4),
  imperativeFormal: Word('дренируйте', 4),
  imperfect: [],
};

perfectVerbs.set(дренировать.name.text, дренировать);

export { дренировать };