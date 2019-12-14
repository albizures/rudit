import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скатать: PerfectVerb = {
  name: Word('скатать', 4),
  singular1stPerson: Word('скатаю', 4),
  singular2ndPerson: Word('скатаешь', 4),
  singular3rdPerson: Word('скатает', 4),
  plural1stPerson: Word('скатаем', 4),
  plural2ndPerson: Word('скатаете', 4),
  plural3rdPerson: Word('скатают', 4),
  masculinePast: Word('скатал', 4),
  femininePast: Word('скатала', 4),
  neuterPast: Word('скатало', 4),
  pluralPast: Word('скатали', 4),
  imperativeInformal: Word('скатай', 4),
  imperativeFormal: Word('скатайте', 4),
  imperfect: ['скатывать'],
};

perfectVerbs.set(скатать.name.text, скатать);

export { скатать };