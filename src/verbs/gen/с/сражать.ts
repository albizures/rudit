import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сражать: PerfectVerb = {
  name: Word('сражать', 4),
  singular1stPerson: Word('сражаю', 4),
  singular2ndPerson: Word('сражаешь', 4),
  singular3rdPerson: Word('сражает', 4),
  plural1stPerson: Word('сражаем', 4),
  plural2ndPerson: Word('сражаете', 4),
  plural3rdPerson: Word('сражают', 4),
  masculinePast: Word('сражал', 4),
  femininePast: Word('сражала', 4),
  neuterPast: Word('сражало', 4),
  pluralPast: Word('сражали', 4),
  imperativeInformal: Word('сражай', 4),
  imperativeFormal: Word('сражайте', 4),
  imperfect: [],
};

perfectVerbs.set(сражать.name.text, сражать);

export { сражать };