import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охватить: PerfectVerb = {
  name: Word('охватить', 5),
  singular1stPerson: Word('охвачу', 5),
  singular2ndPerson: Word('охватишь', 3),
  singular3rdPerson: Word('охватит', 3),
  plural1stPerson: Word('охватим', 3),
  plural2ndPerson: Word('охватите', 3),
  plural3rdPerson: Word('охватят', 3),
  masculinePast: Word('охватил', 5),
  femininePast: Word('охватила', 5),
  neuterPast: Word('охватило', 5),
  pluralPast: Word('охватили', 5),
  imperativeInformal: Word('охвати', 5),
  imperativeFormal: Word('охватите', 5),
  imperfect: [],
};

perfectVerbs.set(охватить.name.text, охватить);

export { охватить };