import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оборонить: PerfectVerb = {
  name: Word('оборонить', 6),
  singular1stPerson: Word('обороню', 6),
  singular2ndPerson: Word('оборонишь', 6),
  singular3rdPerson: Word('оборонит', 6),
  plural1stPerson: Word('обороним', 6),
  plural2ndPerson: Word('обороните', 6),
  plural3rdPerson: Word('оборонят', 6),
  masculinePast: Word('оборонил', 6),
  femininePast: Word('оборонила', 6),
  neuterPast: Word('оборонило', 6),
  pluralPast: Word('оборонили', 6),
  imperativeInformal: Word('оборони', 6),
  imperativeFormal: Word('обороните', 6),
  imperfect: [],
};

perfectVerbs.set(оборонить.name.text, оборонить);

export { оборонить };