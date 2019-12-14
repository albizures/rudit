import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угнетать: PerfectVerb = {
  name: Word('угнетать', 5),
  singular1stPerson: Word('угнетаю', 5),
  singular2ndPerson: Word('угнетаешь', 5),
  singular3rdPerson: Word('угнетает', 5),
  plural1stPerson: Word('угнетаем', 5),
  plural2ndPerson: Word('угнетаете', 5),
  plural3rdPerson: Word('угнетают', 5),
  masculinePast: Word('угнетал', 5),
  femininePast: Word('угнетала', 5),
  neuterPast: Word('угнетало', 5),
  pluralPast: Word('угнетали', 5),
  imperativeInformal: Word('угнетай', 5),
  imperativeFormal: Word('угнетайте', 5),
  imperfect: [],
};

perfectVerbs.set(угнетать.name.text, угнетать);

export { угнетать };