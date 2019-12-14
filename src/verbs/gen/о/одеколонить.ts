import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одеколонить: PerfectVerb = {
  name: Word('одеколонить', 6),
  singular1stPerson: Word('одеколоню', 6),
  singular2ndPerson: Word('одеколонишь', 6),
  singular3rdPerson: Word('одеколонит', 6),
  plural1stPerson: Word('одеколоним', 6),
  plural2ndPerson: Word('одеколоните', 6),
  plural3rdPerson: Word('одеколонят', 6),
  masculinePast: Word('одеколонил', 6),
  femininePast: Word('одеколонила', 6),
  neuterPast: Word('одеколонило', 6),
  pluralPast: Word('одеколонили', 6),
  imperativeInformal: Word('одеколонь', 6),
  imperativeFormal: Word('одеколоньте', 6),
  imperfect: [],
};

perfectVerbs.set(одеколонить.name.text, одеколонить);

export { одеколонить };