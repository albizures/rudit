import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жилиться: PerfectVerb = {
  name: Word('жилиться', 1),
  singular1stPerson: Word('жилюсь', 1),
  singular2ndPerson: Word('жилишься', 1),
  singular3rdPerson: Word('жилится', 1),
  plural1stPerson: Word('жилимся', 1),
  plural2ndPerson: Word('жилитесь', 1),
  plural3rdPerson: Word('жилятся', 1),
  masculinePast: Word('жилился', 1),
  femininePast: Word('жилилась', 1),
  neuterPast: Word('жилилось', 1),
  pluralPast: Word('жилились', 1),
  imperativeInformal: Word('жилься', 1),
  imperativeFormal: Word('жильтесь', 1),
  imperfect: [],
};

perfectVerbs.set(жилиться.name.text, жилиться);

export { жилиться };