import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выделять: PerfectVerb = {
  name: Word('выделять', 5),
  singular1stPerson: Word('выделяю', 5),
  singular2ndPerson: Word('выделяешь', 5),
  singular3rdPerson: Word('выделяет', 5),
  plural1stPerson: Word('выделяем', 5),
  plural2ndPerson: Word('выделяете', 5),
  plural3rdPerson: Word('выделяют', 5),
  masculinePast: Word('выделял', 5),
  femininePast: Word('выделяла', 5),
  neuterPast: Word('выделяло', 5),
  pluralPast: Word('выделяли', 5),
  imperativeInformal: Word('выделяй', 5),
  imperativeFormal: Word('выделяйте', 5),
  imperfect: ['выделить'],
};

perfectVerbs.set(выделять.name.text, выделять);

export { выделять };