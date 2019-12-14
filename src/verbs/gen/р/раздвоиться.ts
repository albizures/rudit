import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздвоиться: PerfectVerb = {
  name: Word('раздвоиться', 6),
  singular1stPerson: Word('раздвоюсь', 6),
  singular2ndPerson: Word('раздвоишься', 6),
  singular3rdPerson: Word('раздвоится', 6),
  plural1stPerson: Word('раздвоимся', 6),
  plural2ndPerson: Word('раздвоитесь', 6),
  plural3rdPerson: Word('раздвоятся', 6),
  masculinePast: Word('раздвоился', 6),
  femininePast: Word('раздвоилась', 6),
  neuterPast: Word('раздвоилось', 6),
  pluralPast: Word('раздвоились', 6),
  imperativeInformal: Word('раздвоись', 6),
  imperativeFormal: Word('раздвоитесь', 6),
  imperfect: [],
};

perfectVerbs.set(раздвоиться.name.text, раздвоиться);

export { раздвоиться };