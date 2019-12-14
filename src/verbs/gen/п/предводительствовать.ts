import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предводительствовать: PerfectVerb = {
  name: Word('предводительствовать', 7),
  singular1stPerson: Word('предводительствую', 7),
  singular2ndPerson: Word('предводительствуешь', 7),
  singular3rdPerson: Word('предводительствует', 7),
  plural1stPerson: Word('предводительствуем', 7),
  plural2ndPerson: Word('предводительствуете', 7),
  plural3rdPerson: Word('предводительствуют', 7),
  masculinePast: Word('предводительствовал', 7),
  femininePast: Word('предводительствовала', 7),
  neuterPast: Word('предводительствовало', 7),
  pluralPast: Word('предводительствовали', 7),
  imperativeInformal: Word('предводительствуй', 7),
  imperativeFormal: Word('предводительствуйте', 7),
  imperfect: [],
};

perfectVerbs.set(предводительствовать.name.text, предводительствовать);

export { предводительствовать };