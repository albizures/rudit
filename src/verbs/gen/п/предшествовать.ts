import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предшествовать: PerfectVerb = {
  name: Word('предшествовать', 5),
  singular1stPerson: Word('предшествую', 5),
  singular2ndPerson: Word('предшествуешь', 5),
  singular3rdPerson: Word('предшествует', 5),
  plural1stPerson: Word('предшествуем', 5),
  plural2ndPerson: Word('предшествуете', 5),
  plural3rdPerson: Word('предшествуют', 5),
  masculinePast: Word('предшествовал', 5),
  femininePast: Word('предшествовала', 5),
  neuterPast: Word('предшествовало', 5),
  pluralPast: Word('предшествовали', 5),
  imperativeInformal: Word('предшествуй', 5),
  imperativeFormal: Word('предшествуйте', 5),
  imperfect: [],
};

perfectVerbs.set(предшествовать.name.text, предшествовать);

export { предшествовать };