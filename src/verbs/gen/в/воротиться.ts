import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воротиться: PerfectVerb = {
  name: Word('воротиться', 5),
  singular1stPerson: Word('ворочусь', 5),
  singular2ndPerson: Word('воротишься', 3),
  singular3rdPerson: Word('воротится', 3),
  plural1stPerson: Word('воротимся', 3),
  plural2ndPerson: Word('воротитесь', 3),
  plural3rdPerson: Word('воротятся', 3),
  masculinePast: Word('воротился', 5),
  femininePast: Word('воротилась', 5),
  neuterPast: Word('воротилось', 5),
  pluralPast: Word('воротились', 5),
  imperativeInformal: Word('воротись', 5),
  imperativeFormal: Word('воротитесь', 5),
  imperfect: [],
};

perfectVerbs.set(воротиться.name.text, воротиться);

export { воротиться };