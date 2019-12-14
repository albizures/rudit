import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раболепствовать: PerfectVerb = {
  name: Word('раболепствовать', 5),
  singular1stPerson: Word('раболепствую', 5),
  singular2ndPerson: Word('раболепствуешь', 5),
  singular3rdPerson: Word('раболепствует', 5),
  plural1stPerson: Word('раболепствуем', 5),
  plural2ndPerson: Word('раболепствуете', 5),
  plural3rdPerson: Word('раболепствуют', 5),
  masculinePast: Word('раболепствовал', 5),
  femininePast: Word('раболепствовала', 5),
  neuterPast: Word('раболепствовало', 5),
  pluralPast: Word('раболепствовали', 5),
  imperativeInformal: Word('раболепствуй', 5),
  imperativeFormal: Word('раболепствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(раболепствовать.name.text, раболепствовать);

export { раболепствовать };