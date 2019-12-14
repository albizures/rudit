import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вечерять: PerfectVerb = {
  name: Word('вечерять', 3),
  singular1stPerson: Word('вечеряю', 3),
  singular2ndPerson: Word('вечеряешь', 3),
  singular3rdPerson: Word('вечеряет', 3),
  plural1stPerson: Word('вечеряем', 3),
  plural2ndPerson: Word('вечеряете', 3),
  plural3rdPerson: Word('вечеряют', 3),
  masculinePast: Word('вечерял', 3),
  femininePast: Word('вечеряла', 3),
  neuterPast: Word('вечеряло', 3),
  pluralPast: Word('вечеряли', 3),
  imperativeInformal: Word('вечеряй', 3),
  imperativeFormal: Word('вечеряйте', 3),
  imperfect: [],
};

perfectVerbs.set(вечерять.name.text, вечерять);

export { вечерять };