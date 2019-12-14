import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закоптить: PerfectVerb = {
  name: Word('закоптить', 6),
  singular1stPerson: Word('закопчу', 6),
  singular2ndPerson: Word('закоптишь', 6),
  singular3rdPerson: Word('закоптит', 6),
  plural1stPerson: Word('закоптим', 6),
  plural2ndPerson: Word('закоптите', 6),
  plural3rdPerson: Word('закоптят', 6),
  masculinePast: Word('закоптил', 6),
  femininePast: Word('закоптила', 6),
  neuterPast: Word('закоптило', 6),
  pluralPast: Word('закоптили', 6),
  imperativeInformal: Word('закопти', 6),
  imperativeFormal: Word('закоптите', 6),
  imperfect: [],
};

perfectVerbs.set(закоптить.name.text, закоптить);

export { закоптить };