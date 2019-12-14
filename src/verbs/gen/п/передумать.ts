import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передумать: PerfectVerb = {
  name: Word('передумать', 5),
  singular1stPerson: Word('передумаю', 5),
  singular2ndPerson: Word('передумаешь', 5),
  singular3rdPerson: Word('передумает', 5),
  plural1stPerson: Word('передумаем', 5),
  plural2ndPerson: Word('передумаете', 5),
  plural3rdPerson: Word('передумают', 5),
  masculinePast: Word('передумал', 5),
  femininePast: Word('передумала', 5),
  neuterPast: Word('передумало', 5),
  pluralPast: Word('передумали', 5),
  imperativeInformal: Word('передумай', 5),
  imperativeFormal: Word('передумайте', 5),
  imperfect: [],
};

perfectVerbs.set(передумать.name.text, передумать);

export { передумать };