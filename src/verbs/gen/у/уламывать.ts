import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уламывать: PerfectVerb = {
  name: Word('уламывать', 2),
  singular1stPerson: Word('уламываю', 2),
  singular2ndPerson: Word('уламываешь', 2),
  singular3rdPerson: Word('уламывает', 2),
  plural1stPerson: Word('уламываем', 2),
  plural2ndPerson: Word('уламываете', 2),
  plural3rdPerson: Word('уламывают', 2),
  masculinePast: Word('уламывал', 2),
  femininePast: Word('уламывала', 2),
  neuterPast: Word('уламывало', 2),
  pluralPast: Word('уламывали', 2),
  imperativeInformal: Word('уламывай', 2),
  imperativeFormal: Word('уламывайте', 2),
  imperfect: [],
};

perfectVerbs.set(уламывать.name.text, уламывать);

export { уламывать };