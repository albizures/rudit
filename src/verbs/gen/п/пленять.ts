import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пленять: PerfectVerb = {
  name: Word('пленять', 4),
  singular1stPerson: Word('пленяю', 4),
  singular2ndPerson: Word('пленяешь', 4),
  singular3rdPerson: Word('пленяет', 4),
  plural1stPerson: Word('пленяем', 4),
  plural2ndPerson: Word('пленяете', 4),
  plural3rdPerson: Word('пленяют', 4),
  masculinePast: Word('пленял', 4),
  femininePast: Word('пленяла', 4),
  neuterPast: Word('пленяло', 4),
  pluralPast: Word('пленяли', 4),
  imperativeInformal: Word('пленяй', 4),
  imperativeFormal: Word('пленяйте', 4),
  imperfect: [],
};

perfectVerbs.set(пленять.name.text, пленять);

export { пленять };