import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпечататься: PerfectVerb = {
  name: Word('отпечататься', 5),
  singular1stPerson: Word('отпечатаюсь', 5),
  singular2ndPerson: Word('отпечатаешься', 5),
  singular3rdPerson: Word('отпечатается', 5),
  plural1stPerson: Word('отпечатаемся', 5),
  plural2ndPerson: Word('отпечатаетесь', 5),
  plural3rdPerson: Word('отпечатаются', 5),
  masculinePast: Word('отпечатался', 5),
  femininePast: Word('отпечаталась', 5),
  neuterPast: Word('отпечаталось', 5),
  pluralPast: Word('отпечатались', 5),
  imperativeInformal: Word('отпечатайся', 5),
  imperativeFormal: Word('отпечатайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отпечататься.name.text, отпечататься);

export { отпечататься };