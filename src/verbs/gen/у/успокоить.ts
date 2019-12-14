import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const успокоить: PerfectVerb = {
  name: Word('успокоить', 5),
  singular1stPerson: Word('успокою', 5),
  singular2ndPerson: Word('успокоишь', 5),
  singular3rdPerson: Word('успокоит', 5),
  plural1stPerson: Word('успокоим', 5),
  plural2ndPerson: Word('успокоите', 5),
  plural3rdPerson: Word('успокоят', 5),
  masculinePast: Word('успокоил', 5),
  femininePast: Word('успокоила', 5),
  neuterPast: Word('успокоило', 5),
  pluralPast: Word('успокоили', 5),
  imperativeInformal: Word('успокой', 5),
  imperativeFormal: Word('успокойте', 5),
  imperfect: ['успокаивать'],
};

perfectVerbs.set(успокоить.name.text, успокоить);

export { успокоить };