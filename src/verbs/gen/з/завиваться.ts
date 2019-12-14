import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завиваться: PerfectVerb = {
  name: Word('завиваться', 5),
  singular1stPerson: Word('завиваюсь', 5),
  singular2ndPerson: Word('завиваешься', 5),
  singular3rdPerson: Word('завивается', 5),
  plural1stPerson: Word('завиваемся', 5),
  plural2ndPerson: Word('завиваетесь', 5),
  plural3rdPerson: Word('завиваются', 5),
  masculinePast: Word('завивался', 5),
  femininePast: Word('завивалась', 5),
  neuterPast: Word('завивалось', 5),
  pluralPast: Word('завивались', 5),
  imperativeInformal: Word('завивайся', 5),
  imperativeFormal: Word('завивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(завиваться.name.text, завиваться);

export { завиваться };