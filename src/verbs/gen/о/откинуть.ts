import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откинуть: PerfectVerb = {
  name: Word('откинуть', 3),
  singular1stPerson: Word('откину', 3),
  singular2ndPerson: Word('откинешь', 3),
  singular3rdPerson: Word('откинет', 3),
  plural1stPerson: Word('откинем', 3),
  plural2ndPerson: Word('откинете', 3),
  plural3rdPerson: Word('откинут', 3),
  masculinePast: Word('откинул', 3),
  femininePast: Word('откинула', 3),
  neuterPast: Word('откинуло', 3),
  pluralPast: Word('откинули', 3),
  imperativeInformal: Word('откинь', 3),
  imperativeFormal: Word('откиньте', 3),
  imperfect: [],
};

perfectVerbs.set(откинуть.name.text, откинуть);

export { откинуть };