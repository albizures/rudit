import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбогатеть: PerfectVerb = {
  name: Word('разбогатеть', 8),
  singular1stPerson: Word('разбогатею', 8),
  singular2ndPerson: Word('разбогатеешь', 8),
  singular3rdPerson: Word('разбогатеет', 8),
  plural1stPerson: Word('разбогатеем', 8),
  plural2ndPerson: Word('разбогатеете', 8),
  plural3rdPerson: Word('разбогатеют', 8),
  masculinePast: Word('разбогател', 8),
  femininePast: Word('разбогатела', 8),
  neuterPast: Word('разбогатело', 8),
  pluralPast: Word('разбогатели', 8),
  imperativeInformal: Word('разбогатей', 8),
  imperativeFormal: Word('разбогатейте', 8),
  imperfect: [],
};

perfectVerbs.set(разбогатеть.name.text, разбогатеть);

export { разбогатеть };