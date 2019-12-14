import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const склонить: PerfectVerb = {
  name: Word('склонить', 5),
  singular1stPerson: Word('склоню', 5),
  singular2ndPerson: Word('склонишь', 3),
  singular3rdPerson: Word('склонит', 3),
  plural1stPerson: Word('склоним', 3),
  plural2ndPerson: Word('склоните', 3),
  plural3rdPerson: Word('склонят', 3),
  masculinePast: Word('склонил', 5),
  femininePast: Word('склонила', 5),
  neuterPast: Word('склонило', 5),
  pluralPast: Word('склонили', 5),
  imperativeInformal: Word('склони', 5),
  imperativeFormal: Word('склоните', 5),
  imperfect: ['склонять'],
};

perfectVerbs.set(склонить.name.text, склонить);

export { склонить };