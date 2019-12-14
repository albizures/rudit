import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побарабанить: PerfectVerb = {
  name: Word('побарабанить', 7),
  singular1stPerson: Word('побарабаню', 7),
  singular2ndPerson: Word('побарабанишь', 7),
  singular3rdPerson: Word('побарабанит', 7),
  plural1stPerson: Word('побарабаним', 7),
  plural2ndPerson: Word('побарабаните', 7),
  plural3rdPerson: Word('побарабанят', 7),
  masculinePast: Word('побарабанил', 7),
  femininePast: Word('побарабанила', 7),
  neuterPast: Word('побарабанило', 7),
  pluralPast: Word('побарабанили', 7),
  imperativeInformal: Word('побарабань', 7),
  imperativeFormal: Word('побарабаньте', 7),
  imperfect: [],
};

perfectVerbs.set(побарабанить.name.text, побарабанить);

export { побарабанить };