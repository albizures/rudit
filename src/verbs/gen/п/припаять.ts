import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припаять: PerfectVerb = {
  name: Word('припаять', 5),
  singular1stPerson: Word('припаяю', 5),
  singular2ndPerson: Word('припаяешь', 5),
  singular3rdPerson: Word('припаяет', 5),
  plural1stPerson: Word('припаяем', 5),
  plural2ndPerson: Word('припаяете', 5),
  plural3rdPerson: Word('припаяют', 5),
  masculinePast: Word('припаял', 5),
  femininePast: Word('припаяла', 5),
  neuterPast: Word('припаяло', 5),
  pluralPast: Word('припаяли', 5),
  imperativeInformal: Word('припаяй', 5),
  imperativeFormal: Word('припаяйте', 5),
  imperfect: [],
};

perfectVerbs.set(припаять.name.text, припаять);

export { припаять };