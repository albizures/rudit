import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возводить: PerfectVerb = {
  name: Word('возводить', 6),
  singular1stPerson: Word('возвожу', 6),
  singular2ndPerson: Word('возводишь', 4),
  singular3rdPerson: Word('возводит', 4),
  plural1stPerson: Word('возводим', 4),
  plural2ndPerson: Word('возводите', 4),
  plural3rdPerson: Word('возводят', 4),
  masculinePast: Word('возводил', 6),
  femininePast: Word('возводила', 6),
  neuterPast: Word('возводило', 6),
  pluralPast: Word('возводили', 6),
  imperativeInformal: Word('возводи', 6),
  imperativeFormal: Word('возводите', 6),
  imperfect: [],
};

perfectVerbs.set(возводить.name.text, возводить);

export { возводить };