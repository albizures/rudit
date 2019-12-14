import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоглядеть: PerfectVerb = {
  name: Word('недоглядеть', 8),
  singular1stPerson: Word('недогляжу', 8),
  singular2ndPerson: Word('недоглядишь', 8),
  singular3rdPerson: Word('недоглядит', 8),
  plural1stPerson: Word('недоглядим', 8),
  plural2ndPerson: Word('недоглядите', 8),
  plural3rdPerson: Word('недоглядят', 8),
  masculinePast: Word('недоглядел', 8),
  femininePast: Word('недоглядела', 8),
  neuterPast: Word('недоглядело', 8),
  pluralPast: Word('недоглядели', 8),
  imperativeInformal: Word('недогляди', 8),
  imperativeFormal: Word('недоглядите', 8),
  imperfect: [],
};

perfectVerbs.set(недоглядеть.name.text, недоглядеть);

export { недоглядеть };