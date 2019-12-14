import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const звонить: PerfectVerb = {
  name: Word('звонить', 4),
  singular1stPerson: Word('звоню', 4),
  singular2ndPerson: Word('звонишь', 4),
  singular3rdPerson: Word('звонит', 4),
  plural1stPerson: Word('звоним', 4),
  plural2ndPerson: Word('звоните', 4),
  plural3rdPerson: Word('звонят', 4),
  masculinePast: Word('звонил', 4),
  femininePast: Word('звонила', 4),
  neuterPast: Word('звонило', 4),
  pluralPast: Word('звонили', 4),
  imperativeInformal: Word('звони', 4),
  imperativeFormal: Word('звоните', 4),
  imperfect: ['позвонить'],
};

perfectVerbs.set(звонить.name.text, звонить);

export { звонить };