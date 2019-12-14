import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сузиться: PerfectVerb = {
  name: Word('сузиться', 1),
  singular1stPerson: Word('сужусь', 1),
  singular2ndPerson: Word('сузишься', 1),
  singular3rdPerson: Word('сузится', 1),
  plural1stPerson: Word('сузимся', 1),
  plural2ndPerson: Word('сузитесь', 1),
  plural3rdPerson: Word('сузятся', 1),
  masculinePast: Word('сузился', 1),
  femininePast: Word('сузилась', 1),
  neuterPast: Word('сузилось', 1),
  pluralPast: Word('сузились', 1),
  imperativeInformal: Word('сузься', 1),
  imperativeFormal: Word('сузьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(сузиться.name.text, сузиться);

export { сузиться };