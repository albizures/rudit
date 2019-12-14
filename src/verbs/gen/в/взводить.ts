import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взводить: PerfectVerb = {
  name: Word('взводить', 5),
  singular1stPerson: Word('взвожу', 5),
  singular2ndPerson: Word('взводишь', 3),
  singular3rdPerson: Word('взводит', 3),
  plural1stPerson: Word('взводим', 3),
  plural2ndPerson: Word('взводите', 3),
  plural3rdPerson: Word('взводят', 3),
  masculinePast: Word('взводил', 5),
  femininePast: Word('взводила', 5),
  neuterPast: Word('взводило', 5),
  pluralPast: Word('взводили', 5),
  imperativeInformal: Word('взводи', 5),
  imperativeFormal: Word('взводите', 5),
  imperfect: [],
};

perfectVerbs.set(взводить.name.text, взводить);

export { взводить };