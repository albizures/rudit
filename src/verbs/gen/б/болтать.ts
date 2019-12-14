import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const болтать: PerfectVerb = {
  name: Word('болтать', 4),
  singular1stPerson: Word('болтаю', 4),
  singular2ndPerson: Word('болтаешь', 4),
  singular3rdPerson: Word('болтает', 4),
  plural1stPerson: Word('болтаем', 4),
  plural2ndPerson: Word('болтаете', 4),
  plural3rdPerson: Word('болтают', 4),
  masculinePast: Word('болтал', 4),
  femininePast: Word('болтала', 4),
  neuterPast: Word('болтало', 4),
  pluralPast: Word('болтали', 4),
  imperativeInformal: Word('болтай', 4),
  imperativeFormal: Word('болтайте', 4),
  imperfect: [],
};

perfectVerbs.set(болтать.name.text, болтать);

export { болтать };