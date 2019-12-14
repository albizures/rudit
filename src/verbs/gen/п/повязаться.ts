import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повязаться: PerfectVerb = {
  name: Word('повязаться', 5),
  singular1stPerson: Word('повяжусь', 5),
  singular2ndPerson: Word('повяжешься', 3),
  singular3rdPerson: Word('повяжется', 3),
  plural1stPerson: Word('повяжемся', 3),
  plural2ndPerson: Word('повяжетесь', 3),
  plural3rdPerson: Word('повяжутся', 3),
  masculinePast: Word('повязался', 5),
  femininePast: Word('повязалась', 5),
  neuterPast: Word('повязалось', 5),
  pluralPast: Word('повязались', 5),
  imperativeInformal: Word('повяжись', 5),
  imperativeFormal: Word('повяжитесь', 5),
  imperfect: [],
};

perfectVerbs.set(повязаться.name.text, повязаться);

export { повязаться };