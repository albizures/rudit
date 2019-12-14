import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сосуществовать: PerfectVerb = {
  name: Word('сосуществовать', 11),
  singular1stPerson: Word('сосуществую', 9),
  singular2ndPerson: Word('сосуществуешь', 9),
  singular3rdPerson: Word('сосуществует', 9),
  plural1stPerson: Word('сосуществуем', 9),
  plural2ndPerson: Word('сосуществуете', 9),
  plural3rdPerson: Word('сосуществуют', 9),
  masculinePast: Word('сосуществовал', 11),
  femininePast: Word('сосуществовала', 11),
  neuterPast: Word('сосуществовало', 11),
  pluralPast: Word('сосуществовали', 11),
  imperativeInformal: Word('сосуществуй', 9),
  imperativeFormal: Word('сосуществуйте', 9),
  imperfect: [],
};

perfectVerbs.set(сосуществовать.name.text, сосуществовать);

export { сосуществовать };