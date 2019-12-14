import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допустить: PerfectVerb = {
  name: Word('допустить', 6),
  singular1stPerson: Word('допущу', 5),
  singular2ndPerson: Word('допустишь', 3),
  singular3rdPerson: Word('допустит', 3),
  plural1stPerson: Word('допустим', 3),
  plural2ndPerson: Word('допустите', 3),
  plural3rdPerson: Word('допустят', 3),
  masculinePast: Word('допустил', 6),
  femininePast: Word('допустила', 6),
  neuterPast: Word('допустило', 6),
  pluralPast: Word('допустили', 6),
  imperativeInformal: Word('допусти', 6),
  imperativeFormal: Word('допустите', 6),
  imperfect: ['допускать'],
};

perfectVerbs.set(допустить.name.text, допустить);

export { допустить };