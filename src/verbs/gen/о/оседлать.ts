import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оседлать: PerfectVerb = {
  name: Word('оседлать', 5),
  singular1stPerson: Word('оседлаю', 5),
  singular2ndPerson: Word('оседлаешь', 5),
  singular3rdPerson: Word('оседлает', 5),
  plural1stPerson: Word('оседлаем', 5),
  plural2ndPerson: Word('оседлаете', 5),
  plural3rdPerson: Word('оседлают', 5),
  masculinePast: Word('оседлал', 5),
  femininePast: Word('оседлала', 5),
  neuterPast: Word('оседлало', 5),
  pluralPast: Word('оседлали', 5),
  imperativeInformal: Word('оседлай', 5),
  imperativeFormal: Word('оседлайте', 5),
  imperfect: ['седлать'],
};

perfectVerbs.set(оседлать.name.text, оседлать);

export { оседлать };