import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одарять: PerfectVerb = {
  name: Word('одарять', 4),
  singular1stPerson: Word('одаряю', 4),
  singular2ndPerson: Word('одаряешь', 4),
  singular3rdPerson: Word('одаряет', 4),
  plural1stPerson: Word('одаряем', 4),
  plural2ndPerson: Word('одаряете', 4),
  plural3rdPerson: Word('одаряют', 4),
  masculinePast: Word('одарял', 4),
  femininePast: Word('одаряла', 4),
  neuterPast: Word('одаряло', 4),
  pluralPast: Word('одаряли', 4),
  imperativeInformal: Word('одаряй', 4),
  imperativeFormal: Word('одаряйте', 4),
  imperfect: [],
};

perfectVerbs.set(одарять.name.text, одарять);

export { одарять };