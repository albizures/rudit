import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охарактеризовать: PerfectVerb = {
  name: Word('охарактеризовать', 13),
  singular1stPerson: Word('охарактеризую', 11),
  singular2ndPerson: Word('охарактеризуешь', 11),
  singular3rdPerson: Word('охарактеризует', 11),
  plural1stPerson: Word('охарактеризуем', 11),
  plural2ndPerson: Word('охарактеризуете', 11),
  plural3rdPerson: Word('охарактеризуют', 11),
  masculinePast: Word('охарактеризовал', 13),
  femininePast: Word('охарактеризовала', 13),
  neuterPast: Word('охарактеризовало', 13),
  pluralPast: Word('охарактеризовали', 13),
  imperativeInformal: Word('охарактеризуй', 11),
  imperativeFormal: Word('охарактеризуйте', 11),
  imperfect: [],
};

perfectVerbs.set(охарактеризовать.name.text, охарактеризовать);

export { охарактеризовать };