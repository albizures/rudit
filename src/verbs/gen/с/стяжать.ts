import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стяжать: PerfectVerb = {
  name: Word('стяжать', 4),
  singular1stPerson: Word('стяжаю', 4),
  singular2ndPerson: Word('стяжаешь', 4),
  singular3rdPerson: Word('стяжает', 4),
  plural1stPerson: Word('стяжаем', 4),
  plural2ndPerson: Word('стяжаете', 4),
  plural3rdPerson: Word('стяжают', 4),
  masculinePast: Word('стяжал', 4),
  femininePast: Word('стяжала', 4),
  neuterPast: Word('стяжало', 4),
  pluralPast: Word('стяжали', 4),
  imperativeInformal: Word('стяжай', 4),
  imperativeFormal: Word('стяжайте', 4),
  imperfect: [],
};

perfectVerbs.set(стяжать.name.text, стяжать);

export { стяжать };