import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сморкнуться: PerfectVerb = {
  name: Word('сморкнуться', 6),
  singular1stPerson: Word('сморкнусь', 6),
  singular2ndPerson: Word('сморкнёшься', 6),
  singular3rdPerson: Word('сморкнётся', 6),
  plural1stPerson: Word('сморкнёмся', 6),
  plural2ndPerson: Word('сморкнётесь', 6),
  plural3rdPerson: Word('сморкнутся', 6),
  masculinePast: Word('сморкнулся', 6),
  femininePast: Word('сморкнулась', 6),
  neuterPast: Word('сморкнулось', 6),
  pluralPast: Word('сморкнулись', 6),
  imperativeInformal: Word('сморкнись', 6),
  imperativeFormal: Word('сморкнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(сморкнуться.name.text, сморкнуться);

export { сморкнуться };