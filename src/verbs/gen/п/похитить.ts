import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похитить: PerfectVerb = {
  name: Word('похитить', 3),
  singular1stPerson: Word('похичу', 3),
  singular2ndPerson: Word('похитишь', 3),
  singular3rdPerson: Word('похитит', 3),
  plural1stPerson: Word('похитим', 3),
  plural2ndPerson: Word('похитите', 3),
  plural3rdPerson: Word('похитят', 3),
  masculinePast: Word('похитил', 3),
  femininePast: Word('похитила', 3),
  neuterPast: Word('похитило', 3),
  pluralPast: Word('похитили', 3),
  imperativeInformal: Word('похить', 3),
  imperativeFormal: Word('похитьте', 3),
  imperfect: ['похищать'],
};

perfectVerbs.set(похитить.name.text, похитить);

export { похитить };