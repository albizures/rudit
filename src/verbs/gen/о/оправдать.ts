import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оправдать: PerfectVerb = {
  name: Word('оправдать', 6),
  singular1stPerson: Word('оправдаю', 6),
  singular2ndPerson: Word('оправдаешь', 6),
  singular3rdPerson: Word('оправдает', 6),
  plural1stPerson: Word('оправдаем', 6),
  plural2ndPerson: Word('оправдаете', 6),
  plural3rdPerson: Word('оправдают', 6),
  masculinePast: Word('оправдал', 6),
  femininePast: Word('оправдала', 6),
  neuterPast: Word('оправдало', 6),
  pluralPast: Word('оправдали', 6),
  imperativeInformal: Word('оправдай', 6),
  imperativeFormal: Word('оправдайте', 6),
  imperfect: ['оправдывать'],
};

perfectVerbs.set(оправдать.name.text, оправдать);

export { оправдать };