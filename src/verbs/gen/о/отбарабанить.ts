import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбарабанить: PerfectVerb = {
  name: Word('отбарабанить', 7),
  singular1stPerson: Word('отбарабаню', 7),
  singular2ndPerson: Word('отбарабанишь', 7),
  singular3rdPerson: Word('отбарабанит', 7),
  plural1stPerson: Word('отбарабаним', 7),
  plural2ndPerson: Word('отбарабаните', 7),
  plural3rdPerson: Word('отбарабанят', 7),
  masculinePast: Word('отбарабанил', 7),
  femininePast: Word('отбарабанила', 7),
  neuterPast: Word('отбарабанило', 7),
  pluralPast: Word('отбарабанили', 7),
  imperativeInformal: Word('отбарабань', 7),
  imperativeFormal: Word('отбарабаньте', 7),
  imperfect: [],
};

perfectVerbs.set(отбарабанить.name.text, отбарабанить);

export { отбарабанить };