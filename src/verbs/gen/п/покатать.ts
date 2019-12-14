import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покатать: PerfectVerb = {
  name: Word('покатать', 5),
  singular1stPerson: Word('покатаю', 5),
  singular2ndPerson: Word('покатаешь', 5),
  singular3rdPerson: Word('покатает', 5),
  plural1stPerson: Word('покатаем', 5),
  plural2ndPerson: Word('покатаете', 5),
  plural3rdPerson: Word('покатают', 5),
  masculinePast: Word('покатал', 5),
  femininePast: Word('покатала', 5),
  neuterPast: Word('покатало', 5),
  pluralPast: Word('покатали', 5),
  imperativeInformal: Word('покатай', 5),
  imperativeFormal: Word('покатайте', 5),
  imperfect: [],
};

perfectVerbs.set(покатать.name.text, покатать);

export { покатать };