import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрестить: PerfectVerb = {
  name: Word('скрестить', 6),
  singular1stPerson: Word('скрещу', 5),
  singular2ndPerson: Word('скрестишь', 6),
  singular3rdPerson: Word('скрестит', 6),
  plural1stPerson: Word('скрестим', 6),
  plural2ndPerson: Word('скрестите', 6),
  plural3rdPerson: Word('скрестят', 6),
  masculinePast: Word('скрестил', 6),
  femininePast: Word('скрестила', 6),
  neuterPast: Word('скрестило', 6),
  pluralPast: Word('скрестили', 6),
  imperativeInformal: Word('скрести', 6),
  imperativeFormal: Word('скрестите', 6),
  imperfect: [],
};

perfectVerbs.set(скрестить.name.text, скрестить);

export { скрестить };