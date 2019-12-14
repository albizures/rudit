import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завязаться: PerfectVerb = {
  name: Word('завязаться', 5),
  singular1stPerson: Word('завяжусь', 5),
  singular2ndPerson: Word('завяжешься', 3),
  singular3rdPerson: Word('завяжется', 3),
  plural1stPerson: Word('завяжемся', 3),
  plural2ndPerson: Word('завяжетесь', 3),
  plural3rdPerson: Word('завяжутся', 3),
  masculinePast: Word('завязался', 5),
  femininePast: Word('завязалась', 5),
  neuterPast: Word('завязалось', 5),
  pluralPast: Word('завязались', 5),
  imperativeInformal: Word('завяжись', 5),
  imperativeFormal: Word('завяжитесь', 5),
  imperfect: [],
};

perfectVerbs.set(завязаться.name.text, завязаться);

export { завязаться };