import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уверять: PerfectVerb = {
  name: Word('уверять', 4),
  singular1stPerson: Word('уверяю', 4),
  singular2ndPerson: Word('уверяешь', 4),
  singular3rdPerson: Word('уверяет', 4),
  plural1stPerson: Word('уверяем', 4),
  plural2ndPerson: Word('уверяете', 4),
  plural3rdPerson: Word('уверяют', 4),
  masculinePast: Word('уверял', 4),
  femininePast: Word('уверяла', 4),
  neuterPast: Word('уверяло', 4),
  pluralPast: Word('уверяли', 4),
  imperativeInformal: Word('уверяй', 4),
  imperativeFormal: Word('уверяйте', 4),
  imperfect: ['уверить'],
};

perfectVerbs.set(уверять.name.text, уверять);

export { уверять };