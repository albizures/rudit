import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемывать: PerfectVerb = {
  name: Word('перемывать', 7),
  singular1stPerson: Word('перемываю', 7),
  singular2ndPerson: Word('перемываешь', 7),
  singular3rdPerson: Word('перемывает', 7),
  plural1stPerson: Word('перемываем', 7),
  plural2ndPerson: Word('перемываете', 7),
  plural3rdPerson: Word('перемывают', 7),
  masculinePast: Word('перемывал', 7),
  femininePast: Word('перемывала', 7),
  neuterPast: Word('перемывало', 7),
  pluralPast: Word('перемывали', 7),
  imperativeInformal: Word('перемывай', 7),
  imperativeFormal: Word('перемывайте', 7),
  imperfect: [],
};

perfectVerbs.set(перемывать.name.text, перемывать);

export { перемывать };