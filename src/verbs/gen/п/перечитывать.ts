import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечитывать: PerfectVerb = {
  name: Word('перечитывать', 5),
  singular1stPerson: Word('перечитываю', 5),
  singular2ndPerson: Word('перечитываешь', 5),
  singular3rdPerson: Word('перечитывает', 5),
  plural1stPerson: Word('перечитываем', 5),
  plural2ndPerson: Word('перечитываете', 5),
  plural3rdPerson: Word('перечитывают', 5),
  masculinePast: Word('перечитывал', 5),
  femininePast: Word('перечитывала', 5),
  neuterPast: Word('перечитывало', 5),
  pluralPast: Word('перечитывали', 5),
  imperativeInformal: Word('перечитывай', 5),
  imperativeFormal: Word('перечитывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перечитывать.name.text, перечитывать);

export { перечитывать };