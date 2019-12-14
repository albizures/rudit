import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свернуть: PerfectVerb = {
  name: Word('свернуть', 5),
  singular1stPerson: Word('сверну', 5),
  singular2ndPerson: Word('свернёшь', 2),
  singular3rdPerson: Word('свернёт', 2),
  plural1stPerson: Word('свернём', 2),
  plural2ndPerson: Word('свернёте', 2),
  plural3rdPerson: Word('свернут', 5),
  masculinePast: Word('свернул', 5),
  femininePast: Word('свернула', 5),
  neuterPast: Word('свернуло', 5),
  pluralPast: Word('свернули', 5),
  imperativeInformal: Word('сверни', 5),
  imperativeFormal: Word('сверните', 5),
  imperfect: ['свёртывать','сворачивать'],
};

perfectVerbs.set(свернуть.name.text, свернуть);

export { свернуть };