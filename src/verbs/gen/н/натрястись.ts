import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натрястись: PerfectVerb = {
  name: Word('натрястись', 7),
  singular1stPerson: Word('натрясусь', 6),
  singular2ndPerson: Word('натрясёшься', 6),
  singular3rdPerson: Word('натрясётся', 6),
  plural1stPerson: Word('натрясёмся', 6),
  plural2ndPerson: Word('натрясётесь', 6),
  plural3rdPerson: Word('натрясутся', 6),
  masculinePast: Word('натрясся', 4),
  femininePast: Word('натряслась', 7),
  neuterPast: Word('натряслось', 7),
  pluralPast: Word('натряслись', 7),
  imperativeInformal: Word('натрясись', 6),
  imperativeFormal: Word('натряситесь', 6),
  imperfect: [],
};

perfectVerbs.set(натрястись.name.text, натрястись);

export { натрястись };