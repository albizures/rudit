import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понестись: PerfectVerb = {
  name: Word('понестись', 6),
  singular1stPerson: Word('понесусь', 5),
  singular2ndPerson: Word('понесёшься', 3),
  singular3rdPerson: Word('понесётся', 3),
  plural1stPerson: Word('понесёмся', 3),
  plural2ndPerson: Word('понесётесь', 3),
  plural3rdPerson: Word('понесутся', 5),
  masculinePast: Word('понёсся', 1),
  femininePast: Word('понеслась', 6),
  neuterPast: Word('понеслось', 6),
  pluralPast: Word('понеслись', 6),
  imperativeInformal: Word('понесись', 5),
  imperativeFormal: Word('понеситесь', 5),
  imperfect: [],
};

perfectVerbs.set(понестись.name.text, понестись);

export { понестись };