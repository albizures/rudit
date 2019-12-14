import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оберегать: PerfectVerb = {
  name: Word('оберегать', 6),
  singular1stPerson: Word('оберегаю', 6),
  singular2ndPerson: Word('оберегаешь', 6),
  singular3rdPerson: Word('оберегает', 6),
  plural1stPerson: Word('оберегаем', 6),
  plural2ndPerson: Word('оберегаете', 6),
  plural3rdPerson: Word('оберегают', 6),
  masculinePast: Word('оберегал', 6),
  femininePast: Word('оберегала', 6),
  neuterPast: Word('оберегало', 6),
  pluralPast: Word('оберегали', 6),
  imperativeInformal: Word('оберегай', 6),
  imperativeFormal: Word('оберегайте', 6),
  imperfect: [],
};

perfectVerbs.set(оберегать.name.text, оберегать);

export { оберегать };