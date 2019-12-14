import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привить: PerfectVerb = {
  name: Word('привить', 4),
  singular1stPerson: Word('привью', 5),
  singular2ndPerson: Word('привьёшь', 2),
  singular3rdPerson: Word('привьёт', 2),
  plural1stPerson: Word('привьём', 2),
  plural2ndPerson: Word('привьёте', 7),
  plural3rdPerson: Word('привьют', 5),
  masculinePast: Word('привил', 4),
  femininePast: Word('привила', 6),
  neuterPast: Word('привило', 4),
  pluralPast: Word('привили', 4),
  imperativeInformal: Word('привей', 4),
  imperativeFormal: Word('привейте', 4),
  imperfect: [],
};

perfectVerbs.set(привить.name.text, привить);

export { привить };