import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъясниться: PerfectVerb = {
  name: Word('изъясниться', 6),
  singular1stPerson: Word('изъяснюсь', 6),
  singular2ndPerson: Word('изъяснишься', 6),
  singular3rdPerson: Word('изъяснится', 6),
  plural1stPerson: Word('изъяснимся', 6),
  plural2ndPerson: Word('изъяснитесь', 6),
  plural3rdPerson: Word('изъяснятся', 6),
  masculinePast: Word('изъяснился', 6),
  femininePast: Word('изъяснилась', 6),
  neuterPast: Word('изъяснилось', 6),
  pluralPast: Word('изъяснились', 6),
  imperativeInformal: Word('изъяснись', 6),
  imperativeFormal: Word('изъяснитесь', 6),
  imperfect: ['изъясняться'],
};

perfectVerbs.set(изъясниться.name.text, изъясниться);

export { изъясниться };