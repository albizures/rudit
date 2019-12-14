import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкромсать: PerfectVerb = {
  name: Word('обкромсать', 7),
  singular1stPerson: Word('обкромсаю', 7),
  singular2ndPerson: Word('обкромсаешь', 7),
  singular3rdPerson: Word('обкромсает', 7),
  plural1stPerson: Word('обкромсаем', 7),
  plural2ndPerson: Word('обкромсаете', 7),
  plural3rdPerson: Word('обкромсают', 7),
  masculinePast: Word('обкромсал', 7),
  femininePast: Word('обкромсала', 7),
  neuterPast: Word('обкромсало', 7),
  pluralPast: Word('обкромсали', 7),
  imperativeInformal: Word('обкромсай', 7),
  imperativeFormal: Word('обкромсайте', 7),
  imperfect: [],
};

perfectVerbs.set(обкромсать.name.text, обкромсать);

export { обкромсать };