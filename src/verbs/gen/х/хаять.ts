import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хаять: PerfectVerb = {
  name: Word('хаять', 1),
  singular1stPerson: Word('хаю', 1),
  singular2ndPerson: Word('хаешь', 1),
  singular3rdPerson: Word('хает', 1),
  plural1stPerson: Word('хаем', 1),
  plural2ndPerson: Word('хаете', 1),
  plural3rdPerson: Word('хают', 1),
  masculinePast: Word('хаял', 1),
  femininePast: Word('хаяла', 1),
  neuterPast: Word('хаяло', 1),
  pluralPast: Word('хаяли', 1),
  imperativeInformal: Word('хай', 1),
  imperativeFormal: Word('хайте', 1),
  imperfect: ['охаять'],
};

perfectVerbs.set(хаять.name.text, хаять);

export { хаять };