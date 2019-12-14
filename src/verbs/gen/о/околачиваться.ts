import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const околачиваться: PerfectVerb = {
  name: Word('околачиваться', 4),
  singular1stPerson: Word('околачиваюсь', 4),
  singular2ndPerson: Word('околачиваешься', 4),
  singular3rdPerson: Word('околачивается', 4),
  plural1stPerson: Word('околачиваемся', 4),
  plural2ndPerson: Word('околачиваетесь', 4),
  plural3rdPerson: Word('околачиваются', 4),
  masculinePast: Word('околачивался', 4),
  femininePast: Word('околачивалась', 4),
  neuterPast: Word('околачивалось', 4),
  pluralPast: Word('околачивались', 4),
  imperativeInformal: Word('околачивайся', 4),
  imperativeFormal: Word('околачивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(околачиваться.name.text, околачиваться);

export { околачиваться };