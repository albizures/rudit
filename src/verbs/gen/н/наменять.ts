import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наменять: PerfectVerb = {
  name: Word('наменять', 5),
  singular1stPerson: Word('наменяю', 5),
  singular2ndPerson: Word('наменяешь', 5),
  singular3rdPerson: Word('наменяет', 5),
  plural1stPerson: Word('наменяем', 5),
  plural2ndPerson: Word('наменяете', 5),
  plural3rdPerson: Word('наменяют', 5),
  masculinePast: Word('наменял', 5),
  femininePast: Word('наменяла', 5),
  neuterPast: Word('наменяло', 5),
  pluralPast: Word('наменяли', 5),
  imperativeInformal: Word('наменяй', 5),
  imperativeFormal: Word('наменяйте', 5),
  imperfect: [],
};

perfectVerbs.set(наменять.name.text, наменять);

export { наменять };