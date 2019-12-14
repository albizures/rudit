import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повеселиться: PerfectVerb = {
  name: Word('повеселиться', 7),
  singular1stPerson: Word('повеселюсь', 7),
  singular2ndPerson: Word('повеселишься', 7),
  singular3rdPerson: Word('повеселится', 7),
  plural1stPerson: Word('повеселимся', 7),
  plural2ndPerson: Word('повеселитесь', 7),
  plural3rdPerson: Word('повеселятся', 7),
  masculinePast: Word('повеселился', 7),
  femininePast: Word('повеселилась', 7),
  neuterPast: Word('повеселилось', 7),
  pluralPast: Word('повеселились', 7),
  imperativeInformal: Word('повеселись', 7),
  imperativeFormal: Word('повеселитесь', 7),
  imperfect: [],
};

perfectVerbs.set(повеселиться.name.text, повеселиться);

export { повеселиться };