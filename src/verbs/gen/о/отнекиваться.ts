import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отнекиваться: PerfectVerb = {
  name: Word('отнекиваться', 3),
  singular1stPerson: Word('отнекиваюсь', 3),
  singular2ndPerson: Word('отнекиваешься', 3),
  singular3rdPerson: Word('отнекивается', 3),
  plural1stPerson: Word('отнекиваемся', 3),
  plural2ndPerson: Word('отнекиваетесь', 3),
  plural3rdPerson: Word('отнекиваются', 3),
  masculinePast: Word('отнекивался', 3),
  femininePast: Word('отнекивалась', 3),
  neuterPast: Word('отнекивалось', 3),
  pluralPast: Word('отнекивались', 3),
  imperativeInformal: Word('отнекивайся', 3),
  imperativeFormal: Word('отнекивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отнекиваться.name.text, отнекиваться);

export { отнекиваться };