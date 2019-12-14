import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испестрять: PerfectVerb = {
  name: Word('испестрять', 7),
  singular1stPerson: Word('испестряю', 7),
  singular2ndPerson: Word('испестряешь', 7),
  singular3rdPerson: Word('испестряет', 7),
  plural1stPerson: Word('испестряем', 7),
  plural2ndPerson: Word('испестряете', 7),
  plural3rdPerson: Word('испестряют', 7),
  masculinePast: Word('испестрял', 7),
  femininePast: Word('испестряла', 7),
  neuterPast: Word('испестряло', 7),
  pluralPast: Word('испестряли', 7),
  imperativeInformal: Word('испестряй', 7),
  imperativeFormal: Word('испестряйте', 7),
  imperfect: [],
};

perfectVerbs.set(испестрять.name.text, испестрять);

export { испестрять };