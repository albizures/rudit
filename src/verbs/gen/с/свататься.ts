import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свататься: PerfectVerb = {
  name: Word('свататься', 2),
  singular1stPerson: Word('сватаюсь', 2),
  singular2ndPerson: Word('сватаешься', 2),
  singular3rdPerson: Word('сватается', 2),
  plural1stPerson: Word('сватаемся', 2),
  plural2ndPerson: Word('сватаетесь', 2),
  plural3rdPerson: Word('сватаются', 2),
  masculinePast: Word('сватался', 2),
  femininePast: Word('сваталась', 2),
  neuterPast: Word('сваталось', 2),
  pluralPast: Word('сватались', 2),
  imperativeInformal: Word('сватайся', 2),
  imperativeFormal: Word('сватайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(свататься.name.text, свататься);

export { свататься };