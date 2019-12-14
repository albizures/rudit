import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завертеться: PerfectVerb = {
  name: Word('завертеться', 6),
  singular1stPerson: Word('заверчусь', 6),
  singular2ndPerson: Word('завертишься', 3),
  singular3rdPerson: Word('завертится', 3),
  plural1stPerson: Word('завертимся', 3),
  plural2ndPerson: Word('завертитесь', 3),
  plural3rdPerson: Word('завертятся', 3),
  masculinePast: Word('завертелся', 6),
  femininePast: Word('завертелась', 6),
  neuterPast: Word('завертелось', 6),
  pluralPast: Word('завертелись', 6),
  imperativeInformal: Word('завертись', 6),
  imperativeFormal: Word('завертитесь', 6),
  imperfect: [],
};

perfectVerbs.set(завертеться.name.text, завертеться);

export { завертеться };