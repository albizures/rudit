import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перехватить: PerfectVerb = {
  name: Word('перехватить', 8),
  singular1stPerson: Word('перехвачу', 8),
  singular2ndPerson: Word('перехватишь', 6),
  singular3rdPerson: Word('перехватит', 6),
  plural1stPerson: Word('перехватим', 6),
  plural2ndPerson: Word('перехватите', 6),
  plural3rdPerson: Word('перехватят', 6),
  masculinePast: Word('перехватил', 8),
  femininePast: Word('перехватила', 8),
  neuterPast: Word('перехватило', 8),
  pluralPast: Word('перехватили', 8),
  imperativeInformal: Word('перехвати', 8),
  imperativeFormal: Word('перехватите', 8),
  imperfect: [],
};

perfectVerbs.set(перехватить.name.text, перехватить);

export { перехватить };