import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объезжать: PerfectVerb = {
  name: Word('объезжать', 6),
  singular1stPerson: Word('объезжаю', 6),
  singular2ndPerson: Word('объезжаешь', 6),
  singular3rdPerson: Word('объезжает', 6),
  plural1stPerson: Word('объезжаем', 6),
  plural2ndPerson: Word('объезжаете', 6),
  plural3rdPerson: Word('объезжают', 6),
  masculinePast: Word('объезжал', 6),
  femininePast: Word('объезжала', 6),
  neuterPast: Word('объезжало', 6),
  pluralPast: Word('объезжали', 6),
  imperativeInformal: Word('объезжай', 6),
  imperativeFormal: Word('объезжайте', 6),
  imperfect: ['объехать','объездить'],
};

perfectVerbs.set(объезжать.name.text, объезжать);

export { объезжать };