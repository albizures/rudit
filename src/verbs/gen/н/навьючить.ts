import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навьючить: PerfectVerb = {
  name: Word('навьючить', 4),
  singular1stPerson: Word('навьючу', 4),
  singular2ndPerson: Word('навьючишь', 4),
  singular3rdPerson: Word('навьючит', 4),
  plural1stPerson: Word('навьючим', 4),
  plural2ndPerson: Word('навьючите', 4),
  plural3rdPerson: Word('навьючат', 4),
  masculinePast: Word('навьючил', 4),
  femininePast: Word('навьючила', 4),
  neuterPast: Word('навьючило', 4),
  pluralPast: Word('навьючили', 4),
  imperativeInformal: Word('навьючь', 4),
  imperativeFormal: Word('навьючьте', 4),
  imperfect: [],
};

perfectVerbs.set(навьючить.name.text, навьючить);

export { навьючить };