import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окинуть: PerfectVerb = {
  name: Word('окинуть', 2),
  singular1stPerson: Word('окину', 2),
  singular2ndPerson: Word('окинешь', 2),
  singular3rdPerson: Word('окинет', 2),
  plural1stPerson: Word('окинем', 2),
  plural2ndPerson: Word('окинете', 2),
  plural3rdPerson: Word('окинут', 2),
  masculinePast: Word('окинул', 2),
  femininePast: Word('окинула', 2),
  neuterPast: Word('окинуло', 2),
  pluralPast: Word('окинули', 2),
  imperativeInformal: Word('окинь', 2),
  imperativeFormal: Word('окиньте', 2),
  imperfect: [],
};

perfectVerbs.set(окинуть.name.text, окинуть);

export { окинуть };