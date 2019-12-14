import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбрестись: PerfectVerb = {
  name: Word('разбрестись', 8),
  singular1stPerson: Word('разбредусь', 7),
  singular2ndPerson: Word('разбредёшься', 1),
  singular3rdPerson: Word('разбредётся', 1),
  plural1stPerson: Word('разбредёмся', 1),
  plural2ndPerson: Word('разбредётесь', 1),
  plural3rdPerson: Word('разбредутся', 7),
  masculinePast: Word('разбрёлся', 1),
  femininePast: Word('разбрелась', 7),
  neuterPast: Word('разбрелось', 7),
  pluralPast: Word('разбрелись', 7),
  imperativeInformal: Word('разбредись', 7),
  imperativeFormal: Word('разбредитесь', 7),
  imperfect: [],
};

perfectVerbs.set(разбрестись.name.text, разбрестись);

export { разбрестись };