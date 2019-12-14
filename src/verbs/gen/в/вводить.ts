import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вводить: PerfectVerb = {
  name: Word('вводить', 4),
  singular1stPerson: Word('ввожу', 4),
  singular2ndPerson: Word('вводишь', 2),
  singular3rdPerson: Word('вводит', 2),
  plural1stPerson: Word('вводим', 2),
  plural2ndPerson: Word('вводите', 2),
  plural3rdPerson: Word('вводят', 2),
  masculinePast: Word('вводил', 4),
  femininePast: Word('вводила', 4),
  neuterPast: Word('вводило', 4),
  pluralPast: Word('вводили', 4),
  imperativeInformal: Word('вводи', 4),
  imperativeFormal: Word('вводите', 4),
  imperfect: ['ввести'],
};

perfectVerbs.set(вводить.name.text, вводить);

export { вводить };