import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обхватывать: PerfectVerb = {
  name: Word('обхватывать', 4),
  singular1stPerson: Word('обхватываю', 4),
  singular2ndPerson: Word('обхватываешь', 4),
  singular3rdPerson: Word('обхватывает', 4),
  plural1stPerson: Word('обхватываем', 4),
  plural2ndPerson: Word('обхватываете', 4),
  plural3rdPerson: Word('обхватывают', 4),
  masculinePast: Word('обхватывал', 4),
  femininePast: Word('обхватывала', 4),
  neuterPast: Word('обхватывало', 4),
  pluralPast: Word('обхватывали', 4),
  imperativeInformal: Word('обхватывай', 4),
  imperativeFormal: Word('обхватывайте', 4),
  imperfect: ['обхватить'],
};

perfectVerbs.set(обхватывать.name.text, обхватывать);

export { обхватывать };