import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестирывать: PerfectVerb = {
  name: Word('перестирывать', 6),
  singular1stPerson: Word('перестирываю', 6),
  singular2ndPerson: Word('перестирываешь', 6),
  singular3rdPerson: Word('перестирывает', 6),
  plural1stPerson: Word('перестирываем', 6),
  plural2ndPerson: Word('перестирываете', 6),
  plural3rdPerson: Word('перестирывают', 6),
  masculinePast: Word('перестирывал', 6),
  femininePast: Word('перестирывала', 6),
  neuterPast: Word('перестирывало', 6),
  pluralPast: Word('перестирывали', 6),
  imperativeInformal: Word('перестирывай', 6),
  imperativeFormal: Word('перестирывайте', 6),
  imperfect: [],
};

perfectVerbs.set(перестирывать.name.text, перестирывать);

export { перестирывать };