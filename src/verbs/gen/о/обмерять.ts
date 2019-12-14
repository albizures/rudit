import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмерять: PerfectVerb = {
  name: Word('обмерять', 5),
  singular1stPerson: Word('обмеряю', 5),
  singular2ndPerson: Word('обмеряешь', 5),
  singular3rdPerson: Word('обмеряет', 5),
  plural1stPerson: Word('обмеряем', 5),
  plural2ndPerson: Word('обмеряете', 5),
  plural3rdPerson: Word('обмеряют', 5),
  masculinePast: Word('обмерял', 5),
  femininePast: Word('обмеряла', 5),
  neuterPast: Word('обмеряло', 5),
  pluralPast: Word('обмеряли', 5),
  imperativeInformal: Word('обмеряй', 5),
  imperativeFormal: Word('обмеряйте', 5),
  imperfect: ['обмерить'],
};

perfectVerbs.set(обмерять.name.text, обмерять);

export { обмерять };