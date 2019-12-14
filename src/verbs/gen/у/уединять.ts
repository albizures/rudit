import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уединять: PerfectVerb = {
  name: Word('уединять', 5),
  singular1stPerson: Word('уединяю', 5),
  singular2ndPerson: Word('уединяешь', 5),
  singular3rdPerson: Word('уединяет', 5),
  plural1stPerson: Word('уединяем', 5),
  plural2ndPerson: Word('уединяете', 5),
  plural3rdPerson: Word('уединяют', 5),
  masculinePast: Word('уединял', 5),
  femininePast: Word('уединяла', 5),
  neuterPast: Word('уединяло', 5),
  pluralPast: Word('уединяли', 5),
  imperativeInformal: Word('уединяй', 5),
  imperativeFormal: Word('уединяйте', 5),
  imperfect: [],
};

perfectVerbs.set(уединять.name.text, уединять);

export { уединять };