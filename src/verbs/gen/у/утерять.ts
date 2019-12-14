import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утерять: PerfectVerb = {
  name: Word('утерять', 4),
  singular1stPerson: Word('утеряю', 4),
  singular2ndPerson: Word('утеряешь', 4),
  singular3rdPerson: Word('утеряет', 4),
  plural1stPerson: Word('утеряем', 4),
  plural2ndPerson: Word('утеряете', 4),
  plural3rdPerson: Word('утеряют', 4),
  masculinePast: Word('утерял', 4),
  femininePast: Word('утеряла', 4),
  neuterPast: Word('утеряло', 4),
  pluralPast: Word('утеряли', 4),
  imperativeInformal: Word('утеряй', 4),
  imperativeFormal: Word('утеряйте', 4),
  imperfect: [],
};

perfectVerbs.set(утерять.name.text, утерять);

export { утерять };