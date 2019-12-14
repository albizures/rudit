import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жениться: PerfectVerb = {
  name: Word('жениться', 3),
  singular1stPerson: Word('женюсь', 3),
  singular2ndPerson: Word('женишься', 1),
  singular3rdPerson: Word('женится', 1),
  plural1stPerson: Word('женимся', 1),
  plural2ndPerson: Word('женитесь', 1),
  plural3rdPerson: Word('женятся', 1),
  masculinePast: Word('женился', 3),
  femininePast: Word('женилась', 3),
  neuterPast: Word('женилось', 3),
  pluralPast: Word('женились', 3),
  imperativeInformal: Word('женись', 3),
  imperativeFormal: Word('женитесь', 3),
  imperfect: [],
};

perfectVerbs.set(жениться.name.text, жениться);

export { жениться };