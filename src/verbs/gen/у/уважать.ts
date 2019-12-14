import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уважать: PerfectVerb = {
  name: Word('уважать', 4),
  singular1stPerson: Word('уважаю', 4),
  singular2ndPerson: Word('уважаешь', 4),
  singular3rdPerson: Word('уважает', 4),
  plural1stPerson: Word('уважаем', 4),
  plural2ndPerson: Word('уважаете', 4),
  plural3rdPerson: Word('уважают', 4),
  masculinePast: Word('уважал', 4),
  femininePast: Word('уважала', 4),
  neuterPast: Word('уважало', 4),
  pluralPast: Word('уважали', 4),
  imperativeInformal: Word('уважай', 4),
  imperativeFormal: Word('уважайте', 4),
  imperfect: [],
};

perfectVerbs.set(уважать.name.text, уважать);

export { уважать };