import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забарабанить: PerfectVerb = {
  name: Word('забарабанить', 7),
  singular1stPerson: Word('забарабаню', 7),
  singular2ndPerson: Word('забарабанишь', 7),
  singular3rdPerson: Word('забарабанит', 7),
  plural1stPerson: Word('забарабаним', 7),
  plural2ndPerson: Word('забарабаните', 7),
  plural3rdPerson: Word('забарабанят', 7),
  masculinePast: Word('забарабанил', 7),
  femininePast: Word('забарабанила', 7),
  neuterPast: Word('забарабанило', 7),
  pluralPast: Word('забарабанили', 7),
  imperativeInformal: Word('забарабань', 7),
  imperativeFormal: Word('забарабаньте', 7),
  imperfect: [],
};

perfectVerbs.set(забарабанить.name.text, забарабанить);

export { забарабанить };