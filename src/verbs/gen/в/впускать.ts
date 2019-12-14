import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впускать: PerfectVerb = {
  name: Word('впускать', 5),
  singular1stPerson: Word('впускаю', 5),
  singular2ndPerson: Word('впускаешь', 5),
  singular3rdPerson: Word('впускает', 5),
  plural1stPerson: Word('впускаем', 5),
  plural2ndPerson: Word('впускаете', 5),
  plural3rdPerson: Word('впускают', 5),
  masculinePast: Word('впускал', 5),
  femininePast: Word('впускала', 5),
  neuterPast: Word('впускало', 5),
  pluralPast: Word('впускали', 5),
  imperativeInformal: Word('впускай', 5),
  imperativeFormal: Word('впускайте', 5),
  imperfect: [],
};

perfectVerbs.set(впускать.name.text, впускать);

export { впускать };