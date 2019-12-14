import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распространиться: PerfectVerb = {
  name: Word('распространиться', 11),
  singular1stPerson: Word('распространюсь', 11),
  singular2ndPerson: Word('распространишься', 11),
  singular3rdPerson: Word('распространится', 11),
  plural1stPerson: Word('распространимся', 11),
  plural2ndPerson: Word('распространитесь', 11),
  plural3rdPerson: Word('распространятся', 11),
  masculinePast: Word('распространился', 11),
  femininePast: Word('распространилась', 11),
  neuterPast: Word('распространилось', 11),
  pluralPast: Word('распространились', 11),
  imperativeInformal: Word('распространись', 11),
  imperativeFormal: Word('распространитесь', 11),
  imperfect: [],
};

perfectVerbs.set(распространиться.name.text, распространиться);

export { распространиться };