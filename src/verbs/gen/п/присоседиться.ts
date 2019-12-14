import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присоседиться: PerfectVerb = {
  name: Word('присоседиться', 6),
  singular1stPerson: Word('присосежусь', 6),
  singular2ndPerson: Word('присоседишься', 6),
  singular3rdPerson: Word('присоседится', 6),
  plural1stPerson: Word('присоседимся', 6),
  plural2ndPerson: Word('присоседитесь', 6),
  plural3rdPerson: Word('присоседятся', 6),
  masculinePast: Word('присоседился', 6),
  femininePast: Word('присоседилась', 6),
  neuterPast: Word('присоседилось', 6),
  pluralPast: Word('присоседились', 6),
  imperativeInformal: Word('присоседься', 6),
  imperativeFormal: Word('присоседьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(присоседиться.name.text, присоседиться);

export { присоседиться };