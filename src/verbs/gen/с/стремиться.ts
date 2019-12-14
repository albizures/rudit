import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стремиться: PerfectVerb = {
  name: Word('стремиться', 5),
  singular1stPerson: Word('стремлюсь', 6),
  singular2ndPerson: Word('стремишься', 5),
  singular3rdPerson: Word('стремится', 5),
  plural1stPerson: Word('стремимся', 5),
  plural2ndPerson: Word('стремитесь', 5),
  plural3rdPerson: Word('стремятся', 5),
  masculinePast: Word('стремился', 5),
  femininePast: Word('стремилась', 5),
  neuterPast: Word('стремилось', 5),
  pluralPast: Word('стремились', 5),
  imperativeInformal: Word('стремись', 5),
  imperativeFormal: Word('стремитесь', 5),
  imperfect: ['устремиться'],
};

perfectVerbs.set(стремиться.name.text, стремиться);

export { стремиться };