import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкапывать: PerfectVerb = {
  name: Word('подкапывать', 4),
  singular1stPerson: Word('подкапываю', 4),
  singular2ndPerson: Word('подкапываешь', 4),
  singular3rdPerson: Word('подкапывает', 4),
  plural1stPerson: Word('подкапываем', 4),
  plural2ndPerson: Word('подкапываете', 4),
  plural3rdPerson: Word('подкапывают', 4),
  masculinePast: Word('подкапывал', 4),
  femininePast: Word('подкапывала', 4),
  neuterPast: Word('подкапывало', 4),
  pluralPast: Word('подкапывали', 4),
  imperativeInformal: Word('подкапывай', 4),
  imperativeFormal: Word('подкапывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подкапывать.name.text, подкапывать);

export { подкапывать };