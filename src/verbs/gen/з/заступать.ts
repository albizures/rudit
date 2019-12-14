import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заступать: PerfectVerb = {
  name: Word('заступать', 6),
  singular1stPerson: Word('заступаю', 6),
  singular2ndPerson: Word('заступаешь', 6),
  singular3rdPerson: Word('заступает', 6),
  plural1stPerson: Word('заступаем', 6),
  plural2ndPerson: Word('заступаете', 6),
  plural3rdPerson: Word('заступают', 6),
  masculinePast: Word('заступал', 6),
  femininePast: Word('заступала', 6),
  neuterPast: Word('заступало', 6),
  pluralPast: Word('заступали', 6),
  imperativeInformal: Word('заступай', 6),
  imperativeFormal: Word('заступайте', 6),
  imperfect: [],
};

perfectVerbs.set(заступать.name.text, заступать);

export { заступать };