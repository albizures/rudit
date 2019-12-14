import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оказать: PerfectVerb = {
  name: Word('оказать', 4),
  singular1stPerson: Word('оказаю', 4),
  singular2ndPerson: Word('оказаешь', 4),
  singular3rdPerson: Word('оказает', 4),
  plural1stPerson: Word('оказаем', 4),
  plural2ndPerson: Word('оказаете', 4),
  plural3rdPerson: Word('оказают', 4),
  masculinePast: Word('оказал', 4),
  femininePast: Word('оказала', 4),
  neuterPast: Word('оказало', 4),
  pluralPast: Word('оказали', 4),
  imperativeInformal: Word('оказай', 4),
  imperativeFormal: Word('оказайте', 4),
  imperfect: ['оказывать'],
};

perfectVerbs.set(оказать.name.text, оказать);

export { оказать };