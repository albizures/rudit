import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забросать: PerfectVerb = {
  name: Word('забросать', 6),
  singular1stPerson: Word('забросаю', 6),
  singular2ndPerson: Word('забросаешь', 6),
  singular3rdPerson: Word('забросает', 6),
  plural1stPerson: Word('забросаем', 6),
  plural2ndPerson: Word('забросаете', 6),
  plural3rdPerson: Word('забросают', 6),
  masculinePast: Word('забросал', 6),
  femininePast: Word('забросала', 6),
  neuterPast: Word('забросало', 6),
  pluralPast: Word('забросали', 6),
  imperativeInformal: Word('забросай', 6),
  imperativeFormal: Word('забросайте', 6),
  imperfect: [],
};

perfectVerbs.set(забросать.name.text, забросать);

export { забросать };