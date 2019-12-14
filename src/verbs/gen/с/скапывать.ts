import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скапывать: PerfectVerb = {
  name: Word('скапывать', 2),
  singular1stPerson: Word('скапываю', 2),
  singular2ndPerson: Word('скапываешь', 2),
  singular3rdPerson: Word('скапывает', 2),
  plural1stPerson: Word('скапываем', 2),
  plural2ndPerson: Word('скапываете', 2),
  plural3rdPerson: Word('скапывают', 2),
  masculinePast: Word('скапывал', 2),
  femininePast: Word('скапывала', 2),
  neuterPast: Word('скапывало', 2),
  pluralPast: Word('скапывали', 2),
  imperativeInformal: Word('скапывай', 2),
  imperativeFormal: Word('скапывайте', 2),
  imperfect: [],
};

perfectVerbs.set(скапывать.name.text, скапывать);

export { скапывать };