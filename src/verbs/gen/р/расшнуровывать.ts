import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшнуровывать: PerfectVerb = {
  name: Word('расшнуровывать', 7),
  singular1stPerson: Word('расшнуровываю', 7),
  singular2ndPerson: Word('расшнуровываешь', 7),
  singular3rdPerson: Word('расшнуровывает', 7),
  plural1stPerson: Word('расшнуровываем', 7),
  plural2ndPerson: Word('расшнуровываете', 7),
  plural3rdPerson: Word('расшнуровывают', 7),
  masculinePast: Word('расшнуровывал', 7),
  femininePast: Word('расшнуровывала', 7),
  neuterPast: Word('расшнуровывало', 7),
  pluralPast: Word('расшнуровывали', 7),
  imperativeInformal: Word('расшнуровывай', 7),
  imperativeFormal: Word('расшнуровывайте', 7),
  imperfect: [],
};

perfectVerbs.set(расшнуровывать.name.text, расшнуровывать);

export { расшнуровывать };