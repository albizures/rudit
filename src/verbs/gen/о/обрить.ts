import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрить: PerfectVerb = {
  name: Word('обрить', 3),
  singular1stPerson: Word('обрею', 3),
  singular2ndPerson: Word('обреешь', 3),
  singular3rdPerson: Word('обреет', 3),
  plural1stPerson: Word('обреем', 3),
  plural2ndPerson: Word('обреете', 3),
  plural3rdPerson: Word('обреют', 3),
  masculinePast: Word('обрил', 3),
  femininePast: Word('обрила', 3),
  neuterPast: Word('обрило', 3),
  pluralPast: Word('обрили', 3),
  imperativeInformal: Word('обрей', 3),
  imperativeFormal: Word('обрейте', 3),
  imperfect: [],
};

perfectVerbs.set(обрить.name.text, обрить);

export { обрить };