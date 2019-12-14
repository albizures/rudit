import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскормить: PerfectVerb = {
  name: Word('вскормить', 6),
  singular1stPerson: Word('вскормлю', 7),
  singular2ndPerson: Word('вскормишь', 3),
  singular3rdPerson: Word('вскормит', 3),
  plural1stPerson: Word('вскормим', 3),
  plural2ndPerson: Word('вскормите', 3),
  plural3rdPerson: Word('вскормят', 3),
  masculinePast: Word('вскормил', 6),
  femininePast: Word('вскормила', 6),
  neuterPast: Word('вскормило', 6),
  pluralPast: Word('вскормили', 6),
  imperativeInformal: Word('вскорми', 6),
  imperativeFormal: Word('вскормите', 6),
  imperfect: [],
};

perfectVerbs.set(вскормить.name.text, вскормить);

export { вскормить };