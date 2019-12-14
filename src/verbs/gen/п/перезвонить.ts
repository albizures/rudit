import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перезвонить: PerfectVerb = {
  name: Word('перезвонить', 8),
  singular1stPerson: Word('перезвоню', 8),
  singular2ndPerson: Word('перезвонишь', 8),
  singular3rdPerson: Word('перезвонит', 8),
  plural1stPerson: Word('перезвоним', 8),
  plural2ndPerson: Word('перезвоните', 8),
  plural3rdPerson: Word('перезвонят', 8),
  masculinePast: Word('перезвонил', 8),
  femininePast: Word('перезвонила', 8),
  neuterPast: Word('перезвонило', 8),
  pluralPast: Word('перезвонили', 8),
  imperativeInformal: Word('перезвони', 8),
  imperativeFormal: Word('перезвоните', 8),
  imperfect: [],
};

perfectVerbs.set(перезвонить.name.text, перезвонить);

export { перезвонить };