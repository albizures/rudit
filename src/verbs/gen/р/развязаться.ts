import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развязаться: PerfectVerb = {
  name: Word('развязаться', 6),
  singular1stPerson: Word('развяжусь', 6),
  singular2ndPerson: Word('развяжешься', 4),
  singular3rdPerson: Word('развяжется', 4),
  plural1stPerson: Word('развяжемся', 4),
  plural2ndPerson: Word('развяжетесь', 4),
  plural3rdPerson: Word('развяжутся', 4),
  masculinePast: Word('развязался', 6),
  femininePast: Word('развязалась', 6),
  neuterPast: Word('развязалось', 6),
  pluralPast: Word('развязались', 6),
  imperativeInformal: Word('развяжись', 6),
  imperativeFormal: Word('развяжитесь', 6),
  imperfect: [],
};

perfectVerbs.set(развязаться.name.text, развязаться);

export { развязаться };