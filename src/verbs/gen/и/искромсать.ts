import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искромсать: PerfectVerb = {
  name: Word('искромсать', 7),
  singular1stPerson: Word('искромсаю', 7),
  singular2ndPerson: Word('искромсаешь', 7),
  singular3rdPerson: Word('искромсает', 7),
  plural1stPerson: Word('искромсаем', 7),
  plural2ndPerson: Word('искромсаете', 7),
  plural3rdPerson: Word('искромсают', 7),
  masculinePast: Word('искромсал', 7),
  femininePast: Word('искромсала', 7),
  neuterPast: Word('искромсало', 7),
  pluralPast: Word('искромсали', 7),
  imperativeInformal: Word('искромсай', 7),
  imperativeFormal: Word('искромсайте', 7),
  imperfect: [],
};

perfectVerbs.set(искромсать.name.text, искромсать);

export { искромсать };