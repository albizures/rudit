import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плюхнуться: PerfectVerb = {
  name: Word('плюхнуться', 2),
  singular1stPerson: Word('плюхнусь', 2),
  singular2ndPerson: Word('плюхнешься', 2),
  singular3rdPerson: Word('плюхнется', 2),
  plural1stPerson: Word('плюхнемся', 2),
  plural2ndPerson: Word('плюхнетесь', 2),
  plural3rdPerson: Word('плюхнутся', 2),
  masculinePast: Word('плюхнулся', 2),
  femininePast: Word('плюхнулась', 2),
  neuterPast: Word('плюхнулось', 2),
  pluralPast: Word('плюхнулись', 2),
  imperativeInformal: Word('плюхнись', 2),
  imperativeFormal: Word('плюхнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(плюхнуться.name.text, плюхнуться);

export { плюхнуться };