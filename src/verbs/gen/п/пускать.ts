import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пускать: PerfectVerb = {
  name: Word('пускать', 4),
  singular1stPerson: Word('пускаю', 4),
  singular2ndPerson: Word('пускаешь', 4),
  singular3rdPerson: Word('пускает', 4),
  plural1stPerson: Word('пускаем', 4),
  plural2ndPerson: Word('пускаете', 4),
  plural3rdPerson: Word('пускают', 4),
  masculinePast: Word('пускал', 4),
  femininePast: Word('пускала', 4),
  neuterPast: Word('пускало', 4),
  pluralPast: Word('пускали', 4),
  imperativeInformal: Word('пускай', 4),
  imperativeFormal: Word('пускайте', 4),
  imperfect: ['пустить'],
};

perfectVerbs.set(пускать.name.text, пускать);

export { пускать };