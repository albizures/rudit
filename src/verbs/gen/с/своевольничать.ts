import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const своевольничать: PerfectVerb = {
  name: Word('своевольничать', 5),
  singular1stPerson: Word('своевольничаю', 5),
  singular2ndPerson: Word('своевольничаешь', 5),
  singular3rdPerson: Word('своевольничает', 5),
  plural1stPerson: Word('своевольничаем', 5),
  plural2ndPerson: Word('своевольничаете', 5),
  plural3rdPerson: Word('своевольничают', 5),
  masculinePast: Word('своевольничал', 5),
  femininePast: Word('своевольничала', 5),
  neuterPast: Word('своевольничало', 5),
  pluralPast: Word('своевольничали', 5),
  imperativeInformal: Word('своевольничай', 5),
  imperativeFormal: Word('своевольничайте', 5),
  imperfect: [],
};

perfectVerbs.set(своевольничать.name.text, своевольничать);

export { своевольничать };