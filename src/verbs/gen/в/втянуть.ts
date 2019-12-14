import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втянуть: PerfectVerb = {
  name: Word('втянуть', 4),
  singular1stPerson: Word('втяну', 4),
  singular2ndPerson: Word('втянешь', 2),
  singular3rdPerson: Word('втянет', 2),
  plural1stPerson: Word('втянем', 2),
  plural2ndPerson: Word('втянете', 2),
  plural3rdPerson: Word('втянут', 2),
  masculinePast: Word('втянул', 4),
  femininePast: Word('втянула', 4),
  neuterPast: Word('втянуло', 4),
  pluralPast: Word('втянули', 4),
  imperativeInformal: Word('втяни', 4),
  imperativeFormal: Word('втяните', 4),
  imperfect: [],
};

perfectVerbs.set(втянуть.name.text, втянуть);

export { втянуть };