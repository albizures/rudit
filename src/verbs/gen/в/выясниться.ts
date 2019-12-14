import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выясниться: PerfectVerb = {
  name: Word('выясниться', 1),
  singular1stPerson: Word('выяснюсь', 1),
  singular2ndPerson: Word('выяснишься', 1),
  singular3rdPerson: Word('выяснится', 1),
  plural1stPerson: Word('выяснимся', 1),
  plural2ndPerson: Word('выяснитесь', 1),
  plural3rdPerson: Word('выяснятся', 1),
  masculinePast: Word('выяснился', 1),
  femininePast: Word('выяснилась', 1),
  neuterPast: Word('выяснилось', 1),
  pluralPast: Word('выяснились', 1),
  imperativeInformal: Word('выяснись', 1),
  imperativeFormal: Word('выяснитесь', 1),
  imperfect: ['выясняться'],
};

perfectVerbs.set(выясниться.name.text, выясниться);

export { выясниться };