import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засылать: PerfectVerb = {
  name: Word('засылать', 5),
  singular1stPerson: Word('засылаю', 5),
  singular2ndPerson: Word('засылаешь', 5),
  singular3rdPerson: Word('засылает', 5),
  plural1stPerson: Word('засылаем', 5),
  plural2ndPerson: Word('засылаете', 5),
  plural3rdPerson: Word('засылают', 5),
  masculinePast: Word('засылал', 5),
  femininePast: Word('засылала', 5),
  neuterPast: Word('засылало', 5),
  pluralPast: Word('засылали', 5),
  imperativeInformal: Word('засылай', 5),
  imperativeFormal: Word('засылайте', 5),
  imperfect: [],
};

perfectVerbs.set(засылать.name.text, засылать);

export { засылать };