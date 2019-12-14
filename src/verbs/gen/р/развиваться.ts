import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развиваться: PerfectVerb = {
  name: Word('развиваться', 6),
  singular1stPerson: Word('развиваюсь', 6),
  singular2ndPerson: Word('развиваешься', 6),
  singular3rdPerson: Word('развивается', 6),
  plural1stPerson: Word('развиваемся', 6),
  plural2ndPerson: Word('развиваетесь', 6),
  plural3rdPerson: Word('развиваются', 6),
  masculinePast: Word('развивался', 6),
  femininePast: Word('развивалась', 6),
  neuterPast: Word('развивалось', 6),
  pluralPast: Word('развивались', 6),
  imperativeInformal: Word('развивайся', 6),
  imperativeFormal: Word('развивайтесь', 6),
  imperfect: ['развиться'],
};

perfectVerbs.set(развиваться.name.text, развиваться);

export { развиваться };