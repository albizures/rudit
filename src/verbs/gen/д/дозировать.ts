import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дозировать: PerfectVerb = {
  name: Word('дозировать', 3),
  singular1stPerson: Word('дозирую', 3),
  singular2ndPerson: Word('дозируешь', 3),
  singular3rdPerson: Word('дозирует', 3),
  plural1stPerson: Word('дозируем', 3),
  plural2ndPerson: Word('дозируете', 3),
  plural3rdPerson: Word('дозируют', 3),
  masculinePast: Word('дозировал', 3),
  femininePast: Word('дозировала', 3),
  neuterPast: Word('дозировало', 3),
  pluralPast: Word('дозировали', 3),
  imperativeInformal: Word('дозируй', 3),
  imperativeFormal: Word('дозируйте', 3),
  imperfect: [],
};

perfectVerbs.set(дозировать.name.text, дозировать);

export { дозировать };