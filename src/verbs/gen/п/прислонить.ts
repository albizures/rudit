import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прислонить: PerfectVerb = {
  name: Word('прислонить', 7),
  singular1stPerson: Word('прислоню', 7),
  singular2ndPerson: Word('прислонишь', 5),
  singular3rdPerson: Word('прислонит', 5),
  plural1stPerson: Word('прислоним', 5),
  plural2ndPerson: Word('прислоните', 5),
  plural3rdPerson: Word('прислонят', 5),
  masculinePast: Word('прислонил', 7),
  femininePast: Word('прислонила', 7),
  neuterPast: Word('прислонило', 7),
  pluralPast: Word('прислонили', 7),
  imperativeInformal: Word('прислони', 7),
  imperativeFormal: Word('прислоните', 7),
  imperfect: [],
};

perfectVerbs.set(прислонить.name.text, прислонить);

export { прислонить };