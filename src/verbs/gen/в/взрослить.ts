import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взрослить: PerfectVerb = {
  name: Word('взрослить', 6),
  singular1stPerson: Word('взрослю', 6),
  singular2ndPerson: Word('взрослишь', 6),
  singular3rdPerson: Word('взрослит', 6),
  plural1stPerson: Word('взрослим', 6),
  plural2ndPerson: Word('взрослите', 6),
  plural3rdPerson: Word('взрослят', 6),
  masculinePast: Word('взрослил', 6),
  femininePast: Word('взрослила', 6),
  neuterPast: Word('взрослило', 6),
  pluralPast: Word('взрослили', 6),
  imperativeInformal: Word('взросли', 6),
  imperativeFormal: Word('взрослите', 6),
  imperfect: [],
};

perfectVerbs.set(взрослить.name.text, взрослить);

export { взрослить };