import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const платить: PerfectVerb = {
  name: Word('платить', 4),
  singular1stPerson: Word('плачу', 4),
  singular2ndPerson: Word('платишь', 2),
  singular3rdPerson: Word('платит', 2),
  plural1stPerson: Word('платим', 2),
  plural2ndPerson: Word('платите', 2),
  plural3rdPerson: Word('платят', 2),
  masculinePast: Word('платил', 4),
  femininePast: Word('платила', 4),
  neuterPast: Word('платило', 4),
  pluralPast: Word('платили', 4),
  imperativeInformal: Word('плати', 4),
  imperativeFormal: Word('платите', 4),
  imperfect: ['заплатить','уплатить'],
};

perfectVerbs.set(платить.name.text, платить);

export { платить };