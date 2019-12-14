import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обуять: PerfectVerb = {
  name: Word('обуять', 3),
  singular1stPerson: Word('обуяю', 3),
  singular2ndPerson: Word('обуяешь', 3),
  singular3rdPerson: Word('обуяет', 3),
  plural1stPerson: Word('обуяем', 3),
  plural2ndPerson: Word('обуяете', 3),
  plural3rdPerson: Word('обуяют', 3),
  masculinePast: Word('обуял', 3),
  femininePast: Word('обуяла', 3),
  neuterPast: Word('обуяло', 3),
  pluralPast: Word('обуяли', 3),
  imperativeInformal: Word('обуяй', 3),
  imperativeFormal: Word('обуяйте', 3),
  imperfect: [],
};

perfectVerbs.set(обуять.name.text, обуять);

export { обуять };