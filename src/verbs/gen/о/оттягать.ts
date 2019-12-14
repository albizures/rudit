import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттягать: PerfectVerb = {
  name: Word('оттягать', 5),
  singular1stPerson: Word('оттягаю', 5),
  singular2ndPerson: Word('оттягаешь', 5),
  singular3rdPerson: Word('оттягает', 5),
  plural1stPerson: Word('оттягаем', 5),
  plural2ndPerson: Word('оттягаете', 5),
  plural3rdPerson: Word('оттягают', 5),
  masculinePast: Word('оттягал', 5),
  femininePast: Word('оттягала', 5),
  neuterPast: Word('оттягало', 5),
  pluralPast: Word('оттягали', 5),
  imperativeInformal: Word('оттягай', 5),
  imperativeFormal: Word('оттягайте', 5),
  imperfect: [],
};

perfectVerbs.set(оттягать.name.text, оттягать);

export { оттягать };