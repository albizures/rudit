import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обегать: PerfectVerb = {
  name: Word('обегать', 4),
  singular1stPerson: Word('обегаю', 4),
  singular2ndPerson: Word('обегаешь', 4),
  singular3rdPerson: Word('обегает', 4),
  plural1stPerson: Word('обегаем', 4),
  plural2ndPerson: Word('обегаете', 4),
  plural3rdPerson: Word('обегают', 4),
  masculinePast: Word('обегал', 4),
  femininePast: Word('обегала', 4),
  neuterPast: Word('обегало', 4),
  pluralPast: Word('обегали', 4),
  imperativeInformal: Word('обегай', 4),
  imperativeFormal: Word('обегайте', 4),
  imperfect: [],
};

perfectVerbs.set(обегать.name.text, обегать);

export { обегать };