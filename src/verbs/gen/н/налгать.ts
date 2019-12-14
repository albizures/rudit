import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налгать: PerfectVerb = {
  name: Word('налгать', 4),
  singular1stPerson: Word('налгу', 4),
  singular2ndPerson: Word('налжёшь', 1),
  singular3rdPerson: Word('налжёт', 1),
  plural1stPerson: Word('налжём', 1),
  plural2ndPerson: Word('налжёте', 1),
  plural3rdPerson: Word('налгут', 4),
  masculinePast: Word('налгал', 4),
  femininePast: Word('налгала', 6),
  neuterPast: Word('налгало', 4),
  pluralPast: Word('налгали', 4),
  imperativeInformal: Word('налги', 4),
  imperativeFormal: Word('налгите', 4),
  imperfect: [],
};

perfectVerbs.set(налгать.name.text, налгать);

export { налгать };