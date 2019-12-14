import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шнырять: PerfectVerb = {
  name: Word('шнырять', 4),
  singular1stPerson: Word('шныряю', 4),
  singular2ndPerson: Word('шныряешь', 4),
  singular3rdPerson: Word('шныряет', 4),
  plural1stPerson: Word('шныряем', 4),
  plural2ndPerson: Word('шныряете', 4),
  plural3rdPerson: Word('шныряют', 4),
  masculinePast: Word('шнырял', 4),
  femininePast: Word('шныряла', 4),
  neuterPast: Word('шныряло', 4),
  pluralPast: Word('шныряли', 4),
  imperativeInformal: Word('шныряй', 4),
  imperativeFormal: Word('шныряйте', 4),
  imperfect: [],
};

perfectVerbs.set(шнырять.name.text, шнырять);

export { шнырять };