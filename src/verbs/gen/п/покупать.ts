import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покупать: PerfectVerb = {
  name: Word('покупать', 5),
  singular1stPerson: Word('покупаю', 5),
  singular2ndPerson: Word('покупаешь', 5),
  singular3rdPerson: Word('покупает', 5),
  plural1stPerson: Word('покупаем', 5),
  plural2ndPerson: Word('покупаете', 5),
  plural3rdPerson: Word('покупают', 5),
  masculinePast: Word('покупал', 5),
  femininePast: Word('покупала', 5),
  neuterPast: Word('покупало', 5),
  pluralPast: Word('покупали', 5),
  imperativeInformal: Word('покупай', 5),
  imperativeFormal: Word('покупайте', 5),
  imperfect: ['купить'],
};

perfectVerbs.set(покупать.name.text, покупать);

export { покупать };