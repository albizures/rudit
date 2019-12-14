import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплестись: PerfectVerb = {
  name: Word('заплестись', 7),
  singular1stPerson: Word('заплетусь', 6),
  singular2ndPerson: Word('заплетёшься', 6),
  singular3rdPerson: Word('заплетётся', 6),
  plural1stPerson: Word('заплетёмся', 6),
  plural2ndPerson: Word('заплетётесь', 6),
  plural3rdPerson: Word('заплетутся', 6),
  masculinePast: Word('заплёлся', 4),
  femininePast: Word('заплелась', 6),
  neuterPast: Word('заплелось', 6),
  pluralPast: Word('заплелись', 6),
  imperativeInformal: Word('заплетись', 6),
  imperativeFormal: Word('заплетитесь', 6),
  imperfect: [],
};

perfectVerbs.set(заплестись.name.text, заплестись);

export { заплестись };