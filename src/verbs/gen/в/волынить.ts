import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const волынить: PerfectVerb = {
  name: Word('волынить', 3),
  singular1stPerson: Word('волыню', 3),
  singular2ndPerson: Word('волынишь', 3),
  singular3rdPerson: Word('волынит', 3),
  plural1stPerson: Word('волыним', 3),
  plural2ndPerson: Word('волыните', 3),
  plural3rdPerson: Word('волынят', 3),
  masculinePast: Word('волынил', 3),
  femininePast: Word('волынила', 3),
  neuterPast: Word('волынило', 3),
  pluralPast: Word('волынили', 3),
  imperativeInformal: Word('волынь', 3),
  imperativeFormal: Word('волыньте', 3),
  imperfect: [],
};

perfectVerbs.set(волынить.name.text, волынить);

export { волынить };