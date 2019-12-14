import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закататься: PerfectVerb = {
  name: Word('закататься', 5),
  singular1stPerson: Word('закатаюсь', 5),
  singular2ndPerson: Word('закатаешься', 5),
  singular3rdPerson: Word('закатается', 5),
  plural1stPerson: Word('закатаемся', 5),
  plural2ndPerson: Word('закатаетесь', 5),
  plural3rdPerson: Word('закатаются', 5),
  masculinePast: Word('закатался', 5),
  femininePast: Word('закаталась', 5),
  neuterPast: Word('закаталось', 5),
  pluralPast: Word('закатались', 5),
  imperativeInformal: Word('закатайся', 5),
  imperativeFormal: Word('закатайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(закататься.name.text, закататься);

export { закататься };