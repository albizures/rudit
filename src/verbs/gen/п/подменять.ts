import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подменять: PerfectVerb = {
  name: Word('подменять', 6),
  singular1stPerson: Word('подменяю', 6),
  singular2ndPerson: Word('подменяешь', 6),
  singular3rdPerson: Word('подменяет', 6),
  plural1stPerson: Word('подменяем', 6),
  plural2ndPerson: Word('подменяете', 6),
  plural3rdPerson: Word('подменяют', 6),
  masculinePast: Word('подменял', 6),
  femininePast: Word('подменяла', 6),
  neuterPast: Word('подменяло', 6),
  pluralPast: Word('подменяли', 6),
  imperativeInformal: Word('подменяй', 6),
  imperativeFormal: Word('подменяйте', 6),
  imperfect: [],
};

perfectVerbs.set(подменять.name.text, подменять);

export { подменять };