import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искушать: PerfectVerb = {
  name: Word('искушать', 5),
  singular1stPerson: Word('искушаю', 5),
  singular2ndPerson: Word('искушаешь', 5),
  singular3rdPerson: Word('искушает', 5),
  plural1stPerson: Word('искушаем', 5),
  plural2ndPerson: Word('искушаете', 5),
  plural3rdPerson: Word('искушают', 5),
  masculinePast: Word('искушал', 5),
  femininePast: Word('искушала', 5),
  neuterPast: Word('искушало', 5),
  pluralPast: Word('искушали', 5),
  imperativeInformal: Word('искушай', 5),
  imperativeFormal: Word('искушайте', 5),
  imperfect: [],
};

perfectVerbs.set(искушать.name.text, искушать);

export { искушать };