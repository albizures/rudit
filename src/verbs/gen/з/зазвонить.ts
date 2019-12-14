import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазвонить: PerfectVerb = {
  name: Word('зазвонить', 6),
  singular1stPerson: Word('зазвоню', 6),
  singular2ndPerson: Word('зазвонишь', 6),
  singular3rdPerson: Word('зазвонит', 6),
  plural1stPerson: Word('зазвоним', 6),
  plural2ndPerson: Word('зазвоните', 6),
  plural3rdPerson: Word('зазвонят', 6),
  masculinePast: Word('зазвонил', 6),
  femininePast: Word('зазвонила', 6),
  neuterPast: Word('зазвонило', 6),
  pluralPast: Word('зазвонили', 6),
  imperativeInformal: Word('зазвони', 6),
  imperativeFormal: Word('зазвоните', 6),
  imperfect: [],
};

perfectVerbs.set(зазвонить.name.text, зазвонить);

export { зазвонить };