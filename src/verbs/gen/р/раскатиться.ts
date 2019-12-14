import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскатиться: PerfectVerb = {
  name: Word('раскатиться', 6),
  singular1stPerson: Word('раскачусь', 6),
  singular2ndPerson: Word('раскатишься', 4),
  singular3rdPerson: Word('раскатится', 4),
  plural1stPerson: Word('раскатимся', 4),
  plural2ndPerson: Word('раскатитесь', 4),
  plural3rdPerson: Word('раскатятся', 4),
  masculinePast: Word('раскатился', 6),
  femininePast: Word('раскатилась', 6),
  neuterPast: Word('раскатилось', 6),
  pluralPast: Word('раскатились', 6),
  imperativeInformal: Word('раскатись', 6),
  imperativeFormal: Word('раскатитесь', 6),
  imperfect: [],
};

perfectVerbs.set(раскатиться.name.text, раскатиться);

export { раскатиться };