import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залегать: PerfectVerb = {
  name: Word('залегать', 5),
  singular1stPerson: Word('залегаю', 5),
  singular2ndPerson: Word('залегаешь', 5),
  singular3rdPerson: Word('залегает', 5),
  plural1stPerson: Word('залегаем', 5),
  plural2ndPerson: Word('залегаете', 5),
  plural3rdPerson: Word('залегают', 5),
  masculinePast: Word('залегал', 5),
  femininePast: Word('залегала', 5),
  neuterPast: Word('залегало', 5),
  pluralPast: Word('залегали', 5),
  imperativeInformal: Word('залегай', 5),
  imperativeFormal: Word('залегайте', 5),
  imperfect: [],
};

perfectVerbs.set(залегать.name.text, залегать);

export { залегать };