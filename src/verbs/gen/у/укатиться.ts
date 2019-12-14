import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укатиться: PerfectVerb = {
  name: Word('укатиться', 4),
  singular1stPerson: Word('укачусь', 4),
  singular2ndPerson: Word('укатишься', 2),
  singular3rdPerson: Word('укатится', 2),
  plural1stPerson: Word('укатимся', 2),
  plural2ndPerson: Word('укатитесь', 2),
  plural3rdPerson: Word('укатятся', 2),
  masculinePast: Word('укатился', 4),
  femininePast: Word('укатилась', 4),
  neuterPast: Word('укатилось', 4),
  pluralPast: Word('укатились', 4),
  imperativeInformal: Word('укатись', 4),
  imperativeFormal: Word('укатитесь', 4),
  imperfect: [],
};

perfectVerbs.set(укатиться.name.text, укатиться);

export { укатиться };