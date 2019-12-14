import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обязаться: PerfectVerb = {
  name: Word('обязаться', 4),
  singular1stPerson: Word('обяжусь', 4),
  singular2ndPerson: Word('обяжешься', 2),
  singular3rdPerson: Word('обяжется', 2),
  plural1stPerson: Word('обяжемся', 2),
  plural2ndPerson: Word('обяжетесь', 2),
  plural3rdPerson: Word('обяжутся', 2),
  masculinePast: Word('обязался', 4),
  femininePast: Word('обязалась', 4),
  neuterPast: Word('обязалось', 4),
  pluralPast: Word('обязались', 4),
  imperativeInformal: Word('обяжись', 4),
  imperativeFormal: Word('обяжитесь', 4),
  imperfect: ['обязываться'],
};

perfectVerbs.set(обязаться.name.text, обязаться);

export { обязаться };