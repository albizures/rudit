import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обручать: PerfectVerb = {
  name: Word('обручать', 5),
  singular1stPerson: Word('обручаю', 5),
  singular2ndPerson: Word('обручаешь', 5),
  singular3rdPerson: Word('обручает', 5),
  plural1stPerson: Word('обручаем', 5),
  plural2ndPerson: Word('обручаете', 5),
  plural3rdPerson: Word('обручают', 5),
  masculinePast: Word('обручал', 5),
  femininePast: Word('обручала', 5),
  neuterPast: Word('обручало', 5),
  pluralPast: Word('обручали', 5),
  imperativeInformal: Word('обручай', 5),
  imperativeFormal: Word('обручайте', 5),
  imperfect: [],
};

perfectVerbs.set(обручать.name.text, обручать);

export { обручать };