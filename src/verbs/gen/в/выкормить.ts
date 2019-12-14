import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкормить: PerfectVerb = {
  name: Word('выкормить', 1),
  singular1stPerson: Word('выкормлю', 1),
  singular2ndPerson: Word('выкормишь', 1),
  singular3rdPerson: Word('выкормит', 1),
  plural1stPerson: Word('выкормим', 1),
  plural2ndPerson: Word('выкормите', 1),
  plural3rdPerson: Word('выкормят', 1),
  masculinePast: Word('выкормил', 1),
  femininePast: Word('выкормила', 1),
  neuterPast: Word('выкормило', 1),
  pluralPast: Word('выкормили', 1),
  imperativeInformal: Word('выкорми', 1),
  imperativeFormal: Word('выкормите', 1),
  imperfect: [],
};

perfectVerbs.set(выкормить.name.text, выкормить);

export { выкормить };