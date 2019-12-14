import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заступиться: PerfectVerb = {
  name: Word('заступиться', 6),
  singular1stPerson: Word('заступлюсь', 7),
  singular2ndPerson: Word('заступишься', 4),
  singular3rdPerson: Word('заступится', 4),
  plural1stPerson: Word('заступимся', 4),
  plural2ndPerson: Word('заступитесь', 4),
  plural3rdPerson: Word('заступятся', 4),
  masculinePast: Word('заступился', 6),
  femininePast: Word('заступилась', 6),
  neuterPast: Word('заступилось', 6),
  pluralPast: Word('заступились', 6),
  imperativeInformal: Word('заступись', 6),
  imperativeFormal: Word('заступитесь', 6),
  imperfect: [],
};

perfectVerbs.set(заступиться.name.text, заступиться);

export { заступиться };