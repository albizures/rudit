import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const научать: PerfectVerb = {
  name: Word('научать', 4),
  singular1stPerson: Word('научаю', 4),
  singular2ndPerson: Word('научаешь', 4),
  singular3rdPerson: Word('научает', 4),
  plural1stPerson: Word('научаем', 4),
  plural2ndPerson: Word('научаете', 4),
  plural3rdPerson: Word('научают', 4),
  masculinePast: Word('научал', 4),
  femininePast: Word('научала', 4),
  neuterPast: Word('научало', 4),
  pluralPast: Word('научали', 4),
  imperativeInformal: Word('научай', 4),
  imperativeFormal: Word('научайте', 4),
  imperfect: [],
};

perfectVerbs.set(научать.name.text, научать);

export { научать };