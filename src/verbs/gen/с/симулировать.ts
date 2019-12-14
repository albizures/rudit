import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const симулировать: PerfectVerb = {
  name: Word('симулировать', 5),
  singular1stPerson: Word('симулирую', 5),
  singular2ndPerson: Word('симулируешь', 5),
  singular3rdPerson: Word('симулирует', 5),
  plural1stPerson: Word('симулируем', 5),
  plural2ndPerson: Word('симулируете', 5),
  plural3rdPerson: Word('симулируют', 5),
  masculinePast: Word('симулировал', 5),
  femininePast: Word('симулировала', 5),
  neuterPast: Word('симулировало', 5),
  pluralPast: Word('симулировали', 5),
  imperativeInformal: Word('симулируй', 5),
  imperativeFormal: Word('симулируйте', 5),
  imperfect: [],
};

perfectVerbs.set(симулировать.name.text, симулировать);

export { симулировать };