import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const копиться: PerfectVerb = {
  name: Word('копиться', 3),
  singular1stPerson: Word('коплюсь', 4),
  singular2ndPerson: Word('копишься', 1),
  singular3rdPerson: Word('копится', 1),
  plural1stPerson: Word('копимся', 1),
  plural2ndPerson: Word('копитесь', 1),
  plural3rdPerson: Word('копятся', 1),
  masculinePast: Word('копился', 3),
  femininePast: Word('копилась', 3),
  neuterPast: Word('копилось', 3),
  pluralPast: Word('копились', 3),
  imperativeInformal: Word('копись', 3),
  imperativeFormal: Word('копитесь', 3),
  imperfect: [],
};

perfectVerbs.set(копиться.name.text, копиться);

export { копиться };