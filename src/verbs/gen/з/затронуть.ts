import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затронуть: PerfectVerb = {
  name: Word('затронуть', 4),
  singular1stPerson: Word('затрону', 4),
  singular2ndPerson: Word('затронешь', 4),
  singular3rdPerson: Word('затронет', 4),
  plural1stPerson: Word('затронем', 4),
  plural2ndPerson: Word('затронете', 4),
  plural3rdPerson: Word('затронут', 4),
  masculinePast: Word('затронул', 4),
  femininePast: Word('затронула', 4),
  neuterPast: Word('затронуло', 4),
  pluralPast: Word('затронули', 4),
  imperativeInformal: Word('затронь', 4),
  imperativeFormal: Word('затроньте', 4),
  imperfect: [],
};

perfectVerbs.set(затронуть.name.text, затронуть);

export { затронуть };