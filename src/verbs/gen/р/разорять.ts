import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разорять: PerfectVerb = {
  name: Word('разорять', 5),
  singular1stPerson: Word('разоряю', 5),
  singular2ndPerson: Word('разоряешь', 5),
  singular3rdPerson: Word('разоряет', 5),
  plural1stPerson: Word('разоряем', 5),
  plural2ndPerson: Word('разоряете', 5),
  plural3rdPerson: Word('разоряют', 5),
  masculinePast: Word('разорял', 5),
  femininePast: Word('разоряла', 5),
  neuterPast: Word('разоряло', 5),
  pluralPast: Word('разоряли', 5),
  imperativeInformal: Word('разоряй', 5),
  imperativeFormal: Word('разоряйте', 5),
  imperfect: [],
};

perfectVerbs.set(разорять.name.text, разорять);

export { разорять };