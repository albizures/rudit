import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслушиваться: PerfectVerb = {
  name: Word('заслушиваться', 4),
  singular1stPerson: Word('заслушиваюсь', 4),
  singular2ndPerson: Word('заслушиваешься', 4),
  singular3rdPerson: Word('заслушивается', 4),
  plural1stPerson: Word('заслушиваемся', 4),
  plural2ndPerson: Word('заслушиваетесь', 4),
  plural3rdPerson: Word('заслушиваются', 4),
  masculinePast: Word('заслушивался', 4),
  femininePast: Word('заслушивалась', 4),
  neuterPast: Word('заслушивалось', 4),
  pluralPast: Word('заслушивались', 4),
  imperativeInformal: Word('заслушивайся', 4),
  imperativeFormal: Word('заслушивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(заслушиваться.name.text, заслушиваться);

export { заслушиваться };