import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const теплить: PerfectVerb = {
  name: Word('теплить', 4),
  singular1stPerson: Word('теплю', 4),
  singular2ndPerson: Word('теплишь', 4),
  singular3rdPerson: Word('теплит', 4),
  plural1stPerson: Word('теплим', 4),
  plural2ndPerson: Word('теплите', 4),
  plural3rdPerson: Word('теплят', 4),
  masculinePast: Word('теплил', 4),
  femininePast: Word('теплила', 4),
  neuterPast: Word('теплило', 4),
  pluralPast: Word('теплили', 4),
  imperativeInformal: Word('тепли', 4),
  imperativeFormal: Word('теплите', 4),
  imperfect: [],
};

perfectVerbs.set(теплить.name.text, теплить);

export { теплить };