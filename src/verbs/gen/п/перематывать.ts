import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перематывать: PerfectVerb = {
  name: Word('перематывать', 5),
  singular1stPerson: Word('перематываю', 5),
  singular2ndPerson: Word('перематываешь', 5),
  singular3rdPerson: Word('перематывает', 5),
  plural1stPerson: Word('перематываем', 5),
  plural2ndPerson: Word('перематываете', 5),
  plural3rdPerson: Word('перематывают', 5),
  masculinePast: Word('перематывал', 5),
  femininePast: Word('перематывала', 5),
  neuterPast: Word('перематывало', 5),
  pluralPast: Word('перематывали', 5),
  imperativeInformal: Word('перематывай', 5),
  imperativeFormal: Word('перематывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перематывать.name.text, перематывать);

export { перематывать };