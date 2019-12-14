import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покачать: PerfectVerb = {
  name: Word('покачать', 5),
  singular1stPerson: Word('покачаю', 5),
  singular2ndPerson: Word('покачаешь', 5),
  singular3rdPerson: Word('покачает', 5),
  plural1stPerson: Word('покачаем', 5),
  plural2ndPerson: Word('покачаете', 5),
  plural3rdPerson: Word('покачают', 5),
  masculinePast: Word('покачал', 5),
  femininePast: Word('покачала', 5),
  neuterPast: Word('покачало', 5),
  pluralPast: Word('покачали', 5),
  imperativeInformal: Word('покачай', 5),
  imperativeFormal: Word('покачайте', 5),
  imperfect: ['качать'],
};

perfectVerbs.set(покачать.name.text, покачать);

export { покачать };