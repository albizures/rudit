import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утолщаться: PerfectVerb = {
  name: Word('утолщаться', 5),
  singular1stPerson: Word('утолщаюсь', 5),
  singular2ndPerson: Word('утолщаешься', 5),
  singular3rdPerson: Word('утолщается', 5),
  plural1stPerson: Word('утолщаемся', 5),
  plural2ndPerson: Word('утолщаетесь', 5),
  plural3rdPerson: Word('утолщаются', 5),
  masculinePast: Word('утолщался', 5),
  femininePast: Word('утолщалась', 5),
  neuterPast: Word('утолщалось', 5),
  pluralPast: Word('утолщались', 5),
  imperativeInformal: Word('утолщайся', 5),
  imperativeFormal: Word('утолщайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(утолщаться.name.text, утолщаться);

export { утолщаться };