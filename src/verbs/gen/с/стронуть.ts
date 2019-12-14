import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стронуть: PerfectVerb = {
  name: Word('стронуть', 3),
  singular1stPerson: Word('строну', 3),
  singular2ndPerson: Word('стронешь', 3),
  singular3rdPerson: Word('стронет', 3),
  plural1stPerson: Word('стронем', 3),
  plural2ndPerson: Word('стронете', 3),
  plural3rdPerson: Word('стронут', 3),
  masculinePast: Word('стронул', 3),
  femininePast: Word('стронула', 3),
  neuterPast: Word('стронуло', 3),
  pluralPast: Word('стронули', 3),
  imperativeInformal: Word('стронь', 3),
  imperativeFormal: Word('строньте', 3),
  imperfect: [],
};

perfectVerbs.set(стронуть.name.text, стронуть);

export { стронуть };