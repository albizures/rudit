import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поверить: PerfectVerb = {
  name: Word('поверить', 3),
  singular1stPerson: Word('поверю', 3),
  singular2ndPerson: Word('поверишь', 3),
  singular3rdPerson: Word('поверит', 3),
  plural1stPerson: Word('поверим', 3),
  plural2ndPerson: Word('поверите', 3),
  plural3rdPerson: Word('поверят', 3),
  masculinePast: Word('поверил', 3),
  femininePast: Word('поверила', 3),
  neuterPast: Word('поверило', 3),
  pluralPast: Word('поверили', 3),
  imperativeInformal: Word('поверь', 3),
  imperativeFormal: Word('поверьте', 3),
  imperfect: ['верить','поверять'],
};

perfectVerbs.set(поверить.name.text, поверить);

export { поверить };