import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбрить: PerfectVerb = {
  name: Word('сбрить', 3),
  singular1stPerson: Word('сбреу', 3),
  singular2ndPerson: Word('сбреешь', 3),
  singular3rdPerson: Word('сбреет', 3),
  plural1stPerson: Word('сбреем', 3),
  plural2ndPerson: Word('сбреете', 3),
  plural3rdPerson: Word('сбреют', 3),
  masculinePast: Word('сбрил', 3),
  femininePast: Word('сбрила', 3),
  neuterPast: Word('сбрило', 3),
  pluralPast: Word('сбрили', 3),
  imperativeInformal: Word('сбрей', 3),
  imperativeFormal: Word('сбрейте', 3),
  imperfect: [],
};

perfectVerbs.set(сбрить.name.text, сбрить);

export { сбрить };