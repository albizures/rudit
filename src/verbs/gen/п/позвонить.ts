import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позвонить: PerfectVerb = {
  name: Word('позвонить', 6),
  singular1stPerson: Word('позвоню', 6),
  singular2ndPerson: Word('позвонишь', 6),
  singular3rdPerson: Word('позвонит', 6),
  plural1stPerson: Word('позвоним', 6),
  plural2ndPerson: Word('позвоните', 6),
  plural3rdPerson: Word('позвонят', 6),
  masculinePast: Word('позвонил', 6),
  femininePast: Word('позвонила', 6),
  neuterPast: Word('позвонило', 6),
  pluralPast: Word('позвонили', 6),
  imperativeInformal: Word('позвони', 6),
  imperativeFormal: Word('позвоните', 6),
  imperfect: ['звонить'],
};

perfectVerbs.set(позвонить.name.text, позвонить);

export { позвонить };