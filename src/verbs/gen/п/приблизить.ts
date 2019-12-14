import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приблизить: PerfectVerb = {
  name: Word('приблизить', 5),
  singular1stPerson: Word('приближу', 5),
  singular2ndPerson: Word('приблизишь', 5),
  singular3rdPerson: Word('приблизит', 5),
  plural1stPerson: Word('приблизим', 5),
  plural2ndPerson: Word('приблизите', 5),
  plural3rdPerson: Word('приблизят', 5),
  masculinePast: Word('приблизил', 5),
  femininePast: Word('приблизила', 5),
  neuterPast: Word('приблизило', 5),
  pluralPast: Word('приблизили', 5),
  imperativeInformal: Word('приблизь', 5),
  imperativeFormal: Word('приблизьте', 5),
  imperfect: [],
};

perfectVerbs.set(приблизить.name.text, приблизить);

export { приблизить };