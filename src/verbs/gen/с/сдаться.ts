import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдаться: PerfectVerb = {
  name: Word('сдаться', 2),
  singular1stPerson: Word('сдамся', 2),
  singular2ndPerson: Word('сдашься', 2),
  singular3rdPerson: Word('сдастся', 2),
  plural1stPerson: Word('сдадимся', 4),
  plural2ndPerson: Word('сдадитесь', 4),
  plural3rdPerson: Word('сдадутся', 4),
  masculinePast: Word('сдался', 2),
  femininePast: Word('сдалась', 4),
  neuterPast: Word('сдалось,сдало'сь', 2),
  pluralPast: Word('сдались', 2),
  imperativeInformal: Word('сдайся', 2),
  imperativeFormal: Word('сдайтесь', 2),
  imperfect: ['сдаваться'],
};

perfectVerbs.set(сдаться.name.text, сдаться);

export { сдаться };