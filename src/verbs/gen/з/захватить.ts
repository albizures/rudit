import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захватить: PerfectVerb = {
  name: Word('захватить', 6),
  singular1stPerson: Word('захвачу', 6),
  singular2ndPerson: Word('захватишь', 4),
  singular3rdPerson: Word('захватит', 4),
  plural1stPerson: Word('захватим', 4),
  plural2ndPerson: Word('захватите', 4),
  plural3rdPerson: Word('захватят', 4),
  masculinePast: Word('захватил', 6),
  femininePast: Word('захватила', 6),
  neuterPast: Word('захватило', 6),
  pluralPast: Word('захватили', 6),
  imperativeInformal: Word('захвати', 6),
  imperativeFormal: Word('захватите', 6),
  imperfect: ['захватывать'],
};

perfectVerbs.set(захватить.name.text, захватить);

export { захватить };