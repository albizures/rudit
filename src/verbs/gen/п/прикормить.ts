import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикормить: PerfectVerb = {
  name: Word('прикормить', 7),
  singular1stPerson: Word('прикормлю', 8),
  singular2ndPerson: Word('прикормишь', 4),
  singular3rdPerson: Word('прикормит', 4),
  plural1stPerson: Word('прикормим', 4),
  plural2ndPerson: Word('прикормите', 4),
  plural3rdPerson: Word('прикормят', 4),
  masculinePast: Word('прикормил', 7),
  femininePast: Word('прикормила', 7),
  neuterPast: Word('прикормило', 7),
  pluralPast: Word('прикормили', 7),
  imperativeInformal: Word('прикорми', 7),
  imperativeFormal: Word('прикормите', 7),
  imperfect: [],
};

perfectVerbs.set(прикормить.name.text, прикормить);

export { прикормить };