import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокормить: PerfectVerb = {
  name: Word('прокормить', 7),
  singular1stPerson: Word('прокормлю', 8),
  singular2ndPerson: Word('прокормишь', 4),
  singular3rdPerson: Word('прокормит', 4),
  plural1stPerson: Word('прокормим', 4),
  plural2ndPerson: Word('прокормите', 4),
  plural3rdPerson: Word('прокормят', 4),
  masculinePast: Word('прокормил', 7),
  femininePast: Word('прокормила', 7),
  neuterPast: Word('прокормило', 7),
  pluralPast: Word('прокормили', 7),
  imperativeInformal: Word('прокорми', 7),
  imperativeFormal: Word('прокормите', 7),
  imperfect: [],
};

perfectVerbs.set(прокормить.name.text, прокормить);

export { прокормить };