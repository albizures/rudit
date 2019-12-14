import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удесятерять: PerfectVerb = {
  name: Word('удесятерять', 8),
  singular1stPerson: Word('удесятеряю', 8),
  singular2ndPerson: Word('удесятеряешь', 8),
  singular3rdPerson: Word('удесятеряет', 8),
  plural1stPerson: Word('удесятеряем', 8),
  plural2ndPerson: Word('удесятеряете', 8),
  plural3rdPerson: Word('удесятеряют', 8),
  masculinePast: Word('удесятерял', 8),
  femininePast: Word('удесятеряла', 8),
  neuterPast: Word('удесятеряло', 8),
  pluralPast: Word('удесятеряли', 8),
  imperativeInformal: Word('удесятеряй', 8),
  imperativeFormal: Word('удесятеряйте', 8),
  imperfect: [],
};

perfectVerbs.set(удесятерять.name.text, удесятерять);

export { удесятерять };