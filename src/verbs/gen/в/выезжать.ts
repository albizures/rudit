import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выезжать: PerfectVerb = {
  name: Word('выезжать', 5),
  singular1stPerson: Word('выезжаю', 5),
  singular2ndPerson: Word('выезжаешь', 5),
  singular3rdPerson: Word('выезжает', 5),
  plural1stPerson: Word('выезжаем', 5),
  plural2ndPerson: Word('выезжаете', 5),
  plural3rdPerson: Word('выезжают', 5),
  masculinePast: Word('выезжал', 5),
  femininePast: Word('выезжала', 5),
  neuterPast: Word('выезжало', 5),
  pluralPast: Word('выезжали', 5),
  imperativeInformal: Word('выезжай', 5),
  imperativeFormal: Word('выезжайте', 5),
  imperfect: ['выехать'],
};

perfectVerbs.set(выезжать.name.text, выезжать);

export { выезжать };