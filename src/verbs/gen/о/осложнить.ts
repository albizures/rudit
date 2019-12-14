import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осложнить: PerfectVerb = {
  name: Word('осложнить', 6),
  singular1stPerson: Word('осложню', 6),
  singular2ndPerson: Word('осложнишь', 6),
  singular3rdPerson: Word('осложнит', 6),
  plural1stPerson: Word('осложним', 6),
  plural2ndPerson: Word('осложните', 6),
  plural3rdPerson: Word('осложнят', 6),
  masculinePast: Word('осложнил', 6),
  femininePast: Word('осложнила', 6),
  neuterPast: Word('осложнило', 6),
  pluralPast: Word('осложнили', 6),
  imperativeInformal: Word('осложни', 6),
  imperativeFormal: Word('осложните', 6),
  imperfect: [],
};

perfectVerbs.set(осложнить.name.text, осложнить);

export { осложнить };