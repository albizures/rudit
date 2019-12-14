import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уделять: PerfectVerb = {
  name: Word('уделять', 4),
  singular1stPerson: Word('уделяю', 4),
  singular2ndPerson: Word('уделяешь', 4),
  singular3rdPerson: Word('уделяет', 4),
  plural1stPerson: Word('уделяем', 4),
  plural2ndPerson: Word('уделяете', 4),
  plural3rdPerson: Word('уделяют', 4),
  masculinePast: Word('уделял', 4),
  femininePast: Word('уделяла', 4),
  neuterPast: Word('уделяло', 4),
  pluralPast: Word('уделяли', 4),
  imperativeInformal: Word('уделяй', 4),
  imperativeFormal: Word('уделяйте', 4),
  imperfect: [],
};

perfectVerbs.set(уделять.name.text, уделять);

export { уделять };