import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const веселиться: PerfectVerb = {
  name: Word('веселиться', 5),
  singular1stPerson: Word('веселюсь', 5),
  singular2ndPerson: Word('веселишься', 5),
  singular3rdPerson: Word('веселится', 5),
  plural1stPerson: Word('веселимся', 5),
  plural2ndPerson: Word('веселитесь', 5),
  plural3rdPerson: Word('веселятся', 5),
  masculinePast: Word('веселился', 5),
  femininePast: Word('веселилась', 5),
  neuterPast: Word('веселилось', 5),
  pluralPast: Word('веселились', 5),
  imperativeInformal: Word('веселись', 5),
  imperativeFormal: Word('веселитесь', 5),
  imperfect: [],
};

perfectVerbs.set(веселиться.name.text, веселиться);

export { веселиться };