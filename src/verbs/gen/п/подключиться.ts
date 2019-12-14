import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подключиться: PerfectVerb = {
  name: Word('подключиться', 7),
  singular1stPerson: Word('подключусь', 7),
  singular2ndPerson: Word('подключишься', 7),
  singular3rdPerson: Word('подключится', 7),
  plural1stPerson: Word('подключимся', 7),
  plural2ndPerson: Word('подключитесь', 7),
  plural3rdPerson: Word('подключатся', 7),
  masculinePast: Word('подключился', 7),
  femininePast: Word('подключилась', 7),
  neuterPast: Word('подключилось', 7),
  pluralPast: Word('подключились', 7),
  imperativeInformal: Word('подключись', 7),
  imperativeFormal: Word('подключитесь', 7),
  imperfect: [],
};

perfectVerbs.set(подключиться.name.text, подключиться);

export { подключиться };