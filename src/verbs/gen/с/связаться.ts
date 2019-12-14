import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const связаться: PerfectVerb = {
  name: Word('связаться', 4),
  singular1stPerson: Word('свяжусь', 4),
  singular2ndPerson: Word('свяжешься', 2),
  singular3rdPerson: Word('свяжется', 2),
  plural1stPerson: Word('свяжемся', 2),
  plural2ndPerson: Word('свяжетесь', 2),
  plural3rdPerson: Word('свяжутся', 2),
  masculinePast: Word('связался', 4),
  femininePast: Word('связалась', 4),
  neuterPast: Word('связалось', 4),
  pluralPast: Word('связались', 4),
  imperativeInformal: Word('свяжись', 4),
  imperativeFormal: Word('свяжитесь', 4),
  imperfect: [],
};

perfectVerbs.set(связаться.name.text, связаться);

export { связаться };