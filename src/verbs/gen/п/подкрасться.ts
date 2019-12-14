import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкрасться: PerfectVerb = {
  name: Word('подкрасться', 5),
  singular1stPerson: Word('подкрадусь', 7),
  singular2ndPerson: Word('подкрадёшься', 7),
  singular3rdPerson: Word('подкрадётся', 7),
  plural1stPerson: Word('подкрадёмся', 7),
  plural2ndPerson: Word('подкрадётесь', 7),
  plural3rdPerson: Word('подкрадутся', 7),
  masculinePast: Word('подкрался', 5),
  femininePast: Word('подкралась', 5),
  neuterPast: Word('подкралось', 5),
  pluralPast: Word('подкрались', 5),
  imperativeInformal: Word('подкрадись', 7),
  imperativeFormal: Word('подкрадитесь', 7),
  imperfect: [],
};

perfectVerbs.set(подкрасться.name.text, подкрасться);

export { подкрасться };