import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const определиться: PerfectVerb = {
  name: Word('определиться', 7),
  singular1stPerson: Word('определюсь', 7),
  singular2ndPerson: Word('определишься', 7),
  singular3rdPerson: Word('определится', 7),
  plural1stPerson: Word('определимся', 7),
  plural2ndPerson: Word('определитесь', 7),
  plural3rdPerson: Word('определятся', 7),
  masculinePast: Word('определился', 7),
  femininePast: Word('определилась', 7),
  neuterPast: Word('определилось', 7),
  pluralPast: Word('определились', 7),
  imperativeInformal: Word('определись', 7),
  imperativeFormal: Word('определитесь', 7),
  imperfect: ['определяться'],
};

perfectVerbs.set(определиться.name.text, определиться);

export { определиться };