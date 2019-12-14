import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const указывать: PerfectVerb = {
  name: Word('указывать', 2),
  singular1stPerson: Word('указываю', 2),
  singular2ndPerson: Word('указываешь', 2),
  singular3rdPerson: Word('указывает', 2),
  plural1stPerson: Word('указываем', 2),
  plural2ndPerson: Word('указываете', 2),
  plural3rdPerson: Word('указывают', 2),
  masculinePast: Word('указывал', 2),
  femininePast: Word('указывала', 2),
  neuterPast: Word('указывало', 2),
  pluralPast: Word('указывали', 2),
  imperativeInformal: Word('указывай', 2),
  imperativeFormal: Word('указывайте', 2),
  imperfect: ['указать'],
};

perfectVerbs.set(указывать.name.text, указывать);

export { указывать };