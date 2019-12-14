import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const злобствовать: PerfectVerb = {
  name: Word('злобствовать', 2),
  singular1stPerson: Word('злобствую', 2),
  singular2ndPerson: Word('злобствуешь', 2),
  singular3rdPerson: Word('злобствует', 2),
  plural1stPerson: Word('злобствуем', 2),
  plural2ndPerson: Word('злобствуете', 2),
  plural3rdPerson: Word('злобствуют', 2),
  masculinePast: Word('злобствовал', 2),
  femininePast: Word('злобствовала', 2),
  neuterPast: Word('злобствовало', 2),
  pluralPast: Word('злобствовали', 2),
  imperativeInformal: Word('злобствуй', 2),
  imperativeFormal: Word('злобствуйте', 2),
  imperfect: [],
};

perfectVerbs.set(злобствовать.name.text, злобствовать);

export { злобствовать };