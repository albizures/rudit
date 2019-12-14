import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трястись: PerfectVerb = {
  name: Word('трястись', 5),
  singular1stPerson: Word('трясусь', 4),
  singular2ndPerson: Word('трясёшься', 4),
  singular3rdPerson: Word('трясётся', 4),
  plural1stPerson: Word('трясёмся', 4),
  plural2ndPerson: Word('трясётесь', 4),
  plural3rdPerson: Word('трясутся', 4),
  masculinePast: Word('трясся', 2),
  femininePast: Word('тряслась', 5),
  neuterPast: Word('тряслось', 5),
  pluralPast: Word('тряслись', 5),
  imperativeInformal: Word('трясись', 4),
  imperativeFormal: Word('тряситесь', 4),
  imperfect: [],
};

perfectVerbs.set(трястись.name.text, трястись);

export { трястись };