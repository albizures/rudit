import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережать: PerfectVerb = {
  name: Word('пережать', 5),
  singular1stPerson: Word('пережму', 6),
  singular2ndPerson: Word('пережмёшь', 6),
  singular3rdPerson: Word('пережмёт', 6),
  plural1stPerson: Word('пережмём', 6),
  plural2ndPerson: Word('пережмёте', 6),
  plural3rdPerson: Word('пережмут', 6),
  masculinePast: Word('пережал', 5),
  femininePast: Word('пережала', 5),
  neuterPast: Word('пережало', 5),
  pluralPast: Word('пережали', 5),
  imperativeInformal: Word('пережми', 6),
  imperativeFormal: Word('пережмите', 6),
  imperfect: [],
};

perfectVerbs.set(пережать.name.text, пережать);

export { пережать };