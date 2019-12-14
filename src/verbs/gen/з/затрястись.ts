import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затрястись: PerfectVerb = {
  name: Word('затрястись', 7),
  singular1stPerson: Word('затрясусь', 6),
  singular2ndPerson: Word('затрясёшься', 6),
  singular3rdPerson: Word('затрясётся', 6),
  plural1stPerson: Word('затрясёмся', 6),
  plural2ndPerson: Word('затрясётесь', 6),
  plural3rdPerson: Word('затрясутся', 6),
  masculinePast: Word('затрясся', 4),
  femininePast: Word('затряслась', 7),
  neuterPast: Word('затряслось', 7),
  pluralPast: Word('затряслись', 7),
  imperativeInformal: Word('затрясись', 6),
  imperativeFormal: Word('затряситесь', 6),
  imperfect: [],
};

perfectVerbs.set(затрястись.name.text, затрястись);

export { затрястись };