import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сочленять: PerfectVerb = {
  name: Word('сочленять', 6),
  singular1stPerson: Word('сочленяю', 6),
  singular2ndPerson: Word('сочленяешь', 6),
  singular3rdPerson: Word('сочленяет', 6),
  plural1stPerson: Word('сочленяем', 6),
  plural2ndPerson: Word('сочленяете', 6),
  plural3rdPerson: Word('сочленяют', 6),
  masculinePast: Word('сочленял', 6),
  femininePast: Word('сочленяла', 6),
  neuterPast: Word('сочленяло', 6),
  pluralPast: Word('сочленяли', 6),
  imperativeInformal: Word('сочленяй', 6),
  imperativeFormal: Word('сочленяйте', 6),
  imperfect: [],
};

perfectVerbs.set(сочленять.name.text, сочленять);

export { сочленять };