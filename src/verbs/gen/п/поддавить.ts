import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддавить: PerfectVerb = {
  name: Word('поддавить', 6),
  singular1stPerson: Word('поддавлю', 7),
  singular2ndPerson: Word('поддавишь', 4),
  singular3rdPerson: Word('поддавит', 4),
  plural1stPerson: Word('поддавим', 4),
  plural2ndPerson: Word('поддавите', 4),
  plural3rdPerson: Word('поддавят', 4),
  masculinePast: Word('поддавил', 6),
  femininePast: Word('поддавила', 6),
  neuterPast: Word('поддавило', 6),
  pluralPast: Word('поддавили', 6),
  imperativeInformal: Word('поддави', 6),
  imperativeFormal: Word('поддавите', 6),
  imperfect: [],
};

perfectVerbs.set(поддавить.name.text, поддавить);

export { поддавить };