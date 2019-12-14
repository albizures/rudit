import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрашиваться: PerfectVerb = {
  name: Word('спрашиваться', 3),
  singular1stPerson: Word('спрашиваюсь', 3),
  singular2ndPerson: Word('спрашиваешься', 3),
  singular3rdPerson: Word('спрашивается', 3),
  plural1stPerson: Word('спрашиваемся', 3),
  plural2ndPerson: Word('спрашиваетесь', 3),
  plural3rdPerson: Word('спрашиваются', 3),
  masculinePast: Word('спрашивался', 3),
  femininePast: Word('спрашивалась', 3),
  neuterPast: Word('спрашивалось', 3),
  pluralPast: Word('спрашивались', 3),
  imperativeInformal: Word('спрашивайся', 3),
  imperativeFormal: Word('спрашивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(спрашиваться.name.text, спрашиваться);

export { спрашиваться };