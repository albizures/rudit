import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стимулировать: PerfectVerb = {
  name: Word('стимулировать', 6),
  singular1stPerson: Word('стимулирую', 6),
  singular2ndPerson: Word('стимулируешь', 6),
  singular3rdPerson: Word('стимулирует', 6),
  plural1stPerson: Word('стимулируем', 6),
  plural2ndPerson: Word('стимулируете', 6),
  plural3rdPerson: Word('стимулируют', 6),
  masculinePast: Word('стимулировал', 6),
  femininePast: Word('стимулировала', 6),
  neuterPast: Word('стимулировало', 6),
  pluralPast: Word('стимулировали', 6),
  imperativeInformal: Word('стимулируй', 6),
  imperativeFormal: Word('стимулируйте', 6),
  imperfect: [],
};

perfectVerbs.set(стимулировать.name.text, стимулировать);

export { стимулировать };