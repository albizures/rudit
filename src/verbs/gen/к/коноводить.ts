import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коноводить: PerfectVerb = {
  name: Word('коноводить', 5),
  singular1stPerson: Word('коновожу', 5),
  singular2ndPerson: Word('коноводишь', 5),
  singular3rdPerson: Word('коноводит', 5),
  plural1stPerson: Word('коноводим', 5),
  plural2ndPerson: Word('коноводите', 5),
  plural3rdPerson: Word('коноводят', 5),
  masculinePast: Word('коноводил', 5),
  femininePast: Word('коноводила', 5),
  neuterPast: Word('коноводило', 5),
  pluralPast: Word('коноводили', 5),
  imperativeInformal: Word('коноводь', 5),
  imperativeFormal: Word('коноводьте', 5),
  imperfect: [],
};

perfectVerbs.set(коноводить.name.text, коноводить);

export { коноводить };