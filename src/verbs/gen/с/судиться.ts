import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const судиться: PerfectVerb = {
  name: Word('судиться', 3),
  singular1stPerson: Word('сужусь', 3),
  singular2ndPerson: Word('судишься', 1),
  singular3rdPerson: Word('судится', 1),
  plural1stPerson: Word('судимся', 1),
  plural2ndPerson: Word('судитесь', 1),
  plural3rdPerson: Word('судятся', 1),
  masculinePast: Word('судился', 3),
  femininePast: Word('судилась', 3),
  neuterPast: Word('судилось', 3),
  pluralPast: Word('судились', 3),
  imperativeInformal: Word('судись', 3),
  imperativeFormal: Word('судитесь', 3),
  imperfect: [],
};

perfectVerbs.set(судиться.name.text, судиться);

export { судиться };