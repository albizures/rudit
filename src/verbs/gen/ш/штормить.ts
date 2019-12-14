import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const штормить: PerfectVerb = {
  name: Word('штормить', 5),
  singular1stPerson: Word('штормлю', 6),
  singular2ndPerson: Word('штормишь', 5),
  singular3rdPerson: Word('штормит', 5),
  plural1stPerson: Word('штормим', 5),
  plural2ndPerson: Word('штормите', 5),
  plural3rdPerson: Word('штормят', 5),
  masculinePast: Word('штормил', 5),
  femininePast: Word('штормила', 5),
  neuterPast: Word('штормило', 5),
  pluralPast: Word('штормили', 5),
  imperativeInformal: Word('шторми', 5),
  imperativeFormal: Word('штормите', 5),
  imperfect: [],
};

perfectVerbs.set(штормить.name.text, штормить);

export { штормить };