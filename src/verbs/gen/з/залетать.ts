import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залетать: PerfectVerb = {
  name: Word('залетать', 5),
  singular1stPerson: Word('залетаю', 5),
  singular2ndPerson: Word('залетаешь', 5),
  singular3rdPerson: Word('залетает', 5),
  plural1stPerson: Word('залетаем', 5),
  plural2ndPerson: Word('залетаете', 5),
  plural3rdPerson: Word('залетают', 5),
  masculinePast: Word('залетал', 5),
  femininePast: Word('залетала', 5),
  neuterPast: Word('залетало', 5),
  pluralPast: Word('залетали', 5),
  imperativeInformal: Word('залетай', 5),
  imperativeFormal: Word('залетайте', 5),
  imperfect: [],
};

perfectVerbs.set(залетать.name.text, залетать);

export { залетать };