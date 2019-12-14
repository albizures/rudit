import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const винить: PerfectVerb = {
  name: Word('винить', 3),
  singular1stPerson: Word('виню', 3),
  singular2ndPerson: Word('винишь', 3),
  singular3rdPerson: Word('винит', 3),
  plural1stPerson: Word('виним', 3),
  plural2ndPerson: Word('вините', 3),
  plural3rdPerson: Word('винят', 3),
  masculinePast: Word('винил', 3),
  femininePast: Word('винила', 3),
  neuterPast: Word('винило', 3),
  pluralPast: Word('винили', 3),
  imperativeInformal: Word('вини', 3),
  imperativeFormal: Word('вините', 3),
  imperfect: [],
};

perfectVerbs.set(винить.name.text, винить);

export { винить };