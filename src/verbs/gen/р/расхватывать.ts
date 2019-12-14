import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхватывать: PerfectVerb = {
  name: Word('расхватывать', 5),
  singular1stPerson: Word('расхватываю', 5),
  singular2ndPerson: Word('расхватываешь', 5),
  singular3rdPerson: Word('расхватывает', 5),
  plural1stPerson: Word('расхватываем', 5),
  plural2ndPerson: Word('расхватываете', 5),
  plural3rdPerson: Word('расхватывают', 5),
  masculinePast: Word('расхватывал', 5),
  femininePast: Word('расхватывала', 5),
  neuterPast: Word('расхватывало', 5),
  pluralPast: Word('расхватывали', 5),
  imperativeInformal: Word('расхватывай', 5),
  imperativeFormal: Word('расхватывайте', 5),
  imperfect: [],
};

perfectVerbs.set(расхватывать.name.text, расхватывать);

export { расхватывать };