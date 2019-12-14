import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порицать: PerfectVerb = {
  name: Word('порицать', 5),
  singular1stPerson: Word('порицаю', 5),
  singular2ndPerson: Word('порицаешь', 5),
  singular3rdPerson: Word('порицает', 5),
  plural1stPerson: Word('порицаем', 5),
  plural2ndPerson: Word('порицаете', 5),
  plural3rdPerson: Word('порицают', 5),
  masculinePast: Word('порицал', 5),
  femininePast: Word('порицала', 5),
  neuterPast: Word('порицало', 5),
  pluralPast: Word('порицали', 5),
  imperativeInformal: Word('порицай', 5),
  imperativeFormal: Word('порицайте', 5),
  imperfect: [],
};

perfectVerbs.set(порицать.name.text, порицать);

export { порицать };