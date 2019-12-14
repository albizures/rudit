import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очутиться: PerfectVerb = {
  name: Word('очутиться', 4),
  singular1stPerson: Word('очучусь', 4),
  singular2ndPerson: Word('очутишься', 2),
  singular3rdPerson: Word('очутится', 2),
  plural1stPerson: Word('очутимся', 2),
  plural2ndPerson: Word('очутитесь', 2),
  plural3rdPerson: Word('очутятся', 2),
  masculinePast: Word('очутился', 4),
  femininePast: Word('очутилась', 4),
  neuterPast: Word('очутилось', 4),
  pluralPast: Word('очутились', 4),
  imperativeInformal: Word('очутись', 4),
  imperativeFormal: Word('очутитесь', 4),
  imperfect: [],
};

perfectVerbs.set(очутиться.name.text, очутиться);

export { очутиться };