import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притягиваться: PerfectVerb = {
  name: Word('притягиваться', 4),
  singular1stPerson: Word('притягиваюсь', 4),
  singular2ndPerson: Word('притягиваешься', 4),
  singular3rdPerson: Word('притягивается', 4),
  plural1stPerson: Word('притягиваемся', 4),
  plural2ndPerson: Word('притягиваетесь', 4),
  plural3rdPerson: Word('притягиваются', 4),
  masculinePast: Word('притягивался', 4),
  femininePast: Word('притягивалась', 4),
  neuterPast: Word('притягивалось', 4),
  pluralPast: Word('притягивались', 4),
  imperativeInformal: Word('притягивайся', 4),
  imperativeFormal: Word('притягивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(притягиваться.name.text, притягиваться);

export { притягиваться };