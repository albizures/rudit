import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const составить: PerfectVerb = {
  name: Word('составить', 4),
  singular1stPerson: Word('составлю', 4),
  singular2ndPerson: Word('составишь', 4),
  singular3rdPerson: Word('составит', 4),
  plural1stPerson: Word('составим', 4),
  plural2ndPerson: Word('составите', 4),
  plural3rdPerson: Word('составят', 4),
  masculinePast: Word('составил', 4),
  femininePast: Word('составила', 4),
  neuterPast: Word('составило', 4),
  pluralPast: Word('составили', 4),
  imperativeInformal: Word('составь', 4),
  imperativeFormal: Word('составьте', 4),
  imperfect: ['составлять'],
};

perfectVerbs.set(составить.name.text, составить);

export { составить };