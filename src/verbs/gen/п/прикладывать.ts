import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикладывать: PerfectVerb = {
  name: Word('прикладывать', 5),
  singular1stPerson: Word('прикладываю', 5),
  singular2ndPerson: Word('прикладываешь', 5),
  singular3rdPerson: Word('прикладывает', 5),
  plural1stPerson: Word('прикладываем', 5),
  plural2ndPerson: Word('прикладываете', 5),
  plural3rdPerson: Word('прикладывают', 5),
  masculinePast: Word('прикладывал', 5),
  femininePast: Word('прикладывала', 5),
  neuterPast: Word('прикладывало', 5),
  pluralPast: Word('прикладывали', 5),
  imperativeInformal: Word('прикладывай', 5),
  imperativeFormal: Word('прикладывайте', 5),
  imperfect: ['приложить'],
};

perfectVerbs.set(прикладывать.name.text, прикладывать);

export { прикладывать };