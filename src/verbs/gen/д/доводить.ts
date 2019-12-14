import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доводить: PerfectVerb = {
  name: Word('доводить', 5),
  singular1stPerson: Word('довожу', 5),
  singular2ndPerson: Word('доводишь', 3),
  singular3rdPerson: Word('доводит', 3),
  plural1stPerson: Word('доводим', 3),
  plural2ndPerson: Word('доводите', 3),
  plural3rdPerson: Word('доводят', 3),
  masculinePast: Word('доводил', 5),
  femininePast: Word('доводила', 5),
  neuterPast: Word('доводило', 5),
  pluralPast: Word('доводили', 5),
  imperativeInformal: Word('доводи', 5),
  imperativeFormal: Word('доводите', 5),
  imperfect: ['довести'],
};

perfectVerbs.set(доводить.name.text, доводить);

export { доводить };