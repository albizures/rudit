import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выхватывать: PerfectVerb = {
  name: Word('выхватывать', 4),
  singular1stPerson: Word('выхватываю', 4),
  singular2ndPerson: Word('выхватываешь', 4),
  singular3rdPerson: Word('выхватывает', 4),
  plural1stPerson: Word('выхватываем', 4),
  plural2ndPerson: Word('выхватываете', 4),
  plural3rdPerson: Word('выхватывают', 4),
  masculinePast: Word('выхватывал', 4),
  femininePast: Word('выхватывала', 4),
  neuterPast: Word('выхватывало', 4),
  pluralPast: Word('выхватывали', 4),
  imperativeInformal: Word('выхватывай', 4),
  imperativeFormal: Word('выхватывайте', 4),
  imperfect: [],
};

perfectVerbs.set(выхватывать.name.text, выхватывать);

export { выхватывать };