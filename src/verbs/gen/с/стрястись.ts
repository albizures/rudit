import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стрястись: PerfectVerb = {
  name: Word('стрястись', 6),
  singular1stPerson: Word('стрясусь', 5),
  singular2ndPerson: Word('стрясёшься', 3),
  singular3rdPerson: Word('стрясётся', 3),
  plural1stPerson: Word('стрясёмся', 3),
  plural2ndPerson: Word('стрясётесь', 7),
  plural3rdPerson: Word('стрясутся', 5),
  masculinePast: Word('стрясся', 3),
  femininePast: Word('стряслась', 6),
  neuterPast: Word('стряслось', 6),
  pluralPast: Word('стряслись', 6),
  imperativeInformal: Word('стрясись', 5),
  imperativeFormal: Word('стряситесь', 5),
  imperfect: [],
};

perfectVerbs.set(стрястись.name.text, стрястись);

export { стрястись };