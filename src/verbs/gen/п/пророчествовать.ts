import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пророчествовать: PerfectVerb = {
  name: Word('пророчествовать', 4),
  singular1stPerson: Word('пророчествую', 4),
  singular2ndPerson: Word('пророчествуешь', 4),
  singular3rdPerson: Word('пророчествует', 4),
  plural1stPerson: Word('пророчествуем', 4),
  plural2ndPerson: Word('пророчествуете', 4),
  plural3rdPerson: Word('пророчествуют', 4),
  masculinePast: Word('пророчествовал', 4),
  femininePast: Word('пророчествовала', 4),
  neuterPast: Word('пророчествовало', 4),
  pluralPast: Word('пророчествовали', 4),
  imperativeInformal: Word('пророчествуй', 4),
  imperativeFormal: Word('пророчествуйте', 4),
  imperfect: [],
};

perfectVerbs.set(пророчествовать.name.text, пророчествовать);

export { пророчествовать };