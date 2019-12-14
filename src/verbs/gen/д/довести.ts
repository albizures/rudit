import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довести: PerfectVerb = {
  name: Word('довести', 6),
  singular1stPerson: Word('доведу', 5),
  singular2ndPerson: Word('доведёшь', 5),
  singular3rdPerson: Word('доведёт', 5),
  plural1stPerson: Word('доведём', 5),
  plural2ndPerson: Word('доведёте', 5),
  plural3rdPerson: Word('доведут', 5),
  masculinePast: Word('довёл', 3),
  femininePast: Word('довела', 5),
  neuterPast: Word('довело', 5),
  pluralPast: Word('довели', 5),
  imperativeInformal: Word('доведи', 5),
  imperativeFormal: Word('доведите', 5),
  imperfect: ['доводить'],
};

perfectVerbs.set(довести.name.text, довести);

export { довести };