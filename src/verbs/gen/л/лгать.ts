import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лгать: PerfectVerb = {
  name: Word('лгать', 2),
  singular1stPerson: Word('лгу', 2),
  singular2ndPerson: Word('лжёшь', 2),
  singular3rdPerson: Word('лжёт', 2),
  plural1stPerson: Word('лжём', 2),
  plural2ndPerson: Word('лжёте', 2),
  plural3rdPerson: Word('лгут', 2),
  masculinePast: Word('лгал', 2),
  femininePast: Word('лгала', 4),
  neuterPast: Word('лгало', 2),
  pluralPast: Word('лгали', 2),
  imperativeInformal: Word('лги', 2),
  imperativeFormal: Word('лгите', 2),
  imperfect: ['солгать','налгать'],
};

perfectVerbs.set(лгать.name.text, лгать);

export { лгать };