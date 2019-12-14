import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клонить: PerfectVerb = {
  name: Word('клонить', 4),
  singular1stPerson: Word('клоню', 4),
  singular2ndPerson: Word('клонишь', 2),
  singular3rdPerson: Word('клонит', 2),
  plural1stPerson: Word('клоним', 2),
  plural2ndPerson: Word('клоните', 2),
  plural3rdPerson: Word('клонят', 2),
  masculinePast: Word('клонил', 4),
  femininePast: Word('клонила', 4),
  neuterPast: Word('клонило', 4),
  pluralPast: Word('клонили', 4),
  imperativeInformal: Word('клони', 4),
  imperativeFormal: Word('клоните', 4),
  imperfect: [],
};

perfectVerbs.set(клонить.name.text, клонить);

export { клонить };