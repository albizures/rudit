import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const штамповать: PerfectVerb = {
  name: Word('штамповать', 7),
  singular1stPerson: Word('штампую', 5),
  singular2ndPerson: Word('штампуешь', 5),
  singular3rdPerson: Word('штампует', 5),
  plural1stPerson: Word('штампуем', 5),
  plural2ndPerson: Word('штампуете', 5),
  plural3rdPerson: Word('штампуют', 5),
  masculinePast: Word('штамповал', 7),
  femininePast: Word('штамповала', 7),
  neuterPast: Word('штамповало', 7),
  pluralPast: Word('штамповали', 7),
  imperativeInformal: Word('штампуй', 5),
  imperativeFormal: Word('штампуйте', 5),
  imperfect: [],
};

perfectVerbs.set(штамповать.name.text, штамповать);

export { штамповать };