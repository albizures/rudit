import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высылать: PerfectVerb = {
  name: Word('высылать', 5),
  singular1stPerson: Word('высылаю', 5),
  singular2ndPerson: Word('высылаешь', 5),
  singular3rdPerson: Word('высылает', 5),
  plural1stPerson: Word('высылаем', 5),
  plural2ndPerson: Word('высылаете', 5),
  plural3rdPerson: Word('высылают', 5),
  masculinePast: Word('высылал', 5),
  femininePast: Word('высылала', 5),
  neuterPast: Word('высылало', 5),
  pluralPast: Word('высылали', 5),
  imperativeInformal: Word('высылай', 5),
  imperativeFormal: Word('высылайте', 5),
  imperfect: [],
};

perfectVerbs.set(высылать.name.text, высылать);

export { высылать };