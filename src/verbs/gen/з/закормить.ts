import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закормить: PerfectVerb = {
  name: Word('закормить', 6),
  singular1stPerson: Word('закормлю', 7),
  singular2ndPerson: Word('закормишь', 3),
  singular3rdPerson: Word('закормит', 3),
  plural1stPerson: Word('закормим', 3),
  plural2ndPerson: Word('закормите', 3),
  plural3rdPerson: Word('закормят', 3),
  masculinePast: Word('закормил', 6),
  femininePast: Word('закормила', 6),
  neuterPast: Word('закормило', 6),
  pluralPast: Word('закормили', 6),
  imperativeInformal: Word('закорми', 6),
  imperativeFormal: Word('закормите', 6),
  imperfect: [],
};

perfectVerbs.set(закормить.name.text, закормить);

export { закормить };