import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлынуть: PerfectVerb = {
  name: Word('хлынуть', 2),
  singular1stPerson: Word('хлыну', 2),
  singular2ndPerson: Word('хлынешь', 2),
  singular3rdPerson: Word('хлынет', 2),
  plural1stPerson: Word('хлынем', 2),
  plural2ndPerson: Word('хлынете', 2),
  plural3rdPerson: Word('хлынут', 2),
  masculinePast: Word('хлынул', 2),
  femininePast: Word('хлынула', 2),
  neuterPast: Word('хлынуло', 2),
  pluralPast: Word('хлынули', 2),
  imperativeInformal: Word('хлынь', 2),
  imperativeFormal: Word('хлыньте', 2),
  imperfect: [],
};

perfectVerbs.set(хлынуть.name.text, хлынуть);

export { хлынуть };