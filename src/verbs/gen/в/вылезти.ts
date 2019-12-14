import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылезти: PerfectVerb = {
  name: Word('вылезти', 1),
  singular1stPerson: Word('вылезу', 1),
  singular2ndPerson: Word('вылезешь', 1),
  singular3rdPerson: Word('вылезет', 1),
  plural1stPerson: Word('вылезем', 1),
  plural2ndPerson: Word('вылезете', 1),
  plural3rdPerson: Word('вылезут', 1),
  masculinePast: Word('вылез', 1),
  femininePast: Word('вылезла', 1),
  neuterPast: Word('вылезло', 1),
  pluralPast: Word('вылезли', 1),
  imperativeInformal: Word('вылези', 1),
  imperativeFormal: Word('вылезьте', 1),
  imperfect: [],
};

perfectVerbs.set(вылезти.name.text, вылезти);

export { вылезти };