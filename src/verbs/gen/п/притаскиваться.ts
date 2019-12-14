import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притаскиваться: PerfectVerb = {
  name: Word('притаскиваться', 4),
  singular1stPerson: Word('притаскиваюсь', 4),
  singular2ndPerson: Word('притаскиваешься', 4),
  singular3rdPerson: Word('притаскивается', 4),
  plural1stPerson: Word('притаскиваемся', 4),
  plural2ndPerson: Word('притаскиваетесь', 4),
  plural3rdPerson: Word('притаскиваются', 4),
  masculinePast: Word('притаскивался', 4),
  femininePast: Word('притаскивалась', 4),
  neuterPast: Word('притаскивалось', 4),
  pluralPast: Word('притаскивались', 4),
  imperativeInformal: Word('притаскивайся', 4),
  imperativeFormal: Word('притаскивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(притаскиваться.name.text, притаскиваться);

export { притаскиваться };