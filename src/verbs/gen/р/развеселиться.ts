import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развеселиться: PerfectVerb = {
  name: Word('развеселиться', 8),
  singular1stPerson: Word('развеселюсь', 8),
  singular2ndPerson: Word('развеселишься', 8),
  singular3rdPerson: Word('развеселится', 8),
  plural1stPerson: Word('развеселимся', 8),
  plural2ndPerson: Word('развеселитесь', 8),
  plural3rdPerson: Word('развеселятся', 8),
  masculinePast: Word('развеселился', 8),
  femininePast: Word('развеселилась', 8),
  neuterPast: Word('развеселилось', 8),
  pluralPast: Word('развеселились', 8),
  imperativeInformal: Word('развеселись', 8),
  imperativeFormal: Word('развеселитесь', 8),
  imperfect: [],
};

perfectVerbs.set(развеселиться.name.text, развеселиться);

export { развеселиться };