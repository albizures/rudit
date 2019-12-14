import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обаять: PerfectVerb = {
  name: Word('обаять', 3),
  singular1stPerson: Word('обаяю', 3),
  singular2ndPerson: Word('обаяешь', 3),
  singular3rdPerson: Word('обаяет', 3),
  plural1stPerson: Word('обаяем', 3),
  plural2ndPerson: Word('обаяете', 3),
  plural3rdPerson: Word('обаяют', 3),
  masculinePast: Word('обаял', 3),
  femininePast: Word('обаяла', 3),
  neuterPast: Word('обаяло', 3),
  pluralPast: Word('обаяли', 3),
  imperativeInformal: Word('обаяй', 3),
  imperativeFormal: Word('обаяйте', 3),
  imperfect: [],
};

perfectVerbs.set(обаять.name.text, обаять);

export { обаять };