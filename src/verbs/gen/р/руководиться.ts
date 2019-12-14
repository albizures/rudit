import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const руководиться: PerfectVerb = {
  name: Word('руководиться', 7),
  singular1stPerson: Word('руковожусь', 7),
  singular2ndPerson: Word('руководишься', 7),
  singular3rdPerson: Word('руководится', 7),
  plural1stPerson: Word('руководимся', 7),
  plural2ndPerson: Word('руководитесь', 7),
  plural3rdPerson: Word('руководятся', 7),
  masculinePast: Word('руководился', 7),
  femininePast: Word('руководилась', 7),
  neuterPast: Word('руководилось', 7),
  pluralPast: Word('руководились', 7),
  imperativeInformal: Word('руководись', 7),
  imperativeFormal: Word('руководитесь', 7),
  imperfect: [],
};

perfectVerbs.set(руководиться.name.text, руководиться);

export { руководиться };