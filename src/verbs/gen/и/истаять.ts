import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истаять: PerfectVerb = {
  name: Word('истаять', 3),
  singular1stPerson: Word('истаю', 3),
  singular2ndPerson: Word('истаешь', 3),
  singular3rdPerson: Word('истает', 3),
  plural1stPerson: Word('истаем', 3),
  plural2ndPerson: Word('истаете', 3),
  plural3rdPerson: Word('истают', 3),
  masculinePast: Word('истаял', 3),
  femininePast: Word('истаяла', 3),
  neuterPast: Word('истаяло', 3),
  pluralPast: Word('истаяли', 3),
  imperativeInformal: Word('истай', 3),
  imperativeFormal: Word('истайте', 3),
  imperfect: [],
};

perfectVerbs.set(истаять.name.text, истаять);

export { истаять };