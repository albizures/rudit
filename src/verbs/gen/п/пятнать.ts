import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пятнать: PerfectVerb = {
  name: Word('пятнать', 4),
  singular1stPerson: Word('пятнаю', 4),
  singular2ndPerson: Word('пятнаешь', 4),
  singular3rdPerson: Word('пятнает', 4),
  plural1stPerson: Word('пятнаем', 4),
  plural2ndPerson: Word('пятнаете', 4),
  plural3rdPerson: Word('пятнают', 4),
  masculinePast: Word('пятнал', 4),
  femininePast: Word('пятнала', 4),
  neuterPast: Word('пятнало', 4),
  pluralPast: Word('пятнали', 4),
  imperativeInformal: Word('пятнай', 4),
  imperativeFormal: Word('пятнайте', 4),
  imperfect: [],
};

perfectVerbs.set(пятнать.name.text, пятнать);

export { пятнать };