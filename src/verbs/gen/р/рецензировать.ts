import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рецензировать: PerfectVerb = {
  name: Word('рецензировать', 6),
  singular1stPerson: Word('рецензирую', 6),
  singular2ndPerson: Word('рецензируешь', 6),
  singular3rdPerson: Word('рецензирует', 6),
  plural1stPerson: Word('рецензируем', 6),
  plural2ndPerson: Word('рецензируете', 6),
  plural3rdPerson: Word('рецензируют', 6),
  masculinePast: Word('рецензировал', 6),
  femininePast: Word('рецензировала', 6),
  neuterPast: Word('рецензировало', 6),
  pluralPast: Word('рецензировали', 6),
  imperativeInformal: Word('рецензируй', 6),
  imperativeFormal: Word('рецензируйте', 6),
  imperfect: [],
};

perfectVerbs.set(рецензировать.name.text, рецензировать);

export { рецензировать };