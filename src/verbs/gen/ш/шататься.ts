import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шататься: PerfectVerb = {
  name: Word('шататься', 3),
  singular1stPerson: Word('шатаюсь', 3),
  singular2ndPerson: Word('шатаешься', 3),
  singular3rdPerson: Word('шатается', 3),
  plural1stPerson: Word('шатаемся', 3),
  plural2ndPerson: Word('шатаетесь', 3),
  plural3rdPerson: Word('шатаются', 3),
  masculinePast: Word('шатался', 3),
  femininePast: Word('шаталась', 3),
  neuterPast: Word('шаталось', 3),
  pluralPast: Word('шатались', 3),
  imperativeInformal: Word('шатайся', 3),
  imperativeFormal: Word('шатайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(шататься.name.text, шататься);

export { шататься };