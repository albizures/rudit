import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбрить: PerfectVerb = {
  name: Word('выбрить', 1),
  singular1stPerson: Word('выбрею', 1),
  singular2ndPerson: Word('выбреешь', 1),
  singular3rdPerson: Word('выбреет', 1),
  plural1stPerson: Word('выбреем', 1),
  plural2ndPerson: Word('выбреете', 1),
  plural3rdPerson: Word('выбреют', 1),
  masculinePast: Word('выбрил', 1),
  femininePast: Word('выбрила', 1),
  neuterPast: Word('выбрило', 1),
  pluralPast: Word('выбрили', 1),
  imperativeInformal: Word('выбрей', 1),
  imperativeFormal: Word('выбрейте', 1),
  imperfect: [],
};

perfectVerbs.set(выбрить.name.text, выбрить);

export { выбрить };