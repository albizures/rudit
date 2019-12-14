import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удобрять: PerfectVerb = {
  name: Word('удобрять', 5),
  singular1stPerson: Word('удобряю', 5),
  singular2ndPerson: Word('удобряешь', 5),
  singular3rdPerson: Word('удобряет', 5),
  plural1stPerson: Word('удобряем', 5),
  plural2ndPerson: Word('удобряете', 5),
  plural3rdPerson: Word('удобряют', 5),
  masculinePast: Word('удобрял', 5),
  femininePast: Word('удобряла', 5),
  neuterPast: Word('удобряло', 5),
  pluralPast: Word('удобряли', 5),
  imperativeInformal: Word('удобряй', 5),
  imperativeFormal: Word('удобряйте', 5),
  imperfect: [],
};

perfectVerbs.set(удобрять.name.text, удобрять);

export { удобрять };