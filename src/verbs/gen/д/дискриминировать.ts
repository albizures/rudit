import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дискриминировать: PerfectVerb = {
  name: Word('дискриминировать', 9),
  singular1stPerson: Word('дискриминирую', 9),
  singular2ndPerson: Word('дискриминируешь', 9),
  singular3rdPerson: Word('дискриминирует', 9),
  plural1stPerson: Word('дискриминируем', 9),
  plural2ndPerson: Word('дискриминируете', 9),
  plural3rdPerson: Word('дискриминируют', 9),
  masculinePast: Word('дискриминировал', 9),
  femininePast: Word('дискриминировала', 9),
  neuterPast: Word('дискриминировало', 9),
  pluralPast: Word('дискриминировали', 9),
  imperativeInformal: Word('дискриминируй', 9),
  imperativeFormal: Word('дискриминируйте', 9),
  imperfect: [],
};

perfectVerbs.set(дискриминировать.name.text, дискриминировать);

export { дискриминировать };