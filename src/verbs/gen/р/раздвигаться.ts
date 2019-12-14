import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздвигаться: PerfectVerb = {
  name: Word('раздвигаться', 7),
  singular1stPerson: Word('раздвигаюсь', 7),
  singular2ndPerson: Word('раздвигаешься', 7),
  singular3rdPerson: Word('раздвигается', 7),
  plural1stPerson: Word('раздвигаемся', 7),
  plural2ndPerson: Word('раздвигаетесь', 7),
  plural3rdPerson: Word('раздвигаются', 7),
  masculinePast: Word('раздвигался', 7),
  femininePast: Word('раздвигалась', 7),
  neuterPast: Word('раздвигалось', 7),
  pluralPast: Word('раздвигались', 7),
  imperativeInformal: Word('раздвигайся', 7),
  imperativeFormal: Word('раздвигайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(раздвигаться.name.text, раздвигаться);

export { раздвигаться };