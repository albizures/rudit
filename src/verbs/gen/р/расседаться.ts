import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расседаться: PerfectVerb = {
  name: Word('расседаться', 6),
  singular1stPerson: Word('расседаюсь', 6),
  singular2ndPerson: Word('расседаешься', 6),
  singular3rdPerson: Word('расседается', 6),
  plural1stPerson: Word('расседаемся', 6),
  plural2ndPerson: Word('расседаетесь', 6),
  plural3rdPerson: Word('расседаются', 6),
  masculinePast: Word('расседался', 6),
  femininePast: Word('расседалась', 6),
  neuterPast: Word('расседалось', 6),
  pluralPast: Word('расседались', 6),
  imperativeInformal: Word('расседайся', 6),
  imperativeFormal: Word('расседайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(расседаться.name.text, расседаться);

export { расседаться };