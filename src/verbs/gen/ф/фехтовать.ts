import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const фехтовать: PerfectVerb = {
  name: Word('фехтовать', 6),
  singular1stPerson: Word('фехтую', 4),
  singular2ndPerson: Word('фехтуешь', 4),
  singular3rdPerson: Word('фехтует', 4),
  plural1stPerson: Word('фехтуем', 4),
  plural2ndPerson: Word('фехтуете', 4),
  plural3rdPerson: Word('фехтуют', 4),
  masculinePast: Word('фехтовал', 6),
  femininePast: Word('фехтовала', 6),
  neuterPast: Word('фехтовало', 6),
  pluralPast: Word('фехтовали', 6),
  imperativeInformal: Word('фехтуй', 4),
  imperativeFormal: Word('фехтуйте', 4),
  imperfect: [],
};

perfectVerbs.set(фехтовать.name.text, фехтовать);

export { фехтовать };