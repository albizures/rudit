import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передыхать: PerfectVerb = {
  name: Word('передыхать', 7),
  singular1stPerson: Word('передыхаю', 7),
  singular2ndPerson: Word('передыхаешь', 7),
  singular3rdPerson: Word('передыхает', 7),
  plural1stPerson: Word('передыхаем', 7),
  plural2ndPerson: Word('передыхаете', 7),
  plural3rdPerson: Word('передыхают', 7),
  masculinePast: Word('передыхал', 7),
  femininePast: Word('передыхала', 7),
  neuterPast: Word('передыхало', 7),
  pluralPast: Word('передыхали', 7),
  imperativeInformal: Word('передыхай', 7),
  imperativeFormal: Word('передыхайте', 7),
  imperfect: [],
};

perfectVerbs.set(передыхать.name.text, передыхать);

export { передыхать };