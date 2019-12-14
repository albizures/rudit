import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпрашиваться: PerfectVerb = {
  name: Word('отпрашиваться', 4),
  singular1stPerson: Word('отпрашиваюсь', 4),
  singular2ndPerson: Word('отпрашиваешься', 4),
  singular3rdPerson: Word('отпрашивается', 4),
  plural1stPerson: Word('отпрашиваемся', 4),
  plural2ndPerson: Word('отпрашиваетесь', 4),
  plural3rdPerson: Word('отпрашиваются', 4),
  masculinePast: Word('отпрашивался', 4),
  femininePast: Word('отпрашивалась', 4),
  neuterPast: Word('отпрашивалось', 4),
  pluralPast: Word('отпрашивались', 4),
  imperativeInformal: Word('отпрашивайся', 4),
  imperativeFormal: Word('отпрашивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отпрашиваться.name.text, отпрашиваться);

export { отпрашиваться };