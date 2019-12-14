import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслонить: PerfectVerb = {
  name: Word('заслонить', 6),
  singular1stPerson: Word('заслоню', 6),
  singular2ndPerson: Word('заслонишь', 6),
  singular3rdPerson: Word('заслонит', 6),
  plural1stPerson: Word('заслоним', 6),
  plural2ndPerson: Word('заслоните', 6),
  plural3rdPerson: Word('заслонят', 6),
  masculinePast: Word('заслонил', 6),
  femininePast: Word('заслонила', 6),
  neuterPast: Word('заслонило', 6),
  pluralPast: Word('заслонили', 6),
  imperativeInformal: Word('заслони', 6),
  imperativeFormal: Word('заслоните', 6),
  imperfect: [],
};

perfectVerbs.set(заслонить.name.text, заслонить);

export { заслонить };