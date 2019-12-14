import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убегать: PerfectVerb = {
  name: Word('убегать', 4),
  singular1stPerson: Word('убегаю', 4),
  singular2ndPerson: Word('убегаешь', 4),
  singular3rdPerson: Word('убегает', 4),
  plural1stPerson: Word('убегаем', 4),
  plural2ndPerson: Word('убегаете', 4),
  plural3rdPerson: Word('убегают', 4),
  masculinePast: Word('убегал', 4),
  femininePast: Word('убегала', 4),
  neuterPast: Word('убегало', 4),
  pluralPast: Word('убегали', 4),
  imperativeInformal: Word('убегай', 4),
  imperativeFormal: Word('убегайте', 4),
  imperfect: ['убежать'],
};

perfectVerbs.set(убегать.name.text, убегать);

export { убегать };