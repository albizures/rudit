import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отводить: PerfectVerb = {
  name: Word('отводить', 5),
  singular1stPerson: Word('отвожу', 5),
  singular2ndPerson: Word('отводишь', 3),
  singular3rdPerson: Word('отводит', 3),
  plural1stPerson: Word('отводим', 3),
  plural2ndPerson: Word('отводите', 3),
  plural3rdPerson: Word('отводят', 3),
  masculinePast: Word('отводил', 5),
  femininePast: Word('отводила', 5),
  neuterPast: Word('отводило', 5),
  pluralPast: Word('отводили', 5),
  imperativeInformal: Word('отводи', 5),
  imperativeFormal: Word('отводите', 5),
  imperfect: ['отвести'],
};

perfectVerbs.set(отводить.name.text, отводить);

export { отводить };