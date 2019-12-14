import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жаться: PerfectVerb = {
  name: Word('жаться', 1),
  singular1stPerson: Word('жмусь', 2),
  singular2ndPerson: Word('жмёшься', 6),
  singular3rdPerson: Word('жмётся', 5),
  plural1stPerson: Word('жмёмся', 5),
  plural2ndPerson: Word('жмётесь', 4),
  plural3rdPerson: Word('жмутся', 2),
  masculinePast: Word('жался', 1),
  femininePast: Word('жалась', 1),
  neuterPast: Word('жалось', 1),
  pluralPast: Word('жались', 1),
  imperativeInformal: Word('жмись', 2),
  imperativeFormal: Word('жмитесь', 2),
  imperfect: [],
};

perfectVerbs.set(жаться.name.text, жаться);

export { жаться };