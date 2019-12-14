import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const секвестровать: PerfectVerb = {
  name: Word('секвестровать', 10),
  singular1stPerson: Word('секвеструю', 8),
  singular2ndPerson: Word('секвеструешь', 8),
  singular3rdPerson: Word('секвеструет', 8),
  plural1stPerson: Word('секвеструем', 8),
  plural2ndPerson: Word('секвеструете', 8),
  plural3rdPerson: Word('секвеструют', 8),
  masculinePast: Word('секвестровал', 10),
  femininePast: Word('секвестровала', 10),
  neuterPast: Word('секвестровало', 10),
  pluralPast: Word('секвестровали', 10),
  imperativeInformal: Word('секвеструй', 8),
  imperativeFormal: Word('секвеструйте', 8),
  imperfect: [],
};

perfectVerbs.set(секвестровать.name.text, секвестровать);

export { секвестровать };