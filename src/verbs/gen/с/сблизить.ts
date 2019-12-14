import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сблизить: PerfectVerb = {
  name: Word('сблизить', 3),
  singular1stPerson: Word('сближу', 3),
  singular2ndPerson: Word('сблизишь', 3),
  singular3rdPerson: Word('сблизит', 3),
  plural1stPerson: Word('сблизим', 3),
  plural2ndPerson: Word('сблизите', 3),
  plural3rdPerson: Word('сблизят', 3),
  masculinePast: Word('сблизил', 3),
  femininePast: Word('сблизила', 3),
  neuterPast: Word('сблизило', 3),
  pluralPast: Word('сблизили', 3),
  imperativeInformal: Word('сблизь', 3),
  imperativeFormal: Word('сблизьте', 3),
  imperfect: [],
};

perfectVerbs.set(сблизить.name.text, сблизить);

export { сблизить };