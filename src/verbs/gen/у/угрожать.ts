import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угрожать: PerfectVerb = {
  name: Word('угрожать', 5),
  singular1stPerson: Word('угрожаю', 5),
  singular2ndPerson: Word('угрожаешь', 5),
  singular3rdPerson: Word('угрожает', 5),
  plural1stPerson: Word('угрожаем', 5),
  plural2ndPerson: Word('угрожаете', 5),
  plural3rdPerson: Word('угрожают', 5),
  masculinePast: Word('угрожал', 5),
  femininePast: Word('угрожала', 5),
  neuterPast: Word('угрожало', 5),
  pluralPast: Word('угрожали', 5),
  imperativeInformal: Word('угрожай', 5),
  imperativeFormal: Word('угрожайте', 5),
  imperfect: [],
};

perfectVerbs.set(угрожать.name.text, угрожать);

export { угрожать };