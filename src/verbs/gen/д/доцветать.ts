import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доцветать: PerfectVerb = {
  name: Word('доцветать', 6),
  singular1stPerson: Word('доцветаю', 6),
  singular2ndPerson: Word('доцветаешь', 6),
  singular3rdPerson: Word('доцветает', 6),
  plural1stPerson: Word('доцветаем', 6),
  plural2ndPerson: Word('доцветаете', 6),
  plural3rdPerson: Word('доцветают', 6),
  masculinePast: Word('доцветал', 6),
  femininePast: Word('доцветала', 6),
  neuterPast: Word('доцветало', 6),
  pluralPast: Word('доцветали', 6),
  imperativeInformal: Word('доцветай', 6),
  imperativeFormal: Word('доцветайте', 6),
  imperfect: [],
};

perfectVerbs.set(доцветать.name.text, доцветать);

export { доцветать };