import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const селиться: PerfectVerb = {
  name: Word('селиться', 3),
  singular1stPerson: Word('селюсь', 3),
  singular2ndPerson: Word('селишься', 3),
  singular3rdPerson: Word('селится', 3),
  plural1stPerson: Word('селимся', 3),
  plural2ndPerson: Word('селитесь', 3),
  plural3rdPerson: Word('селятся', 3),
  masculinePast: Word('селился', 3),
  femininePast: Word('селилась', 3),
  neuterPast: Word('селилось', 3),
  pluralPast: Word('селились', 3),
  imperativeInformal: Word('селись', 3),
  imperativeFormal: Word('селитесь', 3),
  imperfect: [],
};

perfectVerbs.set(селиться.name.text, селиться);

export { селиться };