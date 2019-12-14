import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просушиваться: PerfectVerb = {
  name: Word('просушиваться', 4),
  singular1stPerson: Word('просушиваюсь', 4),
  singular2ndPerson: Word('просушиваешься', 4),
  singular3rdPerson: Word('просушивается', 4),
  plural1stPerson: Word('просушиваемся', 4),
  plural2ndPerson: Word('просушиваетесь', 4),
  plural3rdPerson: Word('просушиваются', 4),
  masculinePast: Word('просушивался', 4),
  femininePast: Word('просушивалась', 4),
  neuterPast: Word('просушивалось', 4),
  pluralPast: Word('просушивались', 4),
  imperativeInformal: Word('просушивайся', 4),
  imperativeFormal: Word('просушивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(просушиваться.name.text, просушиваться);

export { просушиваться };