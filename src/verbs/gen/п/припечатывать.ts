import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припечатывать: PerfectVerb = {
  name: Word('припечатывать', 6),
  singular1stPerson: Word('припечатываю', 6),
  singular2ndPerson: Word('припечатываешь', 6),
  singular3rdPerson: Word('припечатывает', 6),
  plural1stPerson: Word('припечатываем', 6),
  plural2ndPerson: Word('припечатываете', 6),
  plural3rdPerson: Word('припечатывают', 6),
  masculinePast: Word('припечатывал', 6),
  femininePast: Word('припечатывала', 6),
  neuterPast: Word('припечатывало', 6),
  pluralPast: Word('припечатывали', 6),
  imperativeInformal: Word('припечатывай', 6),
  imperativeFormal: Word('припечатывайте', 6),
  imperfect: [],
};

perfectVerbs.set(припечатывать.name.text, припечатывать);

export { припечатывать };