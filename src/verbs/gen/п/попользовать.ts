import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попользовать: PerfectVerb = {
  name: Word('попользовать', 3),
  singular1stPerson: Word('попользую', 3),
  singular2ndPerson: Word('попользуешь', 3),
  singular3rdPerson: Word('попользует', 3),
  plural1stPerson: Word('попользуем', 3),
  plural2ndPerson: Word('попользуете', 3),
  plural3rdPerson: Word('попользуют', 3),
  masculinePast: Word('попользовал', 3),
  femininePast: Word('попользовала', 3),
  neuterPast: Word('попользовало', 3),
  pluralPast: Word('попользовали', 3),
  imperativeInformal: Word('попользуй', 3),
  imperativeFormal: Word('попользуйте', 3),
  imperfect: [],
};

perfectVerbs.set(попользовать.name.text, попользовать);

export { попользовать };