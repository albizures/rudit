import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совестить: PerfectVerb = {
  name: Word('совестить', 1),
  singular1stPerson: Word('совещу', 1),
  singular2ndPerson: Word('совестишь', 1),
  singular3rdPerson: Word('совестит', 1),
  plural1stPerson: Word('совестим', 1),
  plural2ndPerson: Word('совестите', 1),
  plural3rdPerson: Word('совестят', 1),
  masculinePast: Word('совестил', 1),
  femininePast: Word('совестила', 1),
  neuterPast: Word('совестило', 1),
  pluralPast: Word('совестили', 1),
  imperativeInformal: Word('совести', 1),
  imperativeFormal: Word('совестите', 1),
  imperfect: [],
};

perfectVerbs.set(совестить.name.text, совестить);

export { совестить };