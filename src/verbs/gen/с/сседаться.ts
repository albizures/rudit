import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сседаться: PerfectVerb = {
  name: Word('сседаться', 4),
  singular1stPerson: Word('сседаюсь', 4),
  singular2ndPerson: Word('сседаешься', 4),
  singular3rdPerson: Word('сседается', 4),
  plural1stPerson: Word('сседаемся', 4),
  plural2ndPerson: Word('сседаетесь', 4),
  plural3rdPerson: Word('сседаются', 4),
  masculinePast: Word('сседался', 4),
  femininePast: Word('сседалась', 4),
  neuterPast: Word('сседалось', 4),
  pluralPast: Word('сседались', 4),
  imperativeInformal: Word('сседайся', 4),
  imperativeFormal: Word('сседайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сседаться.name.text, сседаться);

export { сседаться };