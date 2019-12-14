import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const барабанить: PerfectVerb = {
  name: Word('барабанить', 5),
  singular1stPerson: Word('барабаню', 5),
  singular2ndPerson: Word('барабанишь', 5),
  singular3rdPerson: Word('барабанит', 5),
  plural1stPerson: Word('барабаним', 5),
  plural2ndPerson: Word('барабаните', 5),
  plural3rdPerson: Word('барабанят', 5),
  masculinePast: Word('барабанил', 5),
  femininePast: Word('барабанила', 5),
  neuterPast: Word('барабанило', 5),
  pluralPast: Word('барабанили', 5),
  imperativeInformal: Word('барабань', 5),
  imperativeFormal: Word('барабаньте', 5),
  imperfect: [],
};

perfectVerbs.set(барабанить.name.text, барабанить);

export { барабанить };