import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выползти: PerfectVerb = {
  name: Word('выползти', 1),
  singular1stPerson: Word('выползу', 1),
  singular2ndPerson: Word('выползешь', 1),
  singular3rdPerson: Word('выползет', 1),
  plural1stPerson: Word('выползем', 1),
  plural2ndPerson: Word('выползете', 1),
  plural3rdPerson: Word('выползут', 1),
  masculinePast: Word('выполз', 1),
  femininePast: Word('выползла', 1),
  neuterPast: Word('выползло', 1),
  pluralPast: Word('выползли', 1),
  imperativeInformal: Word('выползи', 1),
  imperativeFormal: Word('выползите', 1),
  imperfect: [],
};

perfectVerbs.set(выползти.name.text, выползти);

export { выползти };