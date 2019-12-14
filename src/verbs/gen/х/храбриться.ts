import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const храбриться: PerfectVerb = {
  name: Word('храбриться', 5),
  singular1stPerson: Word('храбрюсь', 5),
  singular2ndPerson: Word('храбришься', 5),
  singular3rdPerson: Word('храбрится', 5),
  plural1stPerson: Word('храбримся', 5),
  plural2ndPerson: Word('храбритесь', 5),
  plural3rdPerson: Word('храбрятся', 5),
  masculinePast: Word('храбрился', 5),
  femininePast: Word('храбрилась', 5),
  neuterPast: Word('храбрилось', 5),
  pluralPast: Word('храбрились', 5),
  imperativeInformal: Word('храбрись', 5),
  imperativeFormal: Word('храбритесь', 5),
  imperfect: [],
};

perfectVerbs.set(храбриться.name.text, храбриться);

export { храбриться };