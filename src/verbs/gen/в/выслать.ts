import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выслать: PerfectVerb = {
  name: Word('выслать', 1),
  singular1stPerson: Word('вышлю', 1),
  singular2ndPerson: Word('вышлешь', 1),
  singular3rdPerson: Word('вышлет', 1),
  plural1stPerson: Word('вышлем', 1),
  plural2ndPerson: Word('вышлете', 1),
  plural3rdPerson: Word('вышлют', 1),
  masculinePast: Word('выслал', 1),
  femininePast: Word('выслала', 1),
  neuterPast: Word('выслало', 1),
  pluralPast: Word('выслали', 1),
  imperativeInformal: Word('вышли', 1),
  imperativeFormal: Word('вышлите', 1),
  imperfect: ['высылать'],
};

perfectVerbs.set(выслать.name.text, выслать);

export { выслать };