import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побрить: PerfectVerb = {
  name: Word('побрить', 4),
  singular1stPerson: Word('побрею', 4),
  singular2ndPerson: Word('побреешь', 4),
  singular3rdPerson: Word('побреет', 4),
  plural1stPerson: Word('побреем', 4),
  plural2ndPerson: Word('побреете', 4),
  plural3rdPerson: Word('побреют', 4),
  masculinePast: Word('побрил', 4),
  femininePast: Word('побрила', 4),
  neuterPast: Word('побрило', 4),
  pluralPast: Word('побрили', 4),
  imperativeInformal: Word('побрей', 4),
  imperativeFormal: Word('побрейте', 4),
  imperfect: [],
};

perfectVerbs.set(побрить.name.text, побрить);

export { побрить };