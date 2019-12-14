import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заняться: PerfectVerb = {
  name: Word('заняться', 3),
  singular1stPerson: Word('займусь', 4),
  singular2ndPerson: Word('займёшься', 4),
  singular3rdPerson: Word('займётся', 4),
  plural1stPerson: Word('займёмся', 4),
  plural2ndPerson: Word('займётесь', 4),
  plural3rdPerson: Word('займутся', 4),
  masculinePast: Word('занялся,занялся',заня'лся', 1),
  femininePast: Word('занялась', 5),
  neuterPast: Word('занялось,за'нялось', 5),
  pluralPast: Word('занялись,за'нялись', 5),
  imperativeInformal: Word('займись', 4),
  imperativeFormal: Word('займитесь', 4),
  imperfect: ['заниматься'],
};

perfectVerbs.set(заняться.name.text, заняться);

export { заняться };