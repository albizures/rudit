import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брить: PerfectVerb = {
  name: Word('брить', 2),
  singular1stPerson: Word('брею', 2),
  singular2ndPerson: Word('бреешь', 2),
  singular3rdPerson: Word('бреет', 2),
  plural1stPerson: Word('бреем', 2),
  plural2ndPerson: Word('бреете', 2),
  plural3rdPerson: Word('бреют', 2),
  masculinePast: Word('брил', 2),
  femininePast: Word('брила', 2),
  neuterPast: Word('брило', 2),
  pluralPast: Word('брили', 2),
  imperativeInformal: Word('брей', 2),
  imperativeFormal: Word('брейте', 2),
  imperfect: ['побрить'],
};

perfectVerbs.set(брить.name.text, брить);

export { брить };