import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оболгать: PerfectVerb = {
  name: Word('оболгать', 5),
  singular1stPerson: Word('оболгу', 5),
  singular2ndPerson: Word('оболжёшь', 0),
  singular3rdPerson: Word('оболжёт', 0),
  plural1stPerson: Word('оболжём', 0),
  plural2ndPerson: Word('оболжёте', 7),
  plural3rdPerson: Word('оболгут', 5),
  masculinePast: Word('оболгал', 5),
  femininePast: Word('оболгала', 7),
  neuterPast: Word('оболгало', 5),
  pluralPast: Word('оболгали', 5),
  imperativeInformal: Word('оболги', 5),
  imperativeFormal: Word('оболгите', 5),
  imperfect: [],
};

perfectVerbs.set(оболгать.name.text, оболгать);

export { оболгать };