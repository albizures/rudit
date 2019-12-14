import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкладывать: PerfectVerb = {
  name: Word('подкладывать', 5),
  singular1stPerson: Word('подкладываю', 5),
  singular2ndPerson: Word('подкладываешь', 5),
  singular3rdPerson: Word('подкладывает', 5),
  plural1stPerson: Word('подкладываем', 5),
  plural2ndPerson: Word('подкладываете', 5),
  plural3rdPerson: Word('подкладывают', 5),
  masculinePast: Word('подкладывал', 5),
  femininePast: Word('подкладывала', 5),
  neuterPast: Word('подкладывало', 5),
  pluralPast: Word('подкладывали', 5),
  imperativeInformal: Word('подкладывай', 5),
  imperativeFormal: Word('подкладывайте', 5),
  imperfect: [],
};

perfectVerbs.set(подкладывать.name.text, подкладывать);

export { подкладывать };