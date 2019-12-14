import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дирижировать: PerfectVerb = {
  name: Word('дирижировать', 5),
  singular1stPerson: Word('дирижирую', 5),
  singular2ndPerson: Word('дирижируешь', 5),
  singular3rdPerson: Word('дирижирует', 5),
  plural1stPerson: Word('дирижируем', 5),
  plural2ndPerson: Word('дирижируете', 5),
  plural3rdPerson: Word('дирижируют', 5),
  masculinePast: Word('дирижировал', 5),
  femininePast: Word('дирижировала', 5),
  neuterPast: Word('дирижировало', 5),
  pluralPast: Word('дирижировали', 5),
  imperativeInformal: Word('дирижируй', 5),
  imperativeFormal: Word('дирижируйте', 5),
  imperfect: [],
};

perfectVerbs.set(дирижировать.name.text, дирижировать);

export { дирижировать };