import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дегенерировать: PerfectVerb = {
  name: Word('дегенерировать', 7),
  singular1stPerson: Word('дегенерирую', 7),
  singular2ndPerson: Word('дегенерируешь', 7),
  singular3rdPerson: Word('дегенерирует', 7),
  plural1stPerson: Word('дегенерируем', 7),
  plural2ndPerson: Word('дегенерируете', 7),
  plural3rdPerson: Word('дегенерируют', 7),
  masculinePast: Word('дегенерировал', 7),
  femininePast: Word('дегенерировала', 7),
  neuterPast: Word('дегенерировало', 7),
  pluralPast: Word('дегенерировали', 7),
  imperativeInformal: Word('дегенерируй', 7),
  imperativeFormal: Word('дегенерируйте', 7),
  imperfect: [],
};

perfectVerbs.set(дегенерировать.name.text, дегенерировать);

export { дегенерировать };