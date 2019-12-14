import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распутывать: PerfectVerb = {
  name: Word('распутывать', 4),
  singular1stPerson: Word('распутываю', 4),
  singular2ndPerson: Word('распутываешь', 4),
  singular3rdPerson: Word('распутывает', 4),
  plural1stPerson: Word('распутываем', 4),
  plural2ndPerson: Word('распутываете', 4),
  plural3rdPerson: Word('распутывают', 4),
  masculinePast: Word('распутывал', 4),
  femininePast: Word('распутывала', 4),
  neuterPast: Word('распутывало', 4),
  pluralPast: Word('распутывали', 4),
  imperativeInformal: Word('распутывай', 4),
  imperativeFormal: Word('распутывайте', 4),
  imperfect: [],
};

perfectVerbs.set(распутывать.name.text, распутывать);

export { распутывать };