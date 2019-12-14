import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дегустировать: PerfectVerb = {
  name: Word('дегустировать', 6),
  singular1stPerson: Word('дегустирую', 6),
  singular2ndPerson: Word('дегустируешь', 6),
  singular3rdPerson: Word('дегустирует', 6),
  plural1stPerson: Word('дегустируем', 6),
  plural2ndPerson: Word('дегустируете', 6),
  plural3rdPerson: Word('дегустируют', 6),
  masculinePast: Word('дегустировал', 6),
  femininePast: Word('дегустировала', 6),
  neuterPast: Word('дегустировало', 6),
  pluralPast: Word('дегустировали', 6),
  imperativeInformal: Word('дегустируй', 6),
  imperativeFormal: Word('дегустируйте', 6),
  imperfect: [],
};

perfectVerbs.set(дегустировать.name.text, дегустировать);

export { дегустировать };