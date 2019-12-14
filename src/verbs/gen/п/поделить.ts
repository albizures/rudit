import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поделить: PerfectVerb = {
  name: Word('поделить', 5),
  singular1stPerson: Word('поделю', 5),
  singular2ndPerson: Word('поделишь', 3),
  singular3rdPerson: Word('поделит', 3),
  plural1stPerson: Word('поделим', 3),
  plural2ndPerson: Word('поделите', 3),
  plural3rdPerson: Word('поделят', 3),
  masculinePast: Word('поделил', 5),
  femininePast: Word('поделила', 5),
  neuterPast: Word('поделило', 5),
  pluralPast: Word('поделили', 5),
  imperativeInformal: Word('подели', 5),
  imperativeFormal: Word('поделите', 5),
  imperfect: [],
};

perfectVerbs.set(поделить.name.text, поделить);

export { поделить };