import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкрасться: PerfectVerb = {
  name: Word('вкрасться', 3),
  singular1stPerson: Word('вкрадусь', 5),
  singular2ndPerson: Word('вкрадёшься', 5),
  singular3rdPerson: Word('вкрадётся', 5),
  plural1stPerson: Word('вкрадёмся', 5),
  plural2ndPerson: Word('вкрадётесь', 5),
  plural3rdPerson: Word('вкрадутся', 5),
  masculinePast: Word('вкрался', 3),
  femininePast: Word('вкралась', 3),
  neuterPast: Word('вкралось', 3),
  pluralPast: Word('вкрались', 3),
  imperativeInformal: Word('вкрадись', 5),
  imperativeFormal: Word('вкрадитесь', 5),
  imperfect: [],
};

perfectVerbs.set(вкрасться.name.text, вкрасться);

export { вкрасться };