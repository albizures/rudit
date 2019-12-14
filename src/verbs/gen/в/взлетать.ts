import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взлетать: PerfectVerb = {
  name: Word('взлетать', 5),
  singular1stPerson: Word('взлетаю', 5),
  singular2ndPerson: Word('взлетаешь', 5),
  singular3rdPerson: Word('взлетает', 5),
  plural1stPerson: Word('взлетаем', 5),
  plural2ndPerson: Word('взлетаете', 5),
  plural3rdPerson: Word('взлетают', 5),
  masculinePast: Word('взлетал', 5),
  femininePast: Word('взлетала', 5),
  neuterPast: Word('взлетало', 5),
  pluralPast: Word('взлетали', 5),
  imperativeInformal: Word('взлетай', 5),
  imperativeFormal: Word('взлетайте', 5),
  imperfect: ['взлететь'],
};

perfectVerbs.set(взлетать.name.text, взлетать);

export { взлетать };