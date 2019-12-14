import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уклонить: PerfectVerb = {
  name: Word('уклонить', 5),
  singular1stPerson: Word('уклоню', 5),
  singular2ndPerson: Word('уклонишь', 3),
  singular3rdPerson: Word('уклонит', 3),
  plural1stPerson: Word('уклоним', 3),
  plural2ndPerson: Word('уклоните', 3),
  plural3rdPerson: Word('уклонят', 3),
  masculinePast: Word('уклонил', 5),
  femininePast: Word('уклонила', 5),
  neuterPast: Word('уклонило', 5),
  pluralPast: Word('уклонили', 5),
  imperativeInformal: Word('уклони', 5),
  imperativeFormal: Word('уклоните', 5),
  imperfect: [],
};

perfectVerbs.set(уклонить.name.text, уклонить);

export { уклонить };