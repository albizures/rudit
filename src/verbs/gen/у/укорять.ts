import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укорять: PerfectVerb = {
  name: Word('укорять', 4),
  singular1stPerson: Word('укоряю', 4),
  singular2ndPerson: Word('укоряешь', 4),
  singular3rdPerson: Word('укоряет', 4),
  plural1stPerson: Word('укоряем', 4),
  plural2ndPerson: Word('укоряете', 4),
  plural3rdPerson: Word('укоряют', 4),
  masculinePast: Word('укорял', 4),
  femininePast: Word('укоряла', 4),
  neuterPast: Word('укоряло', 4),
  pluralPast: Word('укоряли', 4),
  imperativeInformal: Word('укоряй', 4),
  imperativeFormal: Word('укоряйте', 4),
  imperfect: ['укорить'],
};

perfectVerbs.set(укорять.name.text, укорять);

export { укорять };