import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обдурять: PerfectVerb = {
  name: Word('обдурять', 5),
  singular1stPerson: Word('обдуряю', 5),
  singular2ndPerson: Word('обдуряешь', 5),
  singular3rdPerson: Word('обдуряет', 5),
  plural1stPerson: Word('обдуряем', 5),
  plural2ndPerson: Word('обдуряете', 5),
  plural3rdPerson: Word('обдуряют', 5),
  masculinePast: Word('обдурял', 5),
  femininePast: Word('обдуряла', 5),
  neuterPast: Word('обдуряло', 5),
  pluralPast: Word('обдуряли', 5),
  imperativeInformal: Word('обдуряй', 5),
  imperativeFormal: Word('обдуряйте', 5),
  imperfect: [],
};

perfectVerbs.set(обдурять.name.text, обдурять);

export { обдурять };