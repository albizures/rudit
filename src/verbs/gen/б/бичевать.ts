import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бичевать: PerfectVerb = {
  name: Word('бичевать', 5),
  singular1stPerson: Word('бичую', 3),
  singular2ndPerson: Word('бичуешь', 3),
  singular3rdPerson: Word('бичует', 3),
  plural1stPerson: Word('бичуем', 3),
  plural2ndPerson: Word('бичуете', 3),
  plural3rdPerson: Word('бичуют', 3),
  masculinePast: Word('бичевал', 5),
  femininePast: Word('бичевала', 5),
  neuterPast: Word('бичевало', 5),
  pluralPast: Word('бичевали', 5),
  imperativeInformal: Word('бичуй', 3),
  imperativeFormal: Word('бичуйте', 3),
  imperfect: [],
};

perfectVerbs.set(бичевать.name.text, бичевать);

export { бичевать };