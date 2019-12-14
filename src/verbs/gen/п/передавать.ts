import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передавать: PerfectVerb = {
  name: Word('передавать', 7),
  singular1stPerson: Word('передаю', 6),
  singular2ndPerson: Word('передаёшь', 6),
  singular3rdPerson: Word('передаёт', 6),
  plural1stPerson: Word('передаём', 6),
  plural2ndPerson: Word('передаёте', 6),
  plural3rdPerson: Word('передают', 6),
  masculinePast: Word('передавал', 7),
  femininePast: Word('передавала', 7),
  neuterPast: Word('передавало', 7),
  pluralPast: Word('передавали', 7),
  imperativeInformal: Word('передавай', 7),
  imperativeFormal: Word('передавайте', 7),
  imperfect: ['передать'],
};

perfectVerbs.set(передавать.name.text, передавать);

export { передавать };