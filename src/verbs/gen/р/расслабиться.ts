import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расслабиться: PerfectVerb = {
  name: Word('расслабиться', 5),
  singular1stPerson: Word('расслаблюсь', 5),
  singular2ndPerson: Word('расслабишься', 5),
  singular3rdPerson: Word('расслабится', 5),
  plural1stPerson: Word('расслабимся', 5),
  plural2ndPerson: Word('расслабитесь', 5),
  plural3rdPerson: Word('расслабятся', 5),
  masculinePast: Word('расслабился', 5),
  femininePast: Word('расслабилась', 5),
  neuterPast: Word('расслабилось', 5),
  pluralPast: Word('расслабились', 5),
  imperativeInformal: Word('расслабься', 5),
  imperativeFormal: Word('расслабьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(расслабиться.name.text, расслабиться);

export { расслабиться };