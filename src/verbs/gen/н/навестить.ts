import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навестить: PerfectVerb = {
  name: Word('навестить', 6),
  singular1stPerson: Word('навещу', 5),
  singular2ndPerson: Word('навестишь', 6),
  singular3rdPerson: Word('навестит', 6),
  plural1stPerson: Word('навестим', 6),
  plural2ndPerson: Word('навестите', 6),
  plural3rdPerson: Word('навестят', 6),
  masculinePast: Word('навестил', 6),
  femininePast: Word('навестила', 6),
  neuterPast: Word('навестило', 6),
  pluralPast: Word('навестили', 6),
  imperativeInformal: Word('навести', 6),
  imperativeFormal: Word('навестите', 6),
  imperfect: [],
};

perfectVerbs.set(навестить.name.text, навестить);

export { навестить };