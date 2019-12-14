import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжиться: PerfectVerb = {
  name: Word('разжиться', 4),
  singular1stPerson: Word('разживусь', 6),
  singular2ndPerson: Word('разживёшься', 6),
  singular3rdPerson: Word('разживётся', 6),
  plural1stPerson: Word('разживёмся', 6),
  plural2ndPerson: Word('разживётесь', 6),
  plural3rdPerson: Word('разживутся', 6),
  masculinePast: Word('разжился', 4),
  femininePast: Word('разжилась', 6),
  neuterPast: Word('разжилось//разжило'сь', 4),
  pluralPast: Word('разжились//разжили'сь', 4),
  imperativeInformal: Word('разживись', 6),
  imperativeFormal: Word('разживитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разжиться.name.text, разжиться);

export { разжиться };