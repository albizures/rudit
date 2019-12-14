import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отклонить: PerfectVerb = {
  name: Word('отклонить', 6),
  singular1stPerson: Word('отклоню', 6),
  singular2ndPerson: Word('отклонишь', 4),
  singular3rdPerson: Word('отклонит', 4),
  plural1stPerson: Word('отклоним', 4),
  plural2ndPerson: Word('отклоните', 4),
  plural3rdPerson: Word('отклонят', 4),
  masculinePast: Word('отклонил', 6),
  femininePast: Word('отклонила', 6),
  neuterPast: Word('отклонило', 6),
  pluralPast: Word('отклонили', 6),
  imperativeInformal: Word('отклони', 6),
  imperativeFormal: Word('отклоните', 6),
  imperfect: [],
};

perfectVerbs.set(отклонить.name.text, отклонить);

export { отклонить };