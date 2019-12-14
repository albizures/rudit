import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оделять: PerfectVerb = {
  name: Word('оделять', 4),
  singular1stPerson: Word('оделяю', 4),
  singular2ndPerson: Word('оделяешь', 4),
  singular3rdPerson: Word('оделяет', 4),
  plural1stPerson: Word('оделяем', 4),
  plural2ndPerson: Word('оделяете', 4),
  plural3rdPerson: Word('оделяют', 4),
  masculinePast: Word('оделял', 4),
  femininePast: Word('оделяла', 4),
  neuterPast: Word('оделяло', 4),
  pluralPast: Word('оделяли', 4),
  imperativeInformal: Word('оделяй', 4),
  imperativeFormal: Word('оделяйте', 4),
  imperfect: [],
};

perfectVerbs.set(оделять.name.text, оделять);

export { оделять };