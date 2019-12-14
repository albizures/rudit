import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжиться: PerfectVerb = {
  name: Word('обжиться', 3),
  singular1stPerson: Word('обживусь', 5),
  singular2ndPerson: Word('обживёшься', 5),
  singular3rdPerson: Word('обживётся', 5),
  plural1stPerson: Word('обживёмся', 5),
  plural2ndPerson: Word('обживётесь', 5),
  plural3rdPerson: Word('обживутся', 5),
  masculinePast: Word('обжился', 3),
  femininePast: Word('обжилась', 5),
  neuterPast: Word('обжилось//обжило'сь', 3),
  pluralPast: Word('обжились//обжили'сь', 3),
  imperativeInformal: Word('обживись', 5),
  imperativeFormal: Word('обживитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обжиться.name.text, обжиться);

export { обжиться };