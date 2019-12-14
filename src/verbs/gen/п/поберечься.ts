import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поберечься: PerfectVerb = {
  name: Word('поберечься', 5),
  singular1stPerson: Word('поберегусь', 7),
  singular2ndPerson: Word('побережёшься', 3),
  singular3rdPerson: Word('побережётся', 3),
  plural1stPerson: Word('побережёмся', 3),
  plural2ndPerson: Word('побережётесь', 3),
  plural3rdPerson: Word('поберегутся', 7),
  masculinePast: Word('поберёгся', 3),
  femininePast: Word('побереглась', 8),
  neuterPast: Word('побереглось', 8),
  pluralPast: Word('побереглись', 8),
  imperativeInformal: Word('поберегись', 7),
  imperativeFormal: Word('поберегитесь', 7),
  imperfect: [],
};

perfectVerbs.set(поберечься.name.text, поберечься);

export { поберечься };