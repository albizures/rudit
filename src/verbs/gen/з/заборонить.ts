import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заборонить: PerfectVerb = {
  name: Word('заборонить', 7),
  singular1stPerson: Word('забороню', 7),
  singular2ndPerson: Word('заборонишь', 7),
  singular3rdPerson: Word('заборонит', 7),
  plural1stPerson: Word('забороним', 7),
  plural2ndPerson: Word('забороните', 7),
  plural3rdPerson: Word('заборонят', 7),
  masculinePast: Word('заборонил', 7),
  femininePast: Word('заборонила', 7),
  neuterPast: Word('заборонило', 7),
  pluralPast: Word('заборонили', 7),
  imperativeInformal: Word('заборони', 7),
  imperativeFormal: Word('забороните', 7),
  imperfect: [],
};

perfectVerbs.set(заборонить.name.text, заборонить);

export { заборонить };