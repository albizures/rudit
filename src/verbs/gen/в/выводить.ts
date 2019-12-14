import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выводить: PerfectVerb = {
  name: Word('выводить', 1),
  singular1stPerson: Word('вывожу', 1),
  singular2ndPerson: Word('выводишь', 1),
  singular3rdPerson: Word('выводит', 1),
  plural1stPerson: Word('выводим', 1),
  plural2ndPerson: Word('выводите', 1),
  plural3rdPerson: Word('выводят', 1),
  masculinePast: Word('выводил', 1),
  femininePast: Word('выводила', 1),
  neuterPast: Word('выводило', 1),
  pluralPast: Word('выводили', 1),
  imperativeInformal: Word('выводи', 1),
  imperativeFormal: Word('выводите', 1),
  imperfect: [],
};

perfectVerbs.set(выводить.name.text, выводить);

export { выводить };