import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сочетать: PerfectVerb = {
  name: Word('сочетать', 5),
  singular1stPerson: Word('сочетаю', 5),
  singular2ndPerson: Word('сочетаешь', 5),
  singular3rdPerson: Word('сочетает', 5),
  plural1stPerson: Word('сочетаем', 5),
  plural2ndPerson: Word('сочетаете', 5),
  plural3rdPerson: Word('сочетают', 5),
  masculinePast: Word('сочетал', 5),
  femininePast: Word('сочетала', 5),
  neuterPast: Word('сочетало', 5),
  pluralPast: Word('сочетали', 5),
  imperativeInformal: Word('сочетай', 5),
  imperativeFormal: Word('сочетайте', 5),
  imperfect: [],
};

perfectVerbs.set(сочетать.name.text, сочетать);

export { сочетать };