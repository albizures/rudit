import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотащиться: PerfectVerb = {
  name: Word('дотащиться', 5),
  singular1stPerson: Word('дотащусь', 5),
  singular2ndPerson: Word('дотащишься', 3),
  singular3rdPerson: Word('дотащится', 3),
  plural1stPerson: Word('дотащимся', 3),
  plural2ndPerson: Word('дотащитесь', 3),
  plural3rdPerson: Word('дотащатся', 3),
  masculinePast: Word('дотащился', 5),
  femininePast: Word('дотащилась', 5),
  neuterPast: Word('дотащилось', 5),
  pluralPast: Word('дотащились', 5),
  imperativeInformal: Word('дотащись', 5),
  imperativeFormal: Word('дотащитесь', 5),
  imperfect: [],
};

perfectVerbs.set(дотащиться.name.text, дотащиться);

export { дотащиться };