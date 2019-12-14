import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соблазниться: PerfectVerb = {
  name: Word('соблазниться', 7),
  singular1stPerson: Word('соблазнюсь', 7),
  singular2ndPerson: Word('соблазнишься', 7),
  singular3rdPerson: Word('соблазнится', 7),
  plural1stPerson: Word('соблазнимся', 7),
  plural2ndPerson: Word('соблазнитесь', 7),
  plural3rdPerson: Word('соблазнятся', 7),
  masculinePast: Word('соблазнился', 7),
  femininePast: Word('соблазнилась', 7),
  neuterPast: Word('соблазнилось', 7),
  pluralPast: Word('соблазнились', 7),
  imperativeInformal: Word('соблазнись', 7),
  imperativeFormal: Word('соблазнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(соблазниться.name.text, соблазниться);

export { соблазниться };