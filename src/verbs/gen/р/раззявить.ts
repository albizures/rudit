import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раззявить: PerfectVerb = {
  name: Word('раззявить', 4),
  singular1stPerson: Word('раззявлю', 4),
  singular2ndPerson: Word('раззявишь', 4),
  singular3rdPerson: Word('раззявит', 4),
  plural1stPerson: Word('раззявим', 4),
  plural2ndPerson: Word('раззявите', 4),
  plural3rdPerson: Word('раззявят', 4),
  masculinePast: Word('раззявил', 4),
  femininePast: Word('раззявила', 4),
  neuterPast: Word('раззявило', 4),
  pluralPast: Word('раззявили', 4),
  imperativeInformal: Word('раззявь', 4),
  imperativeFormal: Word('раззявьте', 4),
  imperfect: [],
};

perfectVerbs.set(раззявить.name.text, раззявить);

export { раззявить };