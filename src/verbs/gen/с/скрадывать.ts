import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрадывать: PerfectVerb = {
  name: Word('скрадывать', 3),
  singular1stPerson: Word('скрадываю', 3),
  singular2ndPerson: Word('скрадываешь', 3),
  singular3rdPerson: Word('скрадывает', 3),
  plural1stPerson: Word('скрадываем', 3),
  plural2ndPerson: Word('скрадываете', 3),
  plural3rdPerson: Word('скрадывают', 3),
  masculinePast: Word('скрадывал', 3),
  femininePast: Word('скрадывала', 3),
  neuterPast: Word('скрадывало', 3),
  pluralPast: Word('скрадывали', 3),
  imperativeInformal: Word('скрадывай', 3),
  imperativeFormal: Word('скрадывайте', 3),
  imperfect: [],
};

perfectVerbs.set(скрадывать.name.text, скрадывать);

export { скрадывать };