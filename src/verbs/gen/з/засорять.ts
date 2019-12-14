import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засорять: PerfectVerb = {
  name: Word('засорять', 5),
  singular1stPerson: Word('засоряю', 5),
  singular2ndPerson: Word('засоряешь', 5),
  singular3rdPerson: Word('засоряет', 5),
  plural1stPerson: Word('засоряем', 5),
  plural2ndPerson: Word('засоряете', 5),
  plural3rdPerson: Word('засоряют', 5),
  masculinePast: Word('засорял', 5),
  femininePast: Word('засоряла', 5),
  neuterPast: Word('засоряло', 5),
  pluralPast: Word('засоряли', 5),
  imperativeInformal: Word('засоряй', 5),
  imperativeFormal: Word('засоряйте', 5),
  imperfect: [],
};

perfectVerbs.set(засорять.name.text, засорять);

export { засорять };