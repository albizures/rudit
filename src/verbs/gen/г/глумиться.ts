import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глумиться: PerfectVerb = {
  name: Word('глумиться', 4),
  singular1stPerson: Word('глумлюсь', 5),
  singular2ndPerson: Word('глумишься', 4),
  singular3rdPerson: Word('глумится', 4),
  plural1stPerson: Word('глумимся', 4),
  plural2ndPerson: Word('глумитесь', 4),
  plural3rdPerson: Word('глумятся', 4),
  masculinePast: Word('глумился', 4),
  femininePast: Word('глумилась', 4),
  neuterPast: Word('глумилось', 4),
  pluralPast: Word('глумились', 4),
  imperativeInformal: Word('глумись', 4),
  imperativeFormal: Word('глумитесь', 4),
  imperfect: [],
};

perfectVerbs.set(глумиться.name.text, глумиться);

export { глумиться };