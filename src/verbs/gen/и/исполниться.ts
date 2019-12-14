import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исполниться: PerfectVerb = {
  name: Word('исполниться', 3),
  singular1stPerson: Word('исполнюсь', 3),
  singular2ndPerson: Word('исполнишься', 3),
  singular3rdPerson: Word('исполнится', 3),
  plural1stPerson: Word('исполнимся', 3),
  plural2ndPerson: Word('исполнитесь', 3),
  plural3rdPerson: Word('исполнятся', 3),
  masculinePast: Word('исполнился', 3),
  femininePast: Word('исполнилась', 3),
  neuterPast: Word('исполнилось', 3),
  pluralPast: Word('исполнились', 3),
  imperativeInformal: Word('исполнись', 3),
  imperativeFormal: Word('исполнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(исполниться.name.text, исполниться);

export { исполниться };