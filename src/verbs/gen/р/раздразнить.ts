import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздразнить: PerfectVerb = {
  name: Word('раздразнить', 8),
  singular1stPerson: Word('раздразню', 8),
  singular2ndPerson: Word('раздразнишь', 5),
  singular3rdPerson: Word('раздразнит', 5),
  plural1stPerson: Word('раздразним', 5),
  plural2ndPerson: Word('раздразните', 5),
  plural3rdPerson: Word('раздразнят', 5),
  masculinePast: Word('раздразнил', 8),
  femininePast: Word('раздразнила', 8),
  neuterPast: Word('раздразнило', 8),
  pluralPast: Word('раздразнили', 8),
  imperativeInformal: Word('раздразни', 8),
  imperativeFormal: Word('раздразните', 8),
  imperfect: [],
};

perfectVerbs.set(раздразнить.name.text, раздразнить);

export { раздразнить };