import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевестись: PerfectVerb = {
  name: Word('перевестись', 8),
  singular1stPerson: Word('переведусь', 7),
  singular2ndPerson: Word('переведёшься', 7),
  singular3rdPerson: Word('переведётся', 7),
  plural1stPerson: Word('переведёмся', 7),
  plural2ndPerson: Word('переведётесь', 7),
  plural3rdPerson: Word('переведутся', 7),
  masculinePast: Word('перевёлся', 5),
  femininePast: Word('перевелась', 7),
  neuterPast: Word('перевелось', 7),
  pluralPast: Word('перевелись', 7),
  imperativeInformal: Word('переведись', 7),
  imperativeFormal: Word('переведитесь', 7),
  imperfect: [],
};

perfectVerbs.set(перевестись.name.text, перевестись);

export { перевестись };