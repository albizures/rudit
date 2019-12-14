import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подхватывать: PerfectVerb = {
  name: Word('подхватывать', 5),
  singular1stPerson: Word('подхватываю', 5),
  singular2ndPerson: Word('подхватываешь', 5),
  singular3rdPerson: Word('подхватывает', 5),
  plural1stPerson: Word('подхватываем', 5),
  plural2ndPerson: Word('подхватываете', 5),
  plural3rdPerson: Word('подхватывают', 5),
  masculinePast: Word('подхватывал', 5),
  femininePast: Word('подхватывала', 5),
  neuterPast: Word('подхватывало', 5),
  pluralPast: Word('подхватывали', 5),
  imperativeInformal: Word('подхватывай', 5),
  imperativeFormal: Word('подхватывайте', 5),
  imperfect: ['подхватить'],
};

perfectVerbs.set(подхватывать.name.text, подхватывать);

export { подхватывать };