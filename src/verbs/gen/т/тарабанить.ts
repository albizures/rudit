import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тарабанить: PerfectVerb = {
  name: Word('тарабанить', 5),
  singular1stPerson: Word('тарабаню', 5),
  singular2ndPerson: Word('тарабанишь', 5),
  singular3rdPerson: Word('тарабанит', 5),
  plural1stPerson: Word('тарабаним', 5),
  plural2ndPerson: Word('тарабаните', 5),
  plural3rdPerson: Word('тарабанят', 5),
  masculinePast: Word('тарабанил', 5),
  femininePast: Word('тарабанила', 5),
  neuterPast: Word('тарабанило', 5),
  pluralPast: Word('тарабанили', 5),
  imperativeInformal: Word('тарабань', 5),
  imperativeFormal: Word('тарабаньте', 5),
  imperfect: [],
};

perfectVerbs.set(тарабанить.name.text, тарабанить);

export { тарабанить };