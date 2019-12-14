import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унизить: PerfectVerb = {
  name: Word('унизить', 2),
  singular1stPerson: Word('унижу', 2),
  singular2ndPerson: Word('унизишь', 2),
  singular3rdPerson: Word('унизит', 2),
  plural1stPerson: Word('унизим', 2),
  plural2ndPerson: Word('унизите', 2),
  plural3rdPerson: Word('унизят', 2),
  masculinePast: Word('унизил', 2),
  femininePast: Word('унизила', 2),
  neuterPast: Word('унизило', 2),
  pluralPast: Word('унизили', 2),
  imperativeInformal: Word('унизь', 2),
  imperativeFormal: Word('унизьте', 2),
  imperfect: ['унижать'],
};

perfectVerbs.set(унизить.name.text, унизить);

export { унизить };