import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приободрять: PerfectVerb = {
  name: Word('приободрять', 8),
  singular1stPerson: Word('приободряю', 8),
  singular2ndPerson: Word('приободряешь', 8),
  singular3rdPerson: Word('приободряет', 8),
  plural1stPerson: Word('приободряем', 8),
  plural2ndPerson: Word('приободряете', 8),
  plural3rdPerson: Word('приободряют', 8),
  masculinePast: Word('приободрял', 8),
  femininePast: Word('приободряла', 8),
  neuterPast: Word('приободряло', 8),
  pluralPast: Word('приободряли', 8),
  imperativeInformal: Word('приободряй', 8),
  imperativeFormal: Word('приободряйте', 8),
  imperfect: [],
};

perfectVerbs.set(приободрять.name.text, приободрять);

export { приободрять };