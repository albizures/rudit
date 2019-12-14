import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвязаться: PerfectVerb = {
  name: Word('подвязаться', 6),
  singular1stPerson: Word('подвяжусь', 6),
  singular2ndPerson: Word('подвяжешься', 4),
  singular3rdPerson: Word('подвяжется', 4),
  plural1stPerson: Word('подвяжемся', 4),
  plural2ndPerson: Word('подвяжетесь', 4),
  plural3rdPerson: Word('подвяжутся', 4),
  masculinePast: Word('подвязался', 6),
  femininePast: Word('подвязалась', 6),
  neuterPast: Word('подвязалось', 6),
  pluralPast: Word('подвязались', 6),
  imperativeInformal: Word('подвяжись', 6),
  imperativeFormal: Word('подвяжитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подвязаться.name.text, подвязаться);

export { подвязаться };