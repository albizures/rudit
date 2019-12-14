import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скатиться: PerfectVerb = {
  name: Word('скатиться', 4),
  singular1stPerson: Word('скачусь', 4),
  singular2ndPerson: Word('скатишься', 2),
  singular3rdPerson: Word('скатится', 2),
  plural1stPerson: Word('скатимся', 2),
  plural2ndPerson: Word('скатитесь', 2),
  plural3rdPerson: Word('скатятся', 2),
  masculinePast: Word('скатился', 4),
  femininePast: Word('скатилась', 4),
  neuterPast: Word('скатилось', 4),
  pluralPast: Word('скатились', 4),
  imperativeInformal: Word('скатись', 4),
  imperativeFormal: Word('скатитесь', 4),
  imperfect: [],
};

perfectVerbs.set(скатиться.name.text, скатиться);

export { скатиться };