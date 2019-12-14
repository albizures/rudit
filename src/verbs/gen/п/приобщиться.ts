import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приобщиться: PerfectVerb = {
  name: Word('приобщиться', 6),
  singular1stPerson: Word('приобщусь', 6),
  singular2ndPerson: Word('приобщишься', 6),
  singular3rdPerson: Word('приобщится', 6),
  plural1stPerson: Word('приобщимся', 6),
  plural2ndPerson: Word('приобщитесь', 6),
  plural3rdPerson: Word('приобщатся', 6),
  masculinePast: Word('приобщился', 6),
  femininePast: Word('приобщилась', 6),
  neuterPast: Word('приобщилось', 6),
  pluralPast: Word('приобщились', 6),
  imperativeInformal: Word('приобщись', 6),
  imperativeFormal: Word('приобщитесь', 6),
  imperfect: [],
};

perfectVerbs.set(приобщиться.name.text, приобщиться);

export { приобщиться };