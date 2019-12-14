import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мерсеризовать: PerfectVerb = {
  name: Word('мерсеризовать', 10),
  singular1stPerson: Word('мерсеризую', 8),
  singular2ndPerson: Word('мерсеризуешь', 8),
  singular3rdPerson: Word('мерсеризует', 8),
  plural1stPerson: Word('мерсеризуем', 8),
  plural2ndPerson: Word('мерсеризуете', 8),
  plural3rdPerson: Word('мерсеризуют', 8),
  masculinePast: Word('мерсеризовал', 10),
  femininePast: Word('мерсеризовала', 10),
  neuterPast: Word('мерсеризовало', 10),
  pluralPast: Word('мерсеризовали', 10),
  imperativeInformal: Word('мерсеризуй', 8),
  imperativeFormal: Word('мерсеризуйте', 8),
  imperfect: [],
};

perfectVerbs.set(мерсеризовать.name.text, мерсеризовать);

export { мерсеризовать };