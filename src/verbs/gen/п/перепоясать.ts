import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепоясать: PerfectVerb = {
  name: Word('перепоясать', 6),
  singular1stPerson: Word('перепояшу', 6),
  singular2ndPerson: Word('перепояшешь', 6),
  singular3rdPerson: Word('перепояшет', 6),
  plural1stPerson: Word('перепояшем', 6),
  plural2ndPerson: Word('перепояшете', 6),
  plural3rdPerson: Word('перепояшут', 6),
  masculinePast: Word('перепоясал', 6),
  femininePast: Word('перепоясала', 6),
  neuterPast: Word('перепоясало', 6),
  pluralPast: Word('перепоясали', 6),
  imperativeInformal: Word('перепояшь', 6),
  imperativeFormal: Word('перепояшьте', 6),
  imperfect: [],
};

perfectVerbs.set(перепоясать.name.text, перепоясать);

export { перепоясать };