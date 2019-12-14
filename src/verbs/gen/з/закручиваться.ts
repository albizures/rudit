import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закручиваться: PerfectVerb = {
  name: Word('закручиваться', 4),
  singular1stPerson: Word('закручиваюсь', 4),
  singular2ndPerson: Word('закручиваешься', 4),
  singular3rdPerson: Word('закручивается', 4),
  plural1stPerson: Word('закручиваемся', 4),
  plural2ndPerson: Word('закручиваетесь', 4),
  plural3rdPerson: Word('закручиваются', 4),
  masculinePast: Word('закручивался', 4),
  femininePast: Word('закручивалась', 4),
  neuterPast: Word('закручивалось', 4),
  pluralPast: Word('закручивались', 4),
  imperativeInformal: Word('закручивайся', 4),
  imperativeFormal: Word('закручивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(закручиваться.name.text, закручиваться);

export { закручиваться };