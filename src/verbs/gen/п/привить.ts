import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привить: PerfectVerb = {
  name: Word('привить', 4),
  singular1stPerson: Word('привью', 5),
  singular2ndPerson: Word('привьёшь', 5),
  singular3rdPerson: Word('привьёт', 5),
  plural1stPerson: Word('привьём', 5),
  plural2ndPerson: Word('привьёте', 5),
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