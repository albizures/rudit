import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгноить: PerfectVerb = {
  name: Word('сгноить', 4),
  singular1stPerson: Word('сгною', 4),
  singular2ndPerson: Word('сгноишь', 4),
  singular3rdPerson: Word('сгноит', 4),
  plural1stPerson: Word('сгноим', 4),
  plural2ndPerson: Word('сгноите', 4),
  plural3rdPerson: Word('сгноят', 4),
  masculinePast: Word('сгноил', 4),
  femininePast: Word('сгноила', 4),
  neuterPast: Word('сгноило', 4),
  pluralPast: Word('сгноили', 4),
  imperativeInformal: Word('сгнои', 4),
  imperativeFormal: Word('сгноите', 4),
  imperfect: [],
};

perfectVerbs.set(сгноить.name.text, сгноить);

export { сгноить };