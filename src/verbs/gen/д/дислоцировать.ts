import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дислоцировать: PerfectVerb = {
  name: Word('дислоцировать', 6),
  singular1stPerson: Word('дислоцирую', 6),
  singular2ndPerson: Word('дислоцируешь', 6),
  singular3rdPerson: Word('дислоцирует', 6),
  plural1stPerson: Word('дислоцируем', 6),
  plural2ndPerson: Word('дислоцируете', 6),
  plural3rdPerson: Word('дислоцируют', 6),
  masculinePast: Word('дислоцировал', 6),
  femininePast: Word('дислоцировала', 6),
  neuterPast: Word('дислоцировало', 6),
  pluralPast: Word('дислоцировали', 6),
  imperativeInformal: Word('дислоцируй', 6),
  imperativeFormal: Word('дислоцируйте', 6),
  imperfect: [],
};

perfectVerbs.set(дислоцировать.name.text, дислоцировать);

export { дислоцировать };