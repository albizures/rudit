import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покушать: PerfectVerb = {
  name: Word('покушать', 3),
  singular1stPerson: Word('покушаю', 3),
  singular2ndPerson: Word('покушаешь', 3),
  singular3rdPerson: Word('покушает', 3),
  plural1stPerson: Word('покушаем', 3),
  plural2ndPerson: Word('покушаете', 3),
  plural3rdPerson: Word('покушают', 3),
  masculinePast: Word('покушал', 3),
  femininePast: Word('покушала', 3),
  neuterPast: Word('покушало', 3),
  pluralPast: Word('покушали', 3),
  imperativeInformal: Word('покушай', 3),
  imperativeFormal: Word('покушайте', 3),
  imperfect: [],
};

perfectVerbs.set(покушать.name.text, покушать);

export { покушать };