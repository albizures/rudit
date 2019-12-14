import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объясниться: PerfectVerb = {
  name: Word('объясниться', 6),
  singular1stPerson: Word('объяснюсь', 6),
  singular2ndPerson: Word('объяснишься', 6),
  singular3rdPerson: Word('объяснится', 6),
  plural1stPerson: Word('объяснимся', 6),
  plural2ndPerson: Word('объяснитесь', 6),
  plural3rdPerson: Word('объяснятся', 6),
  masculinePast: Word('объяснился', 6),
  femininePast: Word('объяснилась', 6),
  neuterPast: Word('объяснилось', 6),
  pluralPast: Word('объяснились', 6),
  imperativeInformal: Word('объяснись', 6),
  imperativeFormal: Word('объяснитесь', 6),
  imperfect: ['объясняться'],
};

perfectVerbs.set(объясниться.name.text, объясниться);

export { объясниться };