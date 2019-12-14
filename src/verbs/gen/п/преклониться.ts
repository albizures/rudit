import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преклониться: PerfectVerb = {
  name: Word('преклониться', 7),
  singular1stPerson: Word('преклонюсь', 7),
  singular2ndPerson: Word('преклонишься', 7),
  singular3rdPerson: Word('преклонится', 7),
  plural1stPerson: Word('преклонимся', 7),
  plural2ndPerson: Word('преклонитесь', 7),
  plural3rdPerson: Word('преклонятся', 7),
  masculinePast: Word('преклонился', 7),
  femininePast: Word('преклонилась', 7),
  neuterPast: Word('преклонилось', 7),
  pluralPast: Word('преклонились', 7),
  imperativeInformal: Word('преклонись', 7),
  imperativeFormal: Word('преклонитесь', 7),
  imperfect: [],
};

perfectVerbs.set(преклониться.name.text, преклониться);

export { преклониться };