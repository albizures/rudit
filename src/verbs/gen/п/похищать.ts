import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похищать: PerfectVerb = {
  name: Word('похищать', 5),
  singular1stPerson: Word('похищаю', 5),
  singular2ndPerson: Word('похищаешь', 5),
  singular3rdPerson: Word('похищает', 5),
  plural1stPerson: Word('похищаем', 5),
  plural2ndPerson: Word('похищаете', 5),
  plural3rdPerson: Word('похищают', 5),
  masculinePast: Word('похищал', 5),
  femininePast: Word('похищала', 5),
  neuterPast: Word('похищало', 5),
  pluralPast: Word('похищали', 5),
  imperativeInformal: Word('похищай', 5),
  imperativeFormal: Word('похищайте', 5),
  imperfect: ['похитить'],
};

perfectVerbs.set(похищать.name.text, похищать);

export { похищать };