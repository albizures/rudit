import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окрашиваться: PerfectVerb = {
  name: Word('окрашиваться', 3),
  singular1stPerson: Word('окрашиваюсь', 3),
  singular2ndPerson: Word('окрашиваешься', 3),
  singular3rdPerson: Word('окрашивается', 3),
  plural1stPerson: Word('окрашиваемся', 3),
  plural2ndPerson: Word('окрашиваетесь', 3),
  plural3rdPerson: Word('окрашиваются', 3),
  masculinePast: Word('окрашивался', 3),
  femininePast: Word('окрашивалась', 3),
  neuterPast: Word('окрашивалось', 3),
  pluralPast: Word('окрашивались', 3),
  imperativeInformal: Word('окрашивайся', 3),
  imperativeFormal: Word('окрашивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(окрашиваться.name.text, окрашиваться);

export { окрашиваться };