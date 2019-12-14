import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дистиллировать: PerfectVerb = {
  name: Word('дистиллировать', 7),
  singular1stPerson: Word('дистиллирую', 7),
  singular2ndPerson: Word('дистиллируешь', 7),
  singular3rdPerson: Word('дистиллирует', 7),
  plural1stPerson: Word('дистиллируем', 7),
  plural2ndPerson: Word('дистиллируете', 7),
  plural3rdPerson: Word('дистиллируют', 7),
  masculinePast: Word('дистиллировал', 7),
  femininePast: Word('дистиллировала', 7),
  neuterPast: Word('дистиллировало', 7),
  pluralPast: Word('дистиллировали', 7),
  imperativeInformal: Word('дистиллируй', 7),
  imperativeFormal: Word('дистиллируйте', 7),
  imperfect: [],
};

perfectVerbs.set(дистиллировать.name.text, дистиллировать);

export { дистиллировать };