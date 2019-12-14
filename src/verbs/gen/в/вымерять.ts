import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымерять: PerfectVerb = {
  name: Word('вымерять', 5),
  singular1stPerson: Word('вымеряю', 5),
  singular2ndPerson: Word('вымеряешь', 5),
  singular3rdPerson: Word('вымеряет', 5),
  plural1stPerson: Word('вымеряем', 5),
  plural2ndPerson: Word('вымеряете', 5),
  plural3rdPerson: Word('вымеряют', 5),
  masculinePast: Word('вымерял', 5),
  femininePast: Word('вымеряла', 5),
  neuterPast: Word('вымеряло', 5),
  pluralPast: Word('вымеряли', 5),
  imperativeInformal: Word('вымеряй', 5),
  imperativeFormal: Word('вымеряйте', 5),
  imperfect: [],
};

perfectVerbs.set(вымерять.name.text, вымерять);

export { вымерять };