import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const числиться: PerfectVerb = {
  name: Word('числиться', 1),
  singular1stPerson: Word('числюсь', 1),
  singular2ndPerson: Word('числишься', 1),
  singular3rdPerson: Word('числится', 1),
  plural1stPerson: Word('числимся', 1),
  plural2ndPerson: Word('числитесь', 1),
  plural3rdPerson: Word('числятся', 1),
  masculinePast: Word('числился', 1),
  femininePast: Word('числилась', 1),
  neuterPast: Word('числилось', 1),
  pluralPast: Word('числились', 1),
  imperativeInformal: Word('числись', 1),
  imperativeFormal: Word('числитесь', 1),
  imperfect: [],
};

perfectVerbs.set(числиться.name.text, числиться);

export { числиться };