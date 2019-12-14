import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наступать: PerfectVerb = {
  name: Word('наступать', 6),
  singular1stPerson: Word('наступаю', 6),
  singular2ndPerson: Word('наступаешь', 6),
  singular3rdPerson: Word('наступает', 6),
  plural1stPerson: Word('наступаем', 6),
  plural2ndPerson: Word('наступаете', 6),
  plural3rdPerson: Word('наступают', 6),
  masculinePast: Word('наступал', 6),
  femininePast: Word('наступала', 6),
  neuterPast: Word('наступало', 6),
  pluralPast: Word('наступали', 6),
  imperativeInformal: Word('наступай', 6),
  imperativeFormal: Word('наступайте', 6),
  imperfect: ['наступить'],
};

perfectVerbs.set(наступать.name.text, наступать);

export { наступать };