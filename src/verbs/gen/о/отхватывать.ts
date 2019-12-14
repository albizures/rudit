import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отхватывать: PerfectVerb = {
  name: Word('отхватывать', 4),
  singular1stPerson: Word('отхватываю', 4),
  singular2ndPerson: Word('отхватываешь', 4),
  singular3rdPerson: Word('отхватывает', 4),
  plural1stPerson: Word('отхватываем', 4),
  plural2ndPerson: Word('отхватываете', 4),
  plural3rdPerson: Word('отхватывают', 4),
  masculinePast: Word('отхватывал', 4),
  femininePast: Word('отхватывала', 4),
  neuterPast: Word('отхватывало', 4),
  pluralPast: Word('отхватывали', 4),
  imperativeInformal: Word('отхватывай', 4),
  imperativeFormal: Word('отхватывайте', 4),
  imperfect: [],
};

perfectVerbs.set(отхватывать.name.text, отхватывать);

export { отхватывать };