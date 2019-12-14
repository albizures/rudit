import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предчувствовать: PerfectVerb = {
  name: Word('предчувствовать', 5),
  singular1stPerson: Word('предчувствую', 5),
  singular2ndPerson: Word('предчувствуешь', 5),
  singular3rdPerson: Word('предчувствует', 5),
  plural1stPerson: Word('предчувствуем', 5),
  plural2ndPerson: Word('предчувствуете', 5),
  plural3rdPerson: Word('предчувствуют', 5),
  masculinePast: Word('предчувствовал', 5),
  femininePast: Word('предчувствовала', 5),
  neuterPast: Word('предчувствовало', 5),
  pluralPast: Word('предчувствовали', 5),
  imperativeInformal: Word('предчувствуй', 5),
  imperativeFormal: Word('предчувствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(предчувствовать.name.text, предчувствовать);

export { предчувствовать };