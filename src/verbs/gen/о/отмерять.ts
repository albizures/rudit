import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмерять: PerfectVerb = {
  name: Word('отмерять', 5),
  singular1stPerson: Word('отмеряю', 5),
  singular2ndPerson: Word('отмеряешь', 5),
  singular3rdPerson: Word('отмеряет', 5),
  plural1stPerson: Word('отмеряем', 5),
  plural2ndPerson: Word('отмеряете', 5),
  plural3rdPerson: Word('отмеряют', 5),
  masculinePast: Word('отмерял', 5),
  femininePast: Word('отмеряла', 5),
  neuterPast: Word('отмеряло', 5),
  pluralPast: Word('отмеряли', 5),
  imperativeInformal: Word('отмеряй', 5),
  imperativeFormal: Word('отмеряйте', 5),
  imperfect: [],
};

perfectVerbs.set(отмерять.name.text, отмерять);

export { отмерять };