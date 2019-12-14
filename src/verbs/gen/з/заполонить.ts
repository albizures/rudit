import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заполонить: PerfectVerb = {
  name: Word('заполонить', 7),
  singular1stPerson: Word('заполоню', 7),
  singular2ndPerson: Word('заполонишь', 7),
  singular3rdPerson: Word('заполонит', 7),
  plural1stPerson: Word('заполоним', 7),
  plural2ndPerson: Word('заполоните', 7),
  plural3rdPerson: Word('заполонят', 7),
  masculinePast: Word('заполонил', 7),
  femininePast: Word('заполонила', 7),
  neuterPast: Word('заполонило', 7),
  pluralPast: Word('заполонили', 7),
  imperativeInformal: Word('заполони', 7),
  imperativeFormal: Word('заполоните', 7),
  imperfect: [],
};

perfectVerbs.set(заполонить.name.text, заполонить);

export { заполонить };