import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвязаться: PerfectVerb = {
  name: Word('обвязаться', 5),
  singular1stPerson: Word('обвяжусь', 5),
  singular2ndPerson: Word('обвяжешься', 3),
  singular3rdPerson: Word('обвяжется', 3),
  plural1stPerson: Word('обвяжемся', 3),
  plural2ndPerson: Word('обвяжетесь', 3),
  plural3rdPerson: Word('обвяжутся', 3),
  masculinePast: Word('обвязался', 5),
  femininePast: Word('обвязалась', 5),
  neuterPast: Word('обвязалось', 5),
  pluralPast: Word('обвязались', 5),
  imperativeInformal: Word('обвяжись', 5),
  imperativeFormal: Word('обвяжитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обвязаться.name.text, обвязаться);

export { обвязаться };