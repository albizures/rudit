import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отцветать: PerfectVerb = {
  name: Word('отцветать', 6),
  singular1stPerson: Word('отцветаю', 6),
  singular2ndPerson: Word('отцветаешь', 6),
  singular3rdPerson: Word('отцветает', 6),
  plural1stPerson: Word('отцветаем', 6),
  plural2ndPerson: Word('отцветаете', 6),
  plural3rdPerson: Word('отцветают', 6),
  masculinePast: Word('отцветал', 6),
  femininePast: Word('отцветала', 6),
  neuterPast: Word('отцветало', 6),
  pluralPast: Word('отцветали', 6),
  imperativeInformal: Word('отцветай', 6),
  imperativeFormal: Word('отцветайте', 6),
  imperfect: [],
};

perfectVerbs.set(отцветать.name.text, отцветать);

export { отцветать };